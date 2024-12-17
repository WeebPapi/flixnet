"use client"
import React, { useEffect, useState } from 'react'
import ProfileInput from './ProfileInput'
import { auth } from '@/firebase'
import { onAuthStateChanged} from 'firebase/auth'
import { customUpdateProfile } from '@/actions/profile/updateProfile'
import { useRouter } from 'next/navigation'

const ProfileEditForm = () => {
    const router = useRouter()
    const [user, setUser] = React.useState(auth.currentUser)
    const [formData, setFormData] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const [inputFields, setInputFields] = useState({
        displayName: 'Not yet set',
        password: '',
        email: ''
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('') // Clear any previous errors
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user)
          if (user) {
            setInputFields({displayName: (user.displayName? user.displayName as string : 'Not yet set') , email: (user.email as string), password: ''})
          } else {
            // If no user, redirect to login
            router.push('/auth')
          }
        })
    
        return () => unsubscribe()
    }, [router])

    const handleAuthError = async (error: any) => {
        if (error?.code === 'auth/user-token-expired') {
            // Token expired, try to refresh
            try {
                const currentUser = auth.currentUser
                if (currentUser) {
                    await currentUser.getIdToken(true) // Force token refresh
                    return true // Token refreshed successfully
                }
            } catch (refreshError) {
                console.error('Failed to refresh token:', refreshError)
            }
        }
        return false
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        
        try {
            if (!auth.currentUser) {
                throw new Error('Please log in again to update your profile')
            }
            
            try {
                await customUpdateProfile(formData)
                setFormData({}) // Clear form after successful update
                setError('Profile updated successfully!')
            } catch (err: any) {
                // Try to handle token expiration
                const tokenRefreshed = await handleAuthError(err)
                if (tokenRefreshed) {
                    // Retry the update after token refresh
                    await customUpdateProfile(formData)
                    setFormData({})
                    setError('Profile updated successfully!')
                } else {
                    throw err // Re-throw if it's not a token error or refresh failed
                }
            }
        } catch (err: any) {
            if (err?.code === 'auth/user-token-expired') {
                setError('Your session has expired. Please log in again.')
                router.push('/auth')
            } else {
                setError(err instanceof Error ? err.message : 'Failed to update profile')
            }
        } finally {
            setLoading(false)
        }
    }

  return (
    <form className='w-full h-max max-w-[980px] bg-black flex flex-col justify-center items-start py-8 px-12' onSubmit={handleSubmit}>
        {error && <p className={`mb-4 ${error.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{error}</p>}
        <ProfileInput name='displayName' label='Username' type='text' value={inputFields.displayName} onChange={handleChange}/>
        <ProfileInput name='password' label='Password' type='password' value={'Change Password'} onChange={handleChange}/>
        <ProfileInput name='email' label='Email' type='email' value={inputFields.email} onChange={handleChange}/>
        <button 
            type='submit' 
            disabled={loading}
            className={`bg-[#E50914] text-white px-4 py-2 rounded-md my-8 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {loading ? 'Saving...' : 'Save Changes'}
        </button>
    </form>
  )
}

export default ProfileEditForm