import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
// import cards_data from "../../assets/cards/Cards_data"


function TitleCard({ title, category }) {

  const [apiData, setApiData] = useState([]);
  // !Scroll wheel logic
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDA4N2YwMThiNTViMmUwZWJkYTdkMWI1YmM3OTlkMSIsIm5iZiI6MTc2MTQyMzE1OS4xMzQsInN1YiI6IjY4ZmQyZjM3MWQwODhkOTQ0ZGZiNmIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfL3QgdxAf6ODHR-x7n43oPEeGBqwi3PIam3Cxuwk-U'
    }
  };

  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    //! fetch data from API 
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    // ~ Event scroll 
    cardsRef.current.addEventListener('wheel', handlewheel);
  }, []);

  return (
    <div className='mt-[50px] mb-[30px]'> {/*//&Title cards */}
      <h2 className='mb-[8px]'>{title ? title : "Popular on Netflix"}</h2>

      {/* //&card list */}
      <div className='flex gap-[10px] overflow-x-scroll [&::-webkit-scrollbar]:hidden' ref={cardsRef}>

        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="relative min-w-[250px]" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" className='rounded-[4px] w-[240px] cursor-pointer hover:scale-125 transition delay-[130]' /> {/*//&Thumbnails*/}
            <p className='absolute bottom-[10px] right-[10px] no-underline text-white'>{card.original_title}</p> {/*//&Movies name*/}
          </Link>;
        })}

      </div>
    </div>
  );
}

export default TitleCard
