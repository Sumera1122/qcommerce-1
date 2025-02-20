
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import CategoryCarousel from './herocarousel';

const Categories = () => {
 
  return (
    <div>
      {/* Links only visible on md screens */}
      <div className="hidden md:flex justify-center space-x-8 text-[10px] mt-[40px] md:mt-20">
        <Link href="/categorypages/chefs" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg mt-[-120px] h-[100px] hover:bg-[#ebba35]">
          <Image src="/images/category-images/chef.avif" alt="fast food" width="60" height="40" className='group-hover:bg-[#ebba35] rounded-md'/>
          <span className="group-hover:bg-[#ebba35] text-[14px] font-bold">CHEF</span>
        </Link>
        <Link href="#" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg mt-[-120px] h-[100px]  bg-[#ebba35]">
          <Image src="/images/category-images/imagefood.webp" alt="fast food" width="60" height="40" className='   rounded-md'/>
          <span className="text-[14px] font-bold">Fast Food</span>
        </Link>
        <Link href="/categorypages/featured" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg h-[100px] hover:bg-[#ebba35] mt-[-120px]">
          <Image src="/images/category-images/image1.webp" alt="featured products"  width="60" height="40"  className='rounded-md'/>
          <span className="group-hover:text-black text-[14px] font-bold">FEATURED PRODUCTS</span>
        </Link>
        <Link href="/categorypages/sweets" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg h-[100px] hover:bg-[#ebba35] mt-[-120px]">
          <Image src="/images/category-images/image2.webp" alt="sweets" width="60" height="60" className='rounded-md'/>
          <span className="group-hover:text-black text-[14px] font-bold">SWEETS</span>
        </Link>
        <Link href="/categorypages/deserts" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:bg-[#ebba35] h-[100px] mt-[-120px]">
          <Image src="/images/category-images/image4.webp" alt="desserts" width="60" height="40"  className='rounded-md'/>
          <span className="text-[14px] font-bold">DESSERTS</span>
        </Link>
    
        <Link href="/categorypages/bakery" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:bg-[#ebba35] h-[100px] mt-[-120px]">
          <Image src="/images/category-images/image5.webp" alt="bakery biscuits" width="60" height="40"  className='rounded-md'/>
          <span className="group-hover:bg-[#ebba35] text-[14px] font-bold">BAKERY BISCUITS</span>
        </Link>
        <Link href="/categorypages/cakes" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:bg-[#ebba35] h-[100px] mt-[-120px]">
          <Image src="/images/category-images/image6.webp" alt="cakes" width="60" height="40"  className='rounded-md'/>
          <span className="group-hover:bg-[#ebba35] text-[14px] font-bold">CAKES</span>
        </Link>
        <Link href="/categorypages/nimco" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:bg-[#ebba35] h-[100px] mt-[-120px]">
          <Image src="/images/category-images/image7.webp" alt="nimco" width="60" height="40" className='rounded-md'/>
          <span className="group-hover:bg-[#ebba35] text-[14px] font-bold">NIMCO</span>
        </Link>
        <Link href="/categorypages/packeditems" className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:bg-[#ebba35] h-[100px] mt-[-120px]">
          <Image src="/images/category-images/image8.webp" alt="nimco" width="60" height="40" className='rounded-md'/>
          <span className="group-hover:bg-[#ebba35] text-[14px] font-bold">Packed Items</span>
        </Link>
      </div>

      {/* Carousel only visible on max-sm and max-md */}
      <div className="max-md:block md:hidden">
        <CategoryCarousel />
      </div>
    </div>
  )
}

export default Categories;
