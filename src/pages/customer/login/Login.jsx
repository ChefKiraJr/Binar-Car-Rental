import React from 'react'
import Group from '../../../assets/images/Group83.png'
export default function Login() {
  return (
    <div className=''>
        <div className="flex w-full items-center">
            <div className="lg:w-1/2 justify-center px-[100px]">
                <h1 className='font-bold text-xl mt-10'>Welcome back</h1>
                <form>
                <div className='flex flex-col gap-2 w-[400px]'>
                <label htmlFor="email">
                    email
                </label>
                <input type="email" id='email'  className='h-10 px-3 font-light border-gray-300 border-[1px]'/>
            </div>
            <div className='flex flex-col gap-2 w-[400px]'>
                <label htmlFor="Password">
                    Password
                </label>
                <input type="password" id='password'  className='h-10 px-3 font-light border-gray-300 border-[1px]'/>
            </div>
            <div className="flex w-full mt-6">
                <button className='h-10 w-[400px]  lg:w-[400px] bg-blue-600 text-white rounded-lg'>Sign in</button>
            </div>
            <div className="flex gap-2 mx-9 mt-7">

            <h3 className=''>Don’t have an account?</h3>
            <a href="" className='text-blue-700'>Sign Up for free</a>
            </div>
                </form>
            </div>
            <div className="hidden lg:block lg:w-1/2 ">
                <img className='h-[1000px]' src={Group} alt="" />
            </div>
        </div>
    </div>
  )
}
