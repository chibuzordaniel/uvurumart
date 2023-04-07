import React, { useState } from 'react'
import CartList from './CartList'



const Navbar = () => {

 const [update, setUpdate] = useState()
 const handleClick = () => setUpdate(true)
 const handleClose = () => setUpdate(false)

  return (
    <div className=' bg-white w-[100%] h-[69px] fixed top-0 z-10'>
        <div className=' max-w-[1200px] mx-auto'>
            <div className=' flex justify-between'>
                <div className=' flex  gap-36 ' >
                    <div  className=' flex'>
                        <div className=' text-2xl pt-4 font-bold'>SHOP<span className=' text-[#FF473E]'>MAX</span></div>
                    </div>

                    <div className=' flex   text-[#8588A3] list-none  font-semibold'>
                        <li className=' text-sm  hover:text-[#FF473E] cursor-pointer hover:bg-[#f3dad9] pt-6 text-center w-[124px] h-[45px] '>HOME</li>
                        <li className='  text-sm  hover:text-[#FF473E] cursor-pointer hover:bg-[#f3dad9] pt-6 text-center w-[134px] h-[45px]'>SHOP</li>
                        <li li className='  text-sm  hover:text-[#FF473E] cursor-pointer hover:bg-[#f3dad9] pt-6 text-center w-[104px] h-[45px]'>PROMOTION</li>
                        <li className='text-sm  hover:text-[#FF473E] cursor-pointer hover:bg-[#f3dad9] pt-6 text-center w-[104px] h-[45px]'>CONTACT</li>
                   </div>
                </div>

                <div className='  mt-6  cursor-pointer' onClick={handleClick} >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6877 0H18.75V0.298667C17.4447 0.590667 17.257 1.80233 17.1833 2.26533C17.1483 2.48433 17.0773 2.91267 16.9893 3.43733H0.662545C0.0165413 3.43733 -0.0557925 4.041 0.0285414 4.375L1.94389 12.8307C2.02789 13.1647 2.38156 13.4373 2.72822 13.4373H17.043C17.3877 13.4373 17.6687 13.7177 17.6687 14.0623C17.6687 14.407 17.3877 14.6873 17.043 14.6873H1.41822C1.25246 14.6873 1.09348 14.7532 0.976272 14.8704C0.859061 14.9876 0.793213 15.1466 0.793213 15.3123C0.793213 15.4781 0.859061 15.6371 0.976272 15.7543C1.09348 15.8715 1.25246 15.9373 1.41822 15.9373H2.22822C1.83712 16.1533 1.51108 16.4701 1.28407 16.8549C1.05707 17.2396 0.937403 17.6783 0.937547 18.125H1.56255C1.56255 19.16 2.40256 20 3.43756 20C4.47257 20 5.31257 19.16 5.31257 18.125H5.93758C5.93765 17.6782 5.81792 17.2396 5.59086 16.8548C5.3638 16.4701 5.03771 16.1532 4.64657 15.9373H13.478C13.0868 16.1532 12.7607 16.4701 12.5337 16.8548C12.3066 17.2396 12.1869 17.6782 12.187 18.125H12.812C12.8212 18.6162 13.0229 19.0842 13.3736 19.4284C13.7242 19.7725 14.196 19.9653 14.6873 19.9653C15.1786 19.9653 15.6504 19.7725 16.001 19.4284C16.3517 19.0842 16.5534 18.6162 16.5626 18.125H17.1876C17.1877 17.6783 17.068 17.2397 16.841 16.855C16.614 16.4702 16.288 16.1533 15.897 15.9373H17.0436C17.5409 15.9371 18.0176 15.7394 18.3692 15.3879C18.7208 15.0363 18.9184 14.5595 18.9187 14.0623C18.9186 13.8161 18.8701 13.5722 18.7758 13.3447C18.6815 13.1172 18.5433 12.9105 18.3691 12.7364C18.195 12.5623 17.9882 12.4242 17.7607 12.33C17.5331 12.2358 17.2893 12.1873 17.043 12.1873H16.8106L17.61 7.21733C17.8327 5.90467 18.3127 3.069 18.4253 2.36367C18.482 2.00733 18.537 1.757 18.75 1.61667V1.87467H19.6877C19.7704 1.8744 19.8496 1.84146 19.9081 1.78301C19.9666 1.72457 19.9996 1.64536 20 1.56267V0.312667C19.9998 0.229854 19.9669 0.150479 19.9083 0.0918898C19.8498 0.033301 19.7705 0.00026411 19.6877 0ZM3.43756 19.0627C3.18896 19.0624 2.95061 18.9635 2.77482 18.7877C2.59903 18.6119 2.50015 18.3736 2.49989 18.125H4.3749C4.37464 18.3735 4.27581 18.6118 4.10009 18.7876C3.92437 18.9634 3.68611 19.0623 3.43756 19.0627ZM14.6876 19.0627C14.439 19.0625 14.2005 18.9637 14.0247 18.7879C13.8488 18.6121 13.7499 18.3737 13.7496 18.125H15.6253C15.6249 18.3736 15.5259 18.6118 15.3502 18.7875C15.1744 18.9633 14.9362 19.0622 14.6876 19.0627ZM13.9186 4.998C13.9296 4.91328 13.9707 4.83533 14.0343 4.77832C14.0979 4.7213 14.1799 4.68902 14.2653 4.68733H16.2443C16.4163 4.68733 16.536 4.826 16.509 4.99633L16.313 6.25333C16.287 6.42333 16.124 6.56233 15.9516 6.56233H14.064C14.0242 6.56339 13.9847 6.55582 13.9482 6.54015C13.9116 6.52447 13.8789 6.50107 13.8523 6.47155C13.8256 6.44203 13.8057 6.40709 13.7938 6.36913C13.782 6.33117 13.7785 6.2911 13.7836 6.25167L13.9186 4.998ZM13.5823 8.123C13.5935 8.03837 13.6346 7.96053 13.6982 7.90355C13.7617 7.84658 13.8436 7.81422 13.929 7.81233H15.7566C15.929 7.81233 16.0483 7.951 16.0223 8.12133L15.8746 9.066C15.8483 9.236 15.6856 9.375 15.5133 9.375H13.761C13.7212 9.37594 13.6818 9.36829 13.6453 9.35258C13.6088 9.33688 13.5761 9.31347 13.5495 9.28398C13.5229 9.25448 13.503 9.21959 13.4911 9.18168C13.4792 9.14377 13.4756 9.10375 13.4806 9.06433L13.5823 8.123ZM1.62188 6.259L1.30522 4.99067C1.26388 4.82333 1.37122 4.68733 1.54355 4.68733H3.89657C4.06923 4.68733 4.2249 4.827 4.24323 4.998L4.3779 6.252C4.3829 6.29138 4.37934 6.33138 4.36747 6.36927C4.3556 6.40715 4.33569 6.44203 4.30911 6.47152C4.28254 6.50101 4.24991 6.52442 4.21346 6.54015C4.17701 6.55588 4.13759 6.56356 4.0979 6.56267H2.01089C1.83889 6.56267 1.66355 6.42567 1.62188 6.259ZM2.71222 9.375C2.54022 9.375 2.36489 9.23833 2.32356 9.07167L2.08489 8.116C2.04322 7.94867 2.14989 7.81267 2.32222 7.81267H4.2319C4.40424 7.81267 4.56024 7.95233 4.57857 8.12333L4.6799 9.06467C4.68496 9.10406 4.68144 9.14408 4.66959 9.18199C4.65774 9.2199 4.63784 9.2548 4.61125 9.2843C4.58466 9.3138 4.55201 9.33721 4.51553 9.35293C4.47905 9.36864 4.43961 9.37628 4.3999 9.37533H2.71222V9.375ZM4.7019 12.1877H3.41356C3.24056 12.1877 3.06623 12.051 3.02456 11.8843L2.78589 10.9287C2.74456 10.7613 2.85123 10.6253 3.02389 10.6253H4.5339C4.70624 10.6253 4.86224 10.765 4.88124 10.936L4.98191 11.8773C4.98697 11.9167 4.98345 11.9567 4.9716 11.9946C4.95974 12.0325 4.93984 12.0674 4.91324 12.0969C4.88664 12.1263 4.85399 12.1497 4.81751 12.1654C4.78103 12.1811 4.74159 12.1887 4.7019 12.1877ZM8.53259 11.875C8.53224 11.9579 8.4991 12.0374 8.44039 12.0959C8.38169 12.1545 8.30219 12.1875 8.21926 12.1877H6.58892C6.50356 12.1859 6.42167 12.1536 6.35812 12.0966C6.29457 12.0396 6.25357 11.9617 6.24258 11.877L6.14125 10.9357C6.13608 10.8963 6.13951 10.8562 6.1513 10.8183C6.16309 10.7804 6.18295 10.7454 6.20953 10.7159C6.23611 10.6864 6.26876 10.663 6.30525 10.6473C6.34175 10.6316 6.3812 10.624 6.42092 10.625H8.21926C8.30225 10.625 8.38184 10.6579 8.44059 10.7165C8.49933 10.7752 8.53242 10.8547 8.53259 10.9377V11.875ZM8.53259 9.06267C8.53224 9.1456 8.4991 9.22502 8.44039 9.2836C8.38169 9.34218 8.30219 9.37516 8.21926 9.37533H6.28658C6.11458 9.37533 5.95925 9.23567 5.93991 9.06467L5.83924 8.12333C5.83414 8.08396 5.83761 8.04394 5.84942 8.00603C5.86123 7.96812 5.88109 7.93322 5.90766 7.90371C5.93423 7.8742 5.96686 7.85078 6.00332 7.83507C6.03979 7.81935 6.07922 7.81171 6.11891 7.81267H8.21926C8.30225 7.81267 8.38184 7.84559 8.44059 7.9042C8.49933 7.96282 8.53242 8.04235 8.53259 8.12533V9.06267ZM8.53259 6.25C8.53224 6.33293 8.4991 6.41236 8.44039 6.47094C8.38169 6.52951 8.30219 6.56249 8.21926 6.56267H5.98525C5.89983 6.56098 5.81786 6.5287 5.75424 6.47168C5.69062 6.41467 5.64958 6.33672 5.63858 6.252L5.50391 4.998C5.49886 4.95861 5.50237 4.91858 5.51422 4.88068C5.52607 4.84277 5.54597 4.80787 5.57257 4.77837C5.59916 4.74886 5.63181 4.72545 5.66829 4.70974C5.70476 4.69403 5.7442 4.68639 5.78391 4.68733H8.21959C8.30258 4.68733 8.38218 4.72025 8.44092 4.77887C8.49966 4.83749 8.53275 4.91701 8.53293 5V6.25H8.53259ZM11.9189 11.877C11.9079 11.9617 11.8668 12.0396 11.8032 12.0966C11.7396 12.1536 11.6577 12.1859 11.5723 12.1877H10.0989C10.016 12.1875 9.93658 12.1545 9.87792 12.0959C9.81927 12.0373 9.7862 11.9579 9.78594 11.875V10.9373C9.78611 10.8544 9.81916 10.7749 9.87783 10.7163C9.9365 10.6577 10.016 10.6248 10.0989 10.6247H11.7403C11.9123 10.6247 12.0389 10.7643 12.0203 10.9353L11.9189 11.877ZM12.221 9.06433C12.2099 9.14902 12.1688 9.22694 12.1052 9.28394C12.0416 9.34094 11.9597 9.37325 11.8743 9.375H10.0989C10.016 9.37482 9.93658 9.34184 9.87792 9.28325C9.81927 9.22466 9.7862 9.14523 9.78594 9.06233V8.12467C9.78611 8.04174 9.81916 7.96226 9.87783 7.90366C9.9365 7.84505 10.016 7.81209 10.0989 7.812H12.0423C12.2146 7.812 12.341 7.95167 12.322 8.12267L12.221 9.06433ZM12.523 6.252C12.5119 6.33669 12.4708 6.41461 12.4072 6.47161C12.3436 6.52861 12.2617 6.56091 12.1763 6.56267H10.0989C10.016 6.56249 9.93658 6.5295 9.87792 6.47091C9.81927 6.41233 9.7862 6.3329 9.78594 6.25V5C9.78611 4.91707 9.81916 4.8376 9.87783 4.77899C9.9365 4.72038 10.016 4.68742 10.0989 4.68733H12.378C12.5503 4.68733 12.6766 4.827 12.6583 4.998L12.523 6.252ZM14.9336 12.1877V12.1853L14.931 12.1877H13.459C13.4493 12.1877 13.441 12.183 13.4313 12.1817C13.4296 12.1703 13.4296 12.159 13.4276 12.147L13.413 12.1777C13.417 12.1787 13.4211 12.1796 13.4253 12.1803C13.2716 12.1627 13.1616 12.0357 13.1793 11.877L13.28 10.9357C13.2912 10.851 13.3323 10.7732 13.3958 10.7162C13.4594 10.6592 13.5413 10.6269 13.6266 10.625H15.3186C15.491 10.625 15.6096 10.7637 15.5836 10.934L15.436 11.8787C15.4103 12.0487 15.2476 12.1877 15.0753 12.1877H14.9336Z" fill="#FF473E"/>
                    </svg>
                    <p className=' relative bottom-12 left-5 bg-[#FF473E] h-5 w-5 rounded-full text-white text-center text-sm'>0</p>
                </div>
            </div>
        </div>
        <CartList visible={update} onClose={handleClose} />
    </div>
  )
}

export default Navbar