import React from 'react'
import Group from '../../../assets/images/Group83.png'
export default function Register() {
  return (
    <div className=''>
        <div className="flex w-full items-center">
            <div className="lg:w-1/2 justify-center px-[100px]">
                <h1 className='font-bold text-xl mt-10'>Sign Up</h1>
                <form>
                <div className='flex flex-col gap-2 w-[400px]'>
                <label htmlFor="email">
                    Nama
                </label>
                <input type="email" id='email'  className='h-10 px-3 font-light border-gray-300 border-[1px]'/>
            </div>
            <div className='flex flex-col gap-2 w-[400px]'>
                <label htmlFor="Password">
                    Email
                </label>
                <input type="password" id='password' required  className='h-10 px-3 font-light border-gray-300 border-[1px]'/>
            </div>
            <div className='flex flex-col gap-2 w-[400px]'>
                <label htmlFor="Password">
                    Create Password
                </label>
                <input type="password" id='password' required  className='h-10 px-3 font-light border-gray-300 border-[1px]'/>
            </div>
            <div className="flex w-full mt-6">
                <button className='h-10 w-[400px]  lg:w-[400px] bg-blue-600 text-white rounded-lg'>Sign in</button>
            </div>
            <div className="flex gap-2 mx-9 mt-7">

            <h3 className=''>Already have an account?</h3>
            <a href="" className='text-blue-700'>Sign In here</a>
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
