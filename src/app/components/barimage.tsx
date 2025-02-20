import React from 'react';
import Image from 'next/image';

const BarImage = () => {
  return (
    <div>
      <Image 
        src="/images/category-images/sweetsbg.webp" 
        alt="pic" 
        width={200} 
        height={100} 
      />
    </div>
  );
}

export default BarImage;
