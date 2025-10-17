import React from 'react'
import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
const Footer = () => {
   
  //! All footer links in one array
  const footerLinks = [
    'FAQ',
    'Help Centre',
    'Account',
    'Media Centre',
    'Investor Relations',
    'Jobs',
    'Ways to Watch',
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us'
  ]

  return (
    // {/* //&Footer */}
    <div className='py-[30px] px-[6%] w-max-[1000px] mx-auto my-0'>
      {/* //&Footer icons */}
      <div className='flex gap-[20px] my-[40px] mx-0'>
        <img src={youtube_icon} alt="YouTube" className='w-[30px] cursor-pointer'/>
        <img src={facebook_icon} alt="Facebook" className='w-[30px] cursor-pointer'/>
        <img src={instagram_icon} alt="Instagram" className='w-[30px] cursor-pointer'/>
        <img src={twitter_icon} alt="Twitter" className='w-[30px] cursor-pointer'/>
      </div>
      {/* //&Footer menu links Logic */}
      <ul className='grid grid-cols-4 gap-[15px] mb-[30px]'>
        {footerLinks.map((v,i)=>(
          <li key={i} className=' cursor-pointer'>
            {v}
          </li>
          ))}
      </ul>
      {/* //&copyright text  */}
      <p className='text-gray-400 text-[14px]'>© 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
