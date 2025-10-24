import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import hero_banner from "../assets/hero_banner.jpg"
import hero_title from "../assets/hero_title.png"
import play_icon from "../assets/play_icon.png"
import info_icon from "../assets/info_icon.png"
import TitleCard from '../components/TitleCard/TitleCard'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      {/* //*Navbar  */}
      <NavBar/> 
     
      {/* //&hero */}
      <div className='relative'> 
        <img src={hero_banner} alt="" className='w-full [mask-image:linear-gradient(to_left,black_5%,transparent)]'/>
        
        {/* //&hero_caption */}
        <div className='absolute bottom-0 pl-[6%] w-[100%]'>
           
            {/* //&caption image */}
        <img src={hero_title} alt="" className='w-[90%] max-w-[420px] mb-[30px]'/>
        <p className='max-w-[700px] text-[17px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum laborum natus vitae harum facere nostrum ut illum ad laudantium!</p>
        
        {/*//& buttons */}
        <div className='flex gap-[10px] mb-[50px]'>
            <button className='border-0 outline-0 px-[20px] py-[8px] text-[15px] text-black font-[600] bg-white rounded-[4px] cursor-pointer inline-flex items-center gap-[10px]  hover:bg-[#6d6d6e66]'>
                <img src={play_icon} alt="" className='w-[25px]'/>Play</button>
            <button className='border-0 outline-0 px-[20px] py-[8px] text-[15px] font-[600] rounded-[4px] cursor-pointer inline-flex items-center gap-[10px] text-[#fff] bg-[#6d6d6eb3] hover:bg-[#ffffffbf]'>
                <img src={info_icon} alt="" className='w-[25px]'/>More Info</button>
        </div>
        <TitleCard/> {/*//*TitleCard */}
        </div>
      </div>

      {/* //&random cards  */}
      <div className='pl-[6%]'>
        <TitleCard title={"Blockbuster movies"}/>
        <TitleCard title={"Only on Netflix"}/>
        <TitleCard title={"Upcoming Movies"}/>
        <TitleCard title={"Top picks for you"}/>
      </div>
      <Footer/> {/*//*Footer*/}
    </div>
  )
}

export default Home
