import React from 'react'

const Footer = () => {
  return (
    <>
        <div className=' bg-[#EEEEEE] w-[100%] h-[100%] pb-10'>
            <div className='border-[#dcd9d9] border-b-[1px] '>
                <div className=' max-w-[1200px] mx-auto'>
                    <div  className=' '>
                        <div className=' flex   justify-between  '>
                            <h2 className=' text-xl  font-bold '>SHOP<span className='text-[#FF473E]'>MAX</span></h2>
                            <div className='  flex pt-1 gap-10 text-sm'>
                                <h4>ALL COLLECTIONS</h4>
                                <h4 className=' '>BRAND COLLECTIONS</h4>
                                <h4 className=' lg:pt-0 md:pt-2'>MEN COLLECTIONS</h4>
                                <h4 className=' lg:pt-0 md:pt-2'>WOMEN COLLECTIONS</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' border border-red-600'></div>

            <div className=' max-w-[1200px] justify-between mx-auto pt-6'>
                <div className=' flex justify-between'>
                   <p className=' text-sm'>@2019 wiz sullivan inc. All Rights Reserved</p>
                   <div className=' text-sm flex  gap-4 '>
                      <p>Terms of Service</p>
                      <p>Privacy Policy</p>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer