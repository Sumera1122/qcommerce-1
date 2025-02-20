// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// interface DesertType {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number; 
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const  DessertsPage = () => {
//   const [desert, setDesert] = useState<DesertType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: DesertType[] = await client.fetch(
//          `*[_type == "deserts"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, avaialble
//           }`
//         );
//         setDesert(res);
//       } catch (error) {
//         console.error("Error fetching Deserts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {desert.length === 0 ? (
//         <p>No fast food found</p>
//       ) : (
//         desert.map((desertitems) => (
//           <div key={desertitems._id}>
//             {desertitems?.tag ? (
//          <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//              {desertitems.tag}
//             </span>
//              ) : null}
//             {desertitems.imageUrl && (
//               <img src={desertitems.imageUrl} alt={desertitems.name} width={200} height={200} />
//             )}
//             <h1>{desertitems.name}</h1>
//             <p>{desertitems.description}</p>
//             <p>{desertitems.available}</p>
            
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default DessertsPage;





// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// interface Products {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const DessertsPage = () => {
//   const router=useRouter();
  
//     const HandlePrevious= ()=>{
//       router.push("/")
//     }
//     const HandleNext= ()=>{
//       router.push("/categorypages/bakery")
//     }
//   const [desert, setDesert] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: Products[] = await client.fetch(
//           `*[_type == "deserts"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
//           }`
//         );
//         setDesert(res);
//       } catch (error) {
//         console.error("Error fetching Desserts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center">Loading...</p>;

//   return (
//     <div>
//       <div className="md:flex justify-center space-x-6 bg-purple-600 h-[60px] items-center text-white text-center mb-16 ">
//         <Link href="#" className="text-[16px] font-bold">Rasmalai</Link>
//         <Link href="#" className="text-[16px] font-bold">Milky Cake</Link>
//         <Link href="#" className="text-[16px] font-bold">Rabri</Link>
//         <Link href="#" className="text-[16px] font-bold">Doodh Dulari</Link>
//       </div>

//        <div className=" flex justify-center items-center">
//               <Image src={'/images/desert1.webp'} alt="pic" width={1600} height={400} className="rounded shadow-lg" />
//             </div>

//     <div className="flex justify-center">
//       <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-10 p-4 max-w-5xl">
//         {desert.length === 0 ? (
//           <p className="text-center">No desserts found</p>
//         ) : (
//           desert.map((desertitems) => (
//             <div
//               key={desertitems._id}
//               className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
//             >
//               {desertitems.tag && (
//                 <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//                   {desertitems.tag}
//                 </span>
//               )}
//               {desertitems.imageUrl && (
//                 <img
//                   src={desertitems.imageUrl}
//                   alt={desertitems.name}
//                   className="w-80 h-80 object-cover rounded-lg shadow-lg"
//                 />
//               )}
//               <h1 className="text-lg font-semibold mt-2">{desertitems.name}</h1>
//               <p className="text-sm text-gray-600">{desertitems.description}</p>
//               <p className="text-sm text-gray-600">
//                 {desertitems.available ? "Available" : "Not Available"}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>

//     <div className="flex justify-center gap-4 mt-8">
//         <Button onClick={HandlePrevious} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 ">Home</Button>
//         <Button onClick={HandleNext} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10  font-semibold">Next</Button>
//       </div>
//   </div>
//   );
// };

// export default DessertsPage;





"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Swal from "sweetalert2"; // ✅ Import Swal for notifications

interface Products {
  tag: string;
  _id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  available: boolean;
}

const DessertsPage = () => {
  const router = useRouter();

  const HandlePrevious = () => {
    router.push("/");
  };
  const HandleNext = () => {
    router.push("/categorypages/bakery");
  };

  const [desert, setDesert] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "deserts"] {
            _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
          }`
        );
        setDesert(res);
      } catch (error) {
        console.error("Error fetching Desserts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  const handleAddToCart = (e: React.MouseEvent, product: Products) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart!`,
      showConfirmButton: false,
      timer: 1000
    });
  };

  return (
    <div>
      <div className="md:flex justify-center space-x-6 bg-purple-600 h-auto md:h-[60px] items-center text-white text-center mb-16 p-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 max-md:flex-wrap max-md:justify-center">
  <Link href="#" className="text-[14px] sm:text-[16px] font-bold">Rasmalai</Link>
  <Link href="#" className="text-[14px] sm:text-[16px] font-bold">Milky Cake</Link>
  <Link href="#" className="text-[14px] sm:text-[16px] font-bold">Rabri</Link>
  <Link href="#" className="text-[14px] sm:text-[16px] font-bold">Doodh Dulari</Link>
</div>


      <div className="flex justify-center items-center">
      <Image src="/images/desert1.webp" alt="pic" width={1600} height={400} className="rounded shadow-lg" />

      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-10 p-4 max-w-5xl">
          {desert.length === 0 ? (
            <p className="text-center">No desserts found</p>
          ) : (
            desert.map((desertitems) => (
              <div
                key={`${desertitems._id}-${desertitems.name}`}
                className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
              >
                {desertitems.tag && (
                  <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
                    {desertitems.tag}
                  </span>
                )}
                {desertitems.imageUrl && (
                  <Image
                    src={desertitems.imageUrl}
                    alt={desertitems.name}
                    width={600}
                    height={400}
                    className="w-80 h-80 object-cover rounded-lg shadow-lg"
                  />
                )}
                <h1 className="text-lg font-semibold mt-2">{desertitems.name}</h1>
                <p className="text-lg font-semibold mt-2"> Rs{desertitems.price} 125g</p>
                <p className="text-sm text-gray-600">{desertitems.description}</p>
                <p className="text-sm text-gray-600">
                  {desertitems.available ? "Available" : "Not Available"}
                </p>
                <Button
                  className="bg-gradient-to-l from-yellow-400 to-red-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out mt-2"
                  onClick={(e) => handleAddToCart(e, desertitems)}
                >
                  Add to Cart
                </Button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={HandlePrevious} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 ">Home</Button>
        <Button onClick={HandleNext} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 font-semibold">Next</Button>
      </div>
    </div>
  );
};

export default DessertsPage;
