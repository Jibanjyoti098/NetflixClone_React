import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Footer from "../components/Footer/Footer"
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../Firebase'
import toast from 'react-hot-toast'




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const user = await login(email, password);
      if (user) {
        toast.success("Login successful!");
        navigate("/home");
      }

    } catch (error) {

      if (error.code === 'auth/user-not-found') {
        toast.error("No account found with this email");
      } else if (error.code === 'auth/wrong-password') {
        toast.error("Incorrect password");
      } else if (error.code === 'auth/invalid-email') {
        toast.error("Invalid email address");
      } else if (error.code === 'auth/user-disabled') {
        toast.error("This account has been disabled");
      } else {
        toast.error(error.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    //  //&Login Page  */}
    <div className='h-[100vh] w-full bg-cover bg-center py-[20px] px-[8%]' style={{
      backgroundImage: `linear-gradient(#0000007e, #0000007e), url("/background_banner.jpg")`
    }}>
      <Link to={`/`}><img src={logo} className="w-[150px]" /></Link>
      {/* //&Log-in form  */}
      <div className='w-[100%] max-w-[450px] bg-black opacity-[0.75] rounded-[4px] p-[60px] m-auto'>
        <h1 className="text-[32px] text-white font-medium mb-[28px]">Sign In</h1>
        <form onSubmit={user_auth}>
          {/* //~Email */}
          <input onChange={(e) => { setEmail(e.target.value) }} value={email} className='h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium w-[100%]' type="email" placeholder='Email or mobile number' required disabled={loading} />
          {/* //~password */}
          <input onChange={(e) => { setPassword(e.target.value) }} value={password} className='h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium w-[100%] placeholder-' type="password" placeholder='Password' required disabled={loading} />
          {/* //~sign in button */}
          <button
            type="submit"
            className='h-[50px] text-white my-[12px] mt-[20px] border-0 outline-0 rounded-[4px] p-[16px] bg-[#e50916] hover:bg-[#c50916] text-[16px] font-medium w-[100%] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' disabled={loading}>
            {/* //~Loading text */}
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          {/* //~Or label */}
          <label className='px-[46%]'> OR </label>
          {/* //~ use Sign in code button */}
          <input className='h-[50px] bg-[#666] hover:bg-[#555] transition delay-75 text-white my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium w-[100%]  cursor-pointer' type="button" value="Use a sign-in code" />
          {/* //~forgot password label*/}
          <label className='underline cursor-pointer hover:text-gray-300 px-[30%]'>Forgot password?</label>
          {/* //~footer div for checkbox etc. */}
          <div className='flex  justify-between text-[#b3b3b3] text-[16px] flex-col'>
            {/* //~checkbox input remeber*/}
            <div className='flex items-center gap-[5px]'>
              <input className='h-[18px] w-[18px] my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium cursor-pointer' type="checkbox" name="" id="remember" />
              <label className='text-white ' htmlFor='remember'>Remember me</label>
            </div>

            {/* //~New to netflix label*/}
            <div className='mb-2'>
              <label className='font-bold'>New to Netflix? </label>
              {/* //~signup label*/}
              <Link to={`/register`} className='font-bold text-white hover:underline cursor-pointer'>Sign up now.</Link>
            </div>
          </div>
          {/* //~Learn and message  */}
          <div>
            <p className='text-[12px]'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            <label className='text-blue-500 underline cursor-pointer text-[13px]'>Learn more.</label>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login
