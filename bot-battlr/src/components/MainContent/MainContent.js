import React from 'react'
import bots from "./db.json"

const MainContent = () => {
  console.log(bots);
  const listItems = bots.map((bots) => 
    <div className='card' key={bots.id}>
      <div className='card_img'>
        <img src={bots.image} alt={bots.name} />
      </div>
      <div className='card_header'>
        <h2>{bots.name}</h2>
        <p>{bots.health}</p>
        <p>{bots.damage}</p>
        <p>{bots.armor}</p>
        <p>{bots.bot_class}</p>
        <p>{bots.created_at}</p>
        <p>{bots.updated_at}</p>
        <div className='btn'>Add to List</div>
      </div>
      
    </div>
    
  )
  return (
    <div className='main_content'>
      {listItems}
    </div>
  )
}

export default MainContent;
