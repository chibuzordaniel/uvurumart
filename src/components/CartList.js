import React, { useContext } from 'react'
import { Products } from '../data/Product'
import { ShopContext } from '../context/ShopContext'
import CardItems from './CardItems'


const CartList = ({visible, onClose}) => {

  const  {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  if (!visible) return null

  return (
    <div>
        <div className=' bg-white shadow w-[450px] h-[500px] absolute  top-[72px] right-2 rounded-sm'>
            <div className=' flex justify-between border '>
              <p className=' pl-5 font-bold'>Cart</p>
              <p className=' cursor-pointer mr-5 hover:bg-[#FF473E] font-bold hover:text-white w-7 h-7 text-center rounded-full ' onClick={onClose} >x</p>
            </div>

            <div className='overflow-y-auto w-[100%] h-[330px] '>
              {Products.map((product) => {
                if(cartItems[product.id] !== 0) {
                  return<CardItems data={product}/>
                  
                }
                
              })}
           </div>
           <div className=' text-center pt-7'>
             <p>Totalamount: ${totalAmount}</p>
           </div>
        </div>
       
    </div>
  )
}

export default CartList