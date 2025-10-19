import React from 'react'
import logo from '../assets/logo.png'


const Login = () => {
  return (
    //  //&Login Page  */}
    <div className='h-[100vh] w-full bg-cover bg-center py-[20px] px-[8%] flex justify-center items-center' style={{
      backgroundImage:`Linear-gradient(#0000007e, #0000007e), url("/background_banner.jpg")`
    }}>
      <img src={logo} className="w-[150px]" />
      {/* //&Log-in form  */}
      <form className='flex flex-col gap-4 max-w-[450px] bg-black opacity-[0.75] rounded-[4px] p-[60px m-auto]'>
        <h1 className="text-[32px] font-medium">Sign In</h1>
        <input className='bg-white w-[400px]' type="email"/>
        <input className='bg-white w-[400px]' type="password" />
        <input className='bg-white text-black w-[400px]' type="button" value="Sign in" />
        <label > OR </label>
        <input className='bg-white w-[400px] text-black' type="button" value="Use a sign-in code"/>
        <label className='underline'>Forgot password?</label>
        <input className='bg-white w-[400px]' type="checkbox" name="" id="" />
        <label >Remember me</label>
        <label >New to Netflix?</label>
        <label>Sign up now.</label>
      </form>
    </div>
  )
}

export default Login
