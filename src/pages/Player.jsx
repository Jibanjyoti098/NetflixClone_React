import React, { useEffect, useState } from 'react'
import back_arrow_icon from "../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  const [apiData, setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDA4N2YwMThiNTViMmUwZWJkYTdkMWI1YmM3OTlkMSIsIm5iZiI6MTc2MTQyMzE1OS4xMzQsInN1YiI6IjY4ZmQyZjM3MWQwODhkOTQ0ZGZiNmIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfL3QgdxAf6ODHR-x7n43oPEeGBqwi3PIam3Cxuwk-U'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [])
  return (
    // &player class 
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      {/* //&logo  */}
      <img src={back_arrow_icon} alt="" className='absolute top-[20px] left-[20px] w-[50px] cursor-pointer' onClick={()=>{navigate(-2)}}/>
      {/* //& play video  */}
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" height="90%" width="90%" className='rounded-[10px]'></iframe>
      {/* //&player info  */}
      <div className='flex items-center justify-between w-[90%]'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player
