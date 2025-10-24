import React from 'react'
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"

const NavBar = () => {
  return (
    //  &nav
    <div className='w-[100%] py-[30px] px-[150px] flex justify-between fixed text-[14px] text-[#e5e5e5] z-[1]'>

      {/* //&left */}
      <div className='flex justify-center gap-[50px]'>
      <img src={logo} alt=""  className='w-[150px]' />
      <ul className='flex gap-[20px]'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>TV Shows</li>
          <li className='cursor-pointer'>Movies</li>
          <li className='cursor-pointer'>New & Popular</li>
          <li className='cursor-pointer'>My List</li>
          <li className='cursor-pointer'>Browse by Languages</li>
        </ul>
      </div>

      {/* //&Right */}
      <div className='flex gap[20px] justify-center'>
        <img src={search_icon} alt="" className='w-[20px] cursor-pointer'/>
        <p>Children</p>
        <img src={bell_icon} alt="" className='w-[20px] cursor-pointer'/>
      </div>

      {/* //&profile */}
      <div className='flex justify-center gap-[10px] cursor-pointer relative group/profile'>
        <img src={profile_img} alt="" className='w-[35px] rounded-[4px] cursor-pointer'/>
        <img src={caret_icon} alt="" />
       
        {/* //&dropdown */}
        <div className='dropdown absolute top-[100%] right-0 w-max bg-[#191919] px-[18px] py-[22px] rounded-[2px] z-[1] hidden group-hover/profile:block'>
          <p  className='text-[13px] underline decoration-solid cursor-pointer'>Sign Out of Netflix</p>
        </div>

      </div>


    </div>
  )
}

export default NavBar
