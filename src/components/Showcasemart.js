import React, { useEffect, useState } from 'react'
import { Products } from '../data/Product'
import SkeletonLoader from '../skeleton/SkeletonLoader'
import img2 from '../assests/pexels-photo-3756679.webp'
import Produce from './Produce'




const Showcasemart = () => {
  const [isloading, setIsloading] = useState(true)
  const [ filter, setFilter] = useState('')

  const  searchText = (e) => {
     setFilter(e.target.value);
  }

  let dataSearch = Products.filter(product =>{
      return Object.keys(product).some(key => product[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  })

//  console.warn(filter)

  useEffect(() => {
    setTimeout(() => {
        setIsloading(false)
    }, 5000)
  }, [])

  return (
   <div className=' bg-[#FBFCFF]  w-[100%] h-[100%] pb-[216px]'>
     <div className='  max-w-[1200px] mx-auto'>
       <div>
        <div className=' flex justify-between'>
          <div className=' '>
            <p className=' pt-72  text-[68px]  leading-[70px] '>GetUp to 30% Off<br/><span className=' text-[#FF473E]'>New  Arrivals </span> </p>
            <button className=' bg-[#FF473E] border-none  rounded-full text-white w-36 h-10'>Shop</button>
          </div>
          <div>
            <img className=' w-[600px] h-[600px] mt-48  ' src={img2} alt=''/>
          </div>
        </div>
       
         <div className=' flex justify-between mt-36  rounded-full bg-white  w-[490px] h-14'>
          <div className=' flex'>
            <svg className=' mt-[18px] ml-4' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.675 17C14.259 17 17.975 13.4183 17.975 9C17.975 4.58172 14.259 1 9.675 1C5.09104 1 1.375 4.58172 1.375 9C1.375 13.4183 5.09104 17 9.675 17Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.05 19L15.5369 14.65" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input 
            type='text'
            className=' w-[300px] outline-none border-none rounded-full  ml-4'
             placeholder='Search any item'
             value={filter}
             onChange={searchText.bind(this)}
             />
          </div>
           <buton className=' w-[130px] rounded-full bg-[#FF473E] text-center pt-4 text-white  ' >Search</buton>
         </div>
         
          { isloading ? (
              <SkeletonLoader/>  
          ) : (
            <div className='  flex flex-wrap gap-16 mt-20'>

            {
             dataSearch.map((product, index) => (
                <Produce data={product} />
             ))
            }
          </div>
          )}
 
       </div>
     </div>
   </div>
  )
}

export default Showcasemart