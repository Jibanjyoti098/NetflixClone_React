import React, { useState } from 'react'
import logo from "../assets/logo.png"
import Footer from '../components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../Firebase'
import { toast } from 'react-hot-toast'

const Register = () => {
  // const [signState, setSignState] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user_auth = async (e) => {
    // !Email verification Logic 
    e.preventDefault();
    try {
      setLoading(true);
      await signup(email, password);
      toast.success("Account created successfully! Please login.");
      // ^Needs to apply comndition 
       setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error("Email already registered. Please login.");
      } else if (error.code === 'auth/invalid-email') {
        toast.error("Invalid email address");
      } else if (error.code === 'auth/weak-password') {
        toast.error("Password is too weak");
      } else {
        toast.error(error.message || "Registration failed");
      }
    } finally {
      setLoading(false);
    }
  }
return (
  <>
    {/* //&background image  */}
    <div className='h-[100vh] w-full bg-cover bg-center py-[20px] px-[8%]' style={{
      backgroundImage: `Linear-gradient(#0000007e, #0000007e), url("/background_banner.jpg")`
    }}>
      {/* //&Header Component  */}
      <Link to={"/"}><img src={logo} className="w-[150px]" /></Link>
      {/* //&Sign-up form  */}
      <div className='pt-[50px]'>
        <div className='w-[100%] max-w-[450px] bg-black opacity-[0.75] rounded-[4px] p-[60px] m-auto'>
          <h1 className="text-[32px] text-white font-medium mb-[28px]">Sign Up</h1>
          {/* //! This is form */}
          <form onSubmit={user_auth}>
            {/* //~Email */}
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium w-[100%]' type="email" placeholder='Email or mobile number' required disabled={loading}/>
            {/* //~password */}
            <input onChange={(e) => setPassword(e.target.value) } value={password} className='h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium w-[100%] placeholder-' type="password" placeholder='Password' required disabled={loading}/>
            {/* //~sign-up button */}
              <button 
                type="submit"
                className='h-[50px] text-white my-[12px] mt-[20px] border-0 outline-0 rounded-[4px] p-[16px] bg-[#e50916] hover:bg-[#c50916] text-[16px] font-medium w-[100%] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' // ✅ NEW: Disabled styles
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'} {/* ✅ NEW: Loading text */}
              </button>
            {/* //~footer div for checkbox etc. */}
            <div className='flex  justify-between text-[#b3b3b3] text-[16px] flex-col'>
              {/* //~checkbox input remeber*/}
              <div className='flex items-center gap-[5px]'>
                <input className='h-[18px] w-[18px] my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium cursor-pointer' type="checkbox" name="" id="remember" />
                <label className='text-white ' htmlFor='remember'>Remember me</label>
              </div>

              {/* //~Already have an account label*/}
              <div className='mb-2'>
                <label className='font-bold'>Already on Netflix? </label>
                {/* //~signup label*/}
                <Link to={`/login`} className='font-bold text-white hover:underline cursor-pointer'>Sign-in now.</Link>
              </div>
            </div>
            {/* //~Learn and message  */}
            <div>
              <p className='text-[12px]'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
              <label className='text-blue-500 underline cursor-pointer text-[13px]'>Learn more.</label>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer /> {/*//*Footer Function */}
  </>
)
}

export default Register
