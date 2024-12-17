"use client"
import { logIn } from '@/actions/auth/login'
import { signUp } from '@/actions/auth/signup'
import React from 'react'
import { useRouter } from 'next/navigation'
import { updateProfilePic } from '@/actions/profile/updateProfilePic'
import defaultProfPic from '@/../public/assets/profileIcons/profIcon2.png'


interface AuthFormProps {
    type: 'login' | 'signup'
}

const AuthForm:React.FC<AuthFormProps> = ({type}) => {
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (type === 'login')    {
            logIn(new FormData(e.currentTarget))
                .then((user) => {
                    if (user) {
                        console.log('Attempting router push', user);
                        user.getIdToken().then((token) => {
                            document.cookie = `token=${token}`;
                            router.push('/dashboard');
                        })    .catch((error) => {
                            console.error('Login failed:', error);
                        });;
                }
            })
        }
        else if (type === 'signup') {
            signUp(new FormData(e.currentTarget)).then((user) => {
                if (user) {
                    console.log(user);
                    const accessToken = user.getIdToken();
                    document.cookie = `token=${accessToken}`;
                    updateProfilePic(defaultProfPic.src);
                    router.push('/dashboard')
                }
            })

        }
    }
  return (
    <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="email">Email</label>
            <input name='email' type="email" className='bg-black text-white'/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input name='password' type="password" className='bg-black text-white'/>
        </div>
        <button type='submit'>{type === 'login' ? 'Login' : 'Sign Up'}</button>
    </form>
  )
}

export default AuthForm