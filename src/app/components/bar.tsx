import Link from 'next/link'
import React from 'react'


const Bar = () => {
    return (
        <div>
          
          <div className=" md:flex justify-center space-x-12  bg-purple-600 h-[60px]  items-center text-white ">
            <Link href="#" className="text-[16px] font-extrabold bg-[#ebba35] w-[120px] h-[40px] text-[#e23131] flex justify-end items-center p-4 rounded-lg shadow-lg"> SWEETS</Link>
            <Link href="#" className="text-[16px] font-bold">RUSK</Link>
            <Link href="#" className="text-[16px] font-bold">PUFF</Link>
            <Link href="#" className="text-[16px] font-bold">BISCUITS</Link>
            <Link href="#" className="text-[16px] font-bold">TIN PACKED</Link>
            
          </div>
    
          
        </div>
      )
    }
    

export default Bar