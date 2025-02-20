// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const testimonials = [
//   {
//     image: '/images/category-images/imagefood.webp',
//     text: 'FAST FOOD',
//   },
//   {
//     image: '/images/category-images/image1.webp', 
//     text: 'FEATURED PRODUCTS',
//   },
//   {
//     image: '/images/category-images/image2.webp', 
//     text: 'SWEETS',
//   },
//   {
//     image: '/images/category-images/image4.webp', 
//     text: 'DESSERTS',
//   },
//   {
//     image: '/images/category-images/image5.webp', 
//     text: 'BAKERY &amp; BISCUITS',
//   },
//   {
//     image: '/images/category-images/image6.webp',
//     text: 'CAKES',
//   },
//   {
//     image: '/images/category-images/image7.webp', 
//     text: 'NIMCO',
//   },
// ];

// const CategoryCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (autoPlay) {
//       timerRef.current = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//       }, 3000);
//     }

//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     };
//   }, [autoPlay]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     setAutoPlay(false);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//     setAutoPlay(false);
//   };

//   const variants = {
//     enter: (direction: number) => {
//       return {
//         x: direction > 0 ? 1000 : -1000,
//         opacity: 0,
//       };
//     },
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => {
//       return {
//         zIndex: 0,
//         x: direction > 0 ? -1000 : 1000,
//         opacity: 0,
//       };
//     },
//   };

//   return (
//     <div className="relative h-[400px] w-full mx-auto overflow-hidden mb-40 max-md:block md:hidden">
//       <AnimatePresence initial={false} custom={currentIndex}>
//         <motion.div
//           key={currentIndex}
//           custom={currentIndex}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//           className="absolute inset-0 w-full"
//         >
//           <Image
//             src={testimonials[currentIndex].image}
//             alt={`category ${currentIndex + 1}`}
//             width={600}
//             height={400}
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
//           <p className="text-lg italic mb-2">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>

//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentIndex(index);
//               setAutoPlay(false);
//             }}
//             className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//           />
//         ))}
//       </div>

//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//    </div>
//   );
// };

// export default CategoryCarousel;





"use client";
import React, { useState} from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { image: "/images/category-images/imagefood.webp", text: "CHEF", link: "/categorypages/chefs" },
  { image: "/images/category-images/imagefood.webp", text: "FAST FOOD", link: "/categorypages/fastfood" },
  { image: "/images/category-images/image1.webp", text: "FEATURED", link: "/categorypages/featured" },
  { image: "/images/category-images/image2.webp", text: "SWEETS", link: "/categorypages/sweets" },
  { image: "/images/category-images/image4.webp", text: "DESSERTS", link: "/categorypages/deserts" },
  { image: "/images/category-images/image5.webp", text: "BAKERY ITEMS", link: "/categorypages/bakery" },
  { image: "/images/category-images/image6.webp", text: "CAKES", link: "/categorypages/cakes" },
  { image: "/images/category-images/image7.webp", text: "NIMCO", link: "/categorypages/nimco" },
  { image: "/images/category-images/image8.webp", text: "PACKED ITEMS", link: "/categorypages/packeditems" },
];

const CategoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3; // Number of items to show at a time

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  // Calculate the visible items for the current index
  const getVisibleItems = () => {
    return categories
      .slice(currentIndex, currentIndex + visibleItems)
      .concat(
        categories.slice(0, Math.max(0, currentIndex + visibleItems - categories.length))
      );
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto overflow-hidden mb-20">
      <div className="flex justify-center space-x-4">
        {getVisibleItems().map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={category.link}>
              <Image
                src={category.image}
                alt={category.text}
                width={150}
                height={150}
                className="rounded-lg object-cover w-full h-auto cursor-pointer"
              />
            </Link>
            <p className="text-[10px] font-semibold mt-2">{category.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CategoryCarousel;
