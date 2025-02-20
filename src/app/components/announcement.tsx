import Link from 'next/link';
import React from 'react';
import { Menu } from 'lucide-react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Announcement = () => {
  return (
    <div className='w-full md:w-[90%] md:mx-auto rounded text-[8px] md:text-[14px] p-2 '>
      <div className="flex justify-between items-center w-full py-3 px-4">
        
        {/* Left Side (Logo) - Always on left */}
        <div className="flex items-center flex-1">
          <h1 className="font-bold text-[#ebba35] text-2xl ">Delight</h1>
        </div>

        {/* Right Side (max-sm & max-md: Phone, Location, Menu) */}
        <div className="flex items-center space-x-3 sm:hidden">
          <button disabled className="flex items-center gap-2 px-3 py-2 h-10 bg-[#ebba35] text-black font-bold rounded-lg shadow-md text-[10px]">
            <FaPhoneAlt /> 0900-78601
          </button>

          <Link href="/map" className="flex items-center justify-center w-10 h-10 bg-[#ebba35] text-black font-bold rounded-lg shadow-md">
            <IoLocationSharp size={20} />
          </Link>

          <Sheet>
            <SheetTrigger>
              <Menu className='bg-[#ebba35] text-black font-bold w-[40px] h-[40px] p-2 rounded-lg shadow-md cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Explore More</SheetTitle>
                <SheetDescription className='flex flex-col justify-left gap-4 text-black bg-slate-50 shadow-2xl'>
                  
                  <Link href="/categorypages/chefs " className='shadow-lg'>All Chefs</Link>
                  <Link href="/categorypages/bakery" className='shadow-lg'>Bakery Items</Link>
                  <Link href="/categorypages/cakes" className='shadow-lg'>Cakes</Link>
                  <Link href="/categorypages/deserts" className='shadow-lg'>Deserts</Link>
                  <Link href="/categorypages/fastfood" className='shadow-lg'>Fast Food</Link>
                  <Link href="/categorypages/featured" className='shadow-lg'>Featured Products</Link>
                  <Link href="/categorypages/nimco" className='shadow-lg'>Nimco</Link>
                  <Link href="/categorypages/sweets" className='shadow-lg'>Sweets</Link>
                  </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <LuShoppingCart  className='max-sm:text-xl'/>
        </div>

        {/* Center (Logo centered only on md screens) */}
        <div className="hidden md:flex justify-center flex-1">
          <h1 className="font-bold text-[#ebba35] text-2xl md:hidden">Delight</h1>
        </div>

        {/* Right Side (md and larger screens: Menu, Phone, Location) */}
        <div className="hidden md:flex justify-end flex-1 space-x-3">
          <button disabled className="flex items-center gap-2 px-4 py-2 bg-[#ebba35] text-black font-extrabold rounded-lg shadow-md">
            <FaPhoneAlt /> 0900-78601
          </button>

          <Link href="/map" className="flex items-center gap-2 px-4 py-2 bg-[#ebba35] text-black font-bold rounded-lg shadow-md">
            <IoLocationSharp /> <span>Change Location</span>
          </Link>

          <Sheet>
            <SheetTrigger>
              <Menu className='bg-[#ebba35] text-black font-bold w-[40px] h-[40px] p-2 rounded-lg shadow-md cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Explore More</SheetTitle>
                <SheetDescription className='flex flex-col justify-left gap-4 text-black bg-slate-50 shadow-2xl'>
                  
                  <Link href="/categorypages/chefs" className='shadow-lg'>All Chefs</Link>
                  <Link href="/categorypages/bakery" className='shadow-lg'>Bakery Items</Link>
                  <Link href="/categorypages/cakes" className='shadow-lg'>Cakes</Link>
                  <Link href="/categorypages/deserts" className='shadow-lg'>Deserts</Link>
                  <Link href="/categorypages/fastfood" className='shadow-lg'>Fast Food</Link>
                  <Link href="/categoRypages/featured" className='shadow-lg'>Featured Products</Link>
                  <Link href="/categorypages/nimco" className='shadow-lg'>Nimco</Link>
                  <Link href="/categorypages/sweets" className='shadow-lg'>Sweets</Link>
                  </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Link href="/cart">
          <LuShoppingCart  className='mt-2 text-xl font-bold'/>
          
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Announcement;




































// import Link from 'next/link'
// import React from 'react'
// import { Menu } from 'lucide-react';
// import { LocateIcon } from 'lucide-react';
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
 


// const Announcement = () => {
//   return (
//     <div className=' w-[100%] md:w-[90%] md:mx-auto bg-black text-white rounded text-[8px] md:text-[14px] p-2 md:justify-center '>
//    <div>
//     <h1> Delight </h1>
//     <button disabled>0900-78601</button>
//     <Link href="/header.map"><LocateIcon/></Link>
//    </div>



//    <div className="md:hidden">
//         <Sheet>
//           <SheetTrigger>
//             <Menu/>
//           </SheetTrigger>
//           <SheetContent >
//             <SheetHeader>
//               <SheetTitle>Explore more About</SheetTitle>
//               <SheetDescription>
//                 <div className=" flex flex-col items-center space-y-4 justify-center">
                 
//                   <h4>On sale</h4>
//                   <h4>New arrivals</h4>
//                   <h4>Brands</h4>
                
//                   </div>
//               </SheetDescription>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//       </div>


//     </div>
//   )
// }

// export default Announcement
