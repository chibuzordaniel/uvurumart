import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

const CardItems = (props ) => {
    const {id, name, price, image} = props.data;
    const { removeFromCart} = useContext(ShopContext)
  return (
    <div className='  '>
       <div className=' flex justify-between border pb-3'>
        <img className='  w-28 h-16 ml-4 mt-3' src={image} alt='' />
        <div className=' leading-[0] pt-5'>
            <p>{name}</p>
            <p>${price}</p>
        </div>
        <button className=' w-6 h-5 mt-8 mr-5' onClick={() => removeFromCart(id)}>x</button>
       </div>

    </div>
  )
}

export default CardItems