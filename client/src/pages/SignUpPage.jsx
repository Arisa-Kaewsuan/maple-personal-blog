import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import NavBar from '@/components/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const signUpSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    
    try {
      // ส่งข้อมูลไป backend
      const response = await axios.post('http://localhost:4001/auth/signup', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Signup successful:', response.data);
        navigate('/signup/success');
      } else {
        setError('Signup failed: ' + (response.data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError(error.response?.data?.message || 'Error connecting to server');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <NavBar />
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-center items-center h-screen gap-4 mx-4 lg:mx-80 my-[4.75rem] bg-brown-200 text-brown-400 rounded-2xl'
      >
        <h1 className='text-brown-600 text-h2 font-semibold mb-6'>Sign up</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className='px-4 md:px-32 flex flex-col gap-4 w-full'>
          <label htmlFor='name' className='text-brown-400 font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            {...register('name')}
            placeholder='Full name'
            className='bg-white border border-brown-300 p-3 rounded-md'
          />
          {errors.name && (
            <p className='text-red-500 text-sm'>{errors.name.message}</p>
          )}

          <label htmlFor='username' className='text-brown-400 font-medium'>
            Username
          </label>
          <input
            type='text'
            id='username'
            {...register('username')}
            placeholder='Username'
            className='bg-white border border-brown-300 p-3 rounded-md'
          />
          {errors.username && (
            <p className='text-red-500 text-sm'>{errors.username.message}</p>
          )}

          <label htmlFor='email' className='text-brown-400 font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email')}
            placeholder='Email'
            className='bg-white border border-brown-300 p-3 rounded-md'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}

          <label htmlFor='password' className='text-brown-400 font-medium'>
            Password
          </label>
          <input
            type='password'
            id='password'
            {...register('password')}
            placeholder='Password'
            className='bg-white border border-brown-300 p-3 rounded-md'
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='bg-brown-600 text-white font-semibold py-3 px-10 rounded-full mt-6 cursor-pointer disabled:opacity-50'
        >
          {isLoading ? 'Processing...' : 'Sign Up'}
        </button>

        <p className='text-brown-400 font-medium'>
          Already have an account?{' '}
          <Link to={"/login"} className='text-brown-600 font-semibold underline'>
            Log in
          </Link>
        </p>
      </form>
    </>
  )
}

export default SignUpPage