import React, { useEffect, useRef } from 'react'
import cards_data from "../../assets/cards/Cards_data"


const TitleCard = ({title,category}) => {
  
  // !Scroll wheel logic
  const cardsRef = useRef()
  const handlewheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY
  }
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel', handlewheel)
  },[])

  return (
    <div className='mt-[50px] mb-[30px]'> {/*//&Title cards */}
      <h2 className='mb-[8px]'>{title?title:"Popular on Netflix"}</h2>

      {/* //&card list */}
      <div className='flex gap-[10px] overflow-x-scroll [&::-webkit-scrollbar]:hidden' ref={cardsRef}>

        {cards_data.map((card, index)=>{
          return <div className="relative min-w-[250px]" key={index}>
            <img src={card.image} alt="" className='rounded-[4px] w-[240px] cursor-pointer'/> {/*//&Thumbnails*/}
            <p className='absolute bottom-[10px] right-[10px]'>{card.name}</p> {/*//&Movies name*/}
          </div>
        })}

      </div>
    </div>
  )
}

export default TitleCard
