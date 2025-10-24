import React from 'react'
import logo from "../assets/logo.png"
import Footer from '../components/Footer/Footer'
import TitleCard from '../components/TitleCard/TitleCard'

const LandingPage = () => {
  return (
    <>
    
      <div className=' w-full h-[90vh]'  style={{
        backgroundImage: `Linear-gradient(#0000009e, #0000009e),url(/background_banner.jpg)`
      }}>
        {/* //&Nav bar  */}
        <header className='w-full h-[100px] py-[30px] px-[8%]'>
        <div className='flex justify-between'>
            <img src={logo} alt="Netflix" className='w-[150px] cursor-pointer'/>
           <div className='flex gap-3'>
             <select className='bg-black/30 appearance-none px-12 w-[150px] h-[30px]  border border-gray-400 cursor-pointer rounded-sm'>
                <option className='bg-white text-black' value="English">English</option>
                <option className='bg-white text-black' value="Hindi">हिन्दी</option>
            </select>
            <button type="button" className=' bg-[#e50916] hover:bg-[#c50916] rounded-md h-[30px] w-[80px] cursor-pointer'>Sign In</button>
           </div>
        </div>
        </header>
      <main className='w-full h-[60vh] flex justify-center items-center '>
            <div className='flex flex-col gap-3 items-center w-[700px]'>
                {/* //!Unlimited movies div  */}
                <div className='flex flex-col items-center'>
                <div className='text-6xl font-bold'>Unlimited movies, TV</div>
                <div className='text-6xl font-bold'>shows and more</div>
                </div>
                {/* //!subscription div  */}
                <div className='flex flex-col items-center gap-4'>
                <div className='text-[17px]'>Starts at ₹149. Cancel at any time.</div>
                    <div className='text-[17px]'>Ready to watch? Enter your email to create or restart your membership.</div>
                </div>
                {/* //!button div */}
                <div className='flex gap-2'>
                    <input type="text" className='bg-black/40 border-2 pl-4 rounded-sm w-[350px] border-gray-400' placeholder='Email address'/>
                    <input type="button" value="Get Started >" className='bg-[#e50916] hover:bg-[#c50916] w-[150px] h-[55px] rounded-sm' />
                </div>
            </div>
      </main>
      </div>
      <footer>
      <TitleCard/>
      </footer>
      <Footer/>
    </>
  )
}

export default LandingPage
