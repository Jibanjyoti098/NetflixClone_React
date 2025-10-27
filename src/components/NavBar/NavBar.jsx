import React, { useEffect, useRef } from 'react'
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { Link } from 'react-router-dom'
import { logout } from '../../Firebase'

const NavBar = () => {

  const navRef = useRef();
  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 80){
          navRef.current.classList.add('bg-[#141414]')
        }else{
          navRef.current.classList.remove('bg-[#141414]')

        }
      })

    
  },[])

  return (
    //  &nav
    <div ref={navRef} className='w-[100%] py-[30px] px-[150px] flex justify-between fixed text-[14px] text-[#e5e5e5] z-[1]'>

      {/* //&left */}
      <div className='flex justify-center gap-[50px]'>
        <Link to={"/home"}><img src={logo} alt="" className='w-[150px]' /></Link>
        <ul className='flex gap-[20px]'>
          <li className='cursor-pointer hover:underline'>Home</li>
          <li className='cursor-pointer hover:underline'>TV Shows</li>
          <li className='cursor-pointer hover:underline'>Movies</li>
          <li className='cursor-pointer hover:underline'>New & Popular</li>
          <li className='cursor-pointer hover:underline'>My List</li>
          <li className='cursor-pointer hover:underline'>Browse by Languages</li>
        </ul>
      </div>

      {/* //&Right */}
      <div className='flex gap[20px] justify-center items-center gap-5'>
        <img src={search_icon} alt="" className='w-[20px] cursor-pointer' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='w-[20px] cursor-pointer' />

        {/* //&profile */}
        <div className='flex justify-center gap-[10px] cursor-pointer relative group/profile'>
          <img src={profile_img} alt="" className='w-[35px] rounded-[4px] cursor-pointer' />
          <img src={caret_icon} alt="" />

          {/* //&dropdown */}
          <div className='dropdown absolute top-[100%] right-0 w-max bg-[#191919] px-[18px] py-[22px] rounded-[2px] z-[1] hidden group-hover/profile:block'>
            <Link to={`/`}><p onClick={logout()} className='text-[13px] underline decoration-solid cursor-pointer'>Sign Out of Netflix</p></Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default NavBar
