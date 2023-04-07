import { useContext } from 'react';
import {ShopContext} from '../context/ShopContext'


const Produce = (props ) => {
  const {id, name, price, image} = props.data;
  const  {addToCart, cartItems} = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
        <div key={id}>
            <div className=' bg-white shadow w-[352px] h-[471px] rounded-md  text-[#8588A3] '>
            <img className=' w-[100%] h-[320px] rounded-md' src={image} alt=''/>
            <h3 className=' text-[#64688D] text-base pl-4'>{name} <span className=' pl-52'>${price}</span> </h3>
            <div className=' '>
                <div className=' flex '> 
                </div>
                <div className=' ml-4 '>
                <button className=' w-24 mt-6  h-[40px] bg-[#FF473E] cursor-pointer  text-white border-none' onClick={() => addToCart(id) } >Add Cart </button>
                {/* {cartItemAmount > 0 && <> ( {cartItemAmount}) </> }  */}
                </div>
            </div>
       </div> 
    </div>
  )
}

export default Produce