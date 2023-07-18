import React from 'react'

const Signup = () => {
  return (
    <div className='relative flex flex-col items-center pt-4'>
      <div>
      <p>
        Welcome to the future of gaming!
      </p>
      </div>
      <form className='relative gap-[0.3rem]'>
        <div className='flex gap-2'>
        <input type="text" name="" id="" placeholder='First name' className='' />
        <input type="text" name="" id="" placeholder='Last name' className='' />
        </div>

        <div className='flex gap-2 pt-2'>
        <input type="email" name="" id="" placeholder='Email' className='' />
        <input type="email" name="" id="" placeholder='Confirm Email' className='' />
        </div>
        
        <div className='flex flex-col gap-2 max-w-[10rem] pt-2'>
        <input type="password" name="" id="" placeholder='Password' className='' />
        <input type="password" name="" id="" placeholder='Confirm Password' className='' />
        </div>
        <div className='flex justify-center'>
          <button> Create account </button>
        </div>
      </form>
    </div>
  )
}

export default Signup