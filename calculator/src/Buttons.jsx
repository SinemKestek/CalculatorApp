import React from 'react'

function Buttons  ({symbol,handleClick})  {
 

  

  return (
    
       <div onClick={()=>handleClick(symbol)} className='btn'>{symbol}</div>
   

  )
}

export default Buttons