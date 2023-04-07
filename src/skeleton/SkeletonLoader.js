import React from 'react'

const SkeletonLoader = () => {
    const arry = []
    for(let i = 1; i<= 15;i++) arry.push(i);
     
    return (
      <div className='  max-w-[1200px] mx-auto mt-14 mb-20'>
          <div className=' flex flex-wrap gap-6'>
              {arry.map((arry) => (
                      <div className='  border-2  mt-6 pt-5 pl-6 pr-6  shadow  rounded-md w-[327px] h-[323px]'>
                            <div className='  bg-[#E9EEF5] animate-pulse rounded-md w-[100%] h-[165px]'></div>
                            <div className=' flex  justify-between'>
                                <div>
                                  <div className='bg-[#F0F6FF] animate-pulse mt-6 rounded-full w-[105px] h-[16px]'></div>
                                  <div className='mt-2 bg-[#F0F6FF] animate-pulse w-[204px] h-[10px] rounded-full'></div>
                                </div>
                            </div>
                            <div className=' flex justify-between mt-4'>
                                <div className='bg-[#F0F6FF] animate-pulse mt-3 rounded-full w-[188px] h-[16px]'></div>
                            </div>
                      </div>
               ))}
          </div>
      </div>
    )
}

export default SkeletonLoader;