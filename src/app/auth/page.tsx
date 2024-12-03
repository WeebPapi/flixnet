"use client"
import AuthForm from '@/components/AuthForm'
import React from 'react'

export default function AuthPage() {
  const [type, setType] = React.useState<'login' | 'signup'>('login')
  return (
    <div>
      <AuthForm type={type}/>
      <p>{type === 'login' ? 'Don\'t have an account? ' : 'Already have an account? '}<span onClick={() => setType(type === 'login' ? 'signup' : 'login')}>{type === 'login' ? 'Sign Up' : 'Login'}</span></p>
    </div>
  )
}
