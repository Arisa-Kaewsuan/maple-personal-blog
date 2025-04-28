import React from "react";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";
import { login } from "@/api/auth";

const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

const LogInPage = () => {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(signUpSchema),
    })
  
    const onSubmit = async (data) => {
      console.log('Form submitted:', data)
      try{
        await login(data)
        console.log('Login successful:', data)
      }
      catch (error) {
        console.error('Login failed:', error)
      }
    }

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center h-screen gap-4 mx-4 lg:mx-80 my-[4.75rem] bg-brown-200 text-brown-400 rounded-2xl">
        <h1 className="text-brown-600 text-h2 font-semibold mb-6"> Log in </h1>
 
        <div className="px-4 md:px-32 flex flex-col gap-4 w-full">
          <label htmlFor="email" className="text-brown-400 font-medium">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="Email"
            className="bg-white border border-brown-300 p-3 rounded-md"
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}

          <label htmlFor="password" className="text-brown-400 font-medium">
            Password
          </label>
          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            className="bg-white border border-brown-300 p-3 rounded-md"
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="bg-brown-600 text-white font-semibold py-3 px-10 rounded-full mt-6">
          Log in
        </button>

        <p className="text-brown-400 font-medium">
          Don't have any account?
          <Link to={"/signup"} className="text-brown-600 font-semibold underline">
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
};


export default LogInPage;
