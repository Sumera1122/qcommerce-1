// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// interface sweets {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number; 
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const  SweetsPage = () => {
//   const [sweetFood, setSweetFood] = useState<sweets[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: sweets[] = await client.fetch(
//          `*[_type == "sweet"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, avaialble
//           }`
//         );
//         setSweetFood(res);
//       } catch (error) {
//         console.error("Error fetching sweets:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {sweetFood.length === 0 ? (
//         <p>No fast food found</p>
//       ) : (
//         sweetFood.map((sweetfood) => (
//           <div key={sweetfood._id}>
//             {sweetfood?.tag ? (
//          <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//              {sweetfood.tag}
//             </span>
//              ) : null}
//             {sweetfood.imageUrl && (
//               <img src={sweetfood.imageUrl} alt={sweetfood.name} width={200} height={200} />
//             )}
//             <h1>{sweetfood.name}</h1>
//             <p>{sweetfood.description}</p>
//             <p>{sweetfood.available}</p>
            
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default SweetsPage;





// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";

// interface Products{
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const SweetsPage = () => {
//   const router=useRouter();
//   const HandlePrevious=()=>{
//     router.push("/")

//   }
//   const HandleNext=()=>{
//     router.push("/categorypages/deserts")
//   }
//   const [sweetFood, setSweetFood] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: Products[] = await client.fetch(
//           `*[_type == "sweet"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
//           }`
//         );
//         setSweetFood(res);
//       } catch (error) {
//         console.error("Error fetching sweets:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center">Loading...</p>;

//   return (
//     <div>
//       <div className="md:flex justify-center space-x-6 bg-purple-600 h-[60px] items-center text-white text-center">
//         <Link href="#" className="text-[16px] font-bold">Halwa</Link>
//         <Link href="#" className="text-[16px] font-bold">Burfi</Link>
//         <Link href="#" className="text-[16px] font-bold">Mix Sweets</Link>
//         <Link href="#" className="text-[16px] font-bold">Ladu</Link>
//       </div>

//        <div className=" flex justify-center items-center">
//               <Image src={'/images/sweet1.webp'} alt="pic" width={1600} height={400} className="shadow rounded-lg" />
//             </div>


//     <div className="flex justify-center">
//       <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-5xl">
//         {sweetFood.length === 0 ? (
//           <p className="text-center">No sweets found</p>
//         ) : (
//           sweetFood.map((sweetfood) => (
//             <div
//               key={sweetfood._id}
//               className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
//             >
//               {sweetfood.tag && (
//                 <span className="text-sm font-semibold bg-yellow-400 p-2 rounded mb-2">
//                   {sweetfood.tag}
//                 </span>
//               )}
//               {sweetfood.imageUrl && (
//                 <img
//                   src={sweetfood.imageUrl}
//                   alt={sweetfood.name}
//                   className="w-80 h-80 object-cover rounded-lg shadow-lg"
//                   />
//                 )}
//               <h1 className="text-lg font-semibold mt-2">{sweetfood.name}</h1>
//               <p className="text-sm text-gray-600">{sweetfood.description}</p>
//               <p className="text-sm text-gray-600">
//                 {sweetfood.available ? "Available" : "Not Available"}
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

// export default SweetsPage;








// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";
// import Swal from "sweetalert2"; // ✅ Import Swal for notifications

// interface Products {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   imageUrl: string;
//   description: string;
//   available: boolean;
//   qunatity?: number;
// }

// const SweetsPage = () => {
//   const router = useRouter();

//   const HandlePrevious = () => {
//     router.push("/");
//   };

//   const HandleNext = () => {
//     router.push("/categorypages/deserts");
//   };

//   const [sweetFood, setSweetFood] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: Products[] = await client.fetch(
//           `*[_type == "sweet"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, available 
//           }`
//         );
//         setSweetFood(res);
//       } catch (error) {
//         console.error("Error fetching sweets:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center">Loading...</p>;

//   const handleAddToCart = (e: React.MouseEvent, product: Products) => {
//     e.preventDefault();
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     Swal.fire({
//       position: "top-right",
//       icon: "success",
//       title: `${product.name} added to cart!`,
//       showConfirmButton: false,
//       timer: 1000
//     });
//   };

//   return (
//     <div>
//       <div className="md:flex justify-center space-x-6 bg-purple-600 h-[60px] items-center text-white text-center">
//         <Link href="#" className="text-[16px] font-bold">Halwa</Link>
//         <Link href="#" className="text-[16px] font-bold">Burfi</Link>
//         <Link href="#" className="text-[16px] font-bold">Mix Sweets</Link>
//         <Link href="#" className="text-[16px] font-bold">Ladu</Link>
//       </div>

//       <div className="flex justify-center items-center">
//         <Image src={'/images/sweet1.webp'} alt="pic" width={1600} height={400} className="shadow rounded-lg" />
//       </div>

//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-5xl">
//           {sweetFood.length === 0 ? (
//             <p className="text-center">No sweets found</p>
//           ) : (
//             sweetFood.map((sweetfood,index) => (
//               <div
//                 key={sweetfood._id||index}
//                 className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
//               >
//                 {sweetfood.tag && (
//                   <span className="text-sm font-semibold bg-yellow-400 p-2 rounded mb-2">
//                     {sweetfood.tag}
//                   </span>
//                 )}
//                 {sweetfood.imageUrl && (
//                   <img
//                     src={sweetfood.imageUrl}
//                     alt={sweetfood.name}
//                     className="w-80 h-80 object-cover rounded-lg shadow-lg"
//                   />
//                 )}
//                 <h1 className="text-lg font-semibold mt-2">{sweetfood.name}</h1>
//                 <p className="text-sm text-gray-600">{sweetfood.description}</p>
//                 <p className="text-sm text-gray-600">
//                   {sweetfood.available ? "Available" : "Not Available"}
//                 </p>
//                 <Button
//                   className="bg-gradient-to-l from-yellow-400 to-red-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out mt-2"
//                   onClick={(e) => handleAddToCart(e, sweetfood)}
//                 >
//                   Add to Cart
//                 </Button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       <div className="flex justify-center gap-4 mt-8">
//         <Button onClick={HandlePrevious} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10">Home</Button>
//         <Button onClick={HandleNext} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 font-semibold">Next</Button>
//       </div>
//     </div>
//   );
// };

// export default SweetsPage;




"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2"; 

interface Products {
  tag: string;
  _id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  available: boolean;
  quantity?: number;
  weight?: string;
}

const weightOptions = [
  { label: "125 g", multiplier: 1 },
  { label: "250 g", multiplier: 2 },
  { label: "500 g", multiplier: 4 },
  { label: "1 Kg", multiplier: 8 },
];

const SweetsPage = () => {
  const router = useRouter();

  const HandlePrevious = () => {
    router.push("/");
  };

  const HandleNext = () => {
    router.push("/categorypages/deserts");
  };

  const [sweetFood, setSweetFood] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWeights, setSelectedWeights] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "sweet"] {
            _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
          }`
        );
        setSweetFood(res);
      } catch (error) {
        console.error("Error fetching sweets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  const handleAddToCart = (e: React.MouseEvent, product: Products) => {
    e.preventDefault();
    const selectedWeight = selectedWeights[product._id] || "125 g";
    const weightMultiplier = weightOptions.find((w) => w.label === selectedWeight)?.multiplier || 1;
    const updatedPrice = product.price * weightMultiplier;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find(
      (item: Products) => item._id === product._id && item.weight === selectedWeight
    );
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1, weight: selectedWeight, price: updatedPrice });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} (${selectedWeight}) added to cart!`,
      showConfirmButton: false,
      timer: 1000
    });
  };

  return (
    <div>
      <div className="md:flex justify-center space-x-6 bg-purple-600 h-[60px] items-center text-white text-center">
        <Link href="#" className="text-[16px] font-bold">HALWA</Link>
        <Link href="#" className="text-[16px] font-bold">BURFI</Link>
        <Link href="#" className="text-[16px] font-bold">MIX SWEETS</Link>
        <Link href="#" className="text-[16px] font-bold">LADU</Link>
        
      </div>

      <div className="flex justify-center items-center">
        <Image src={'/images/sweet1.webp'} alt="pic" width={1600} height={400} className="shadow rounded-lg" />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-5xl">
          {sweetFood.map((sweetfood) => (
            <div key={sweetfood._id}
            className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full">
              {sweetfood.tag && (
                <span className="text-sm font-semibold bg-yellow-400 p-2 rounded mb-2">{sweetfood.tag}</span>
              )}
              <Image src={sweetfood.imageUrl} alt={sweetfood.name}  width={1600} height={400} className="w-80 h-80 object-cover rounded-lg shadow-lg" />
              <h1 className="text-lg font-semibold mt-2">{sweetfood.name}</h1>
              <p className="text-sm text-gray-600">{sweetfood.description}</p>
              <p className="text-sm text-gray-600">{sweetfood.available ? "Available" : "Not Available"}</p>
              <select
                className="mt-2 p-2 border border-gray-300 rounded"
                value={selectedWeights[sweetfood._id] || "125 g"}
                onChange={(e) => setSelectedWeights({ ...selectedWeights, [sweetfood._id]: e.target.value })}
              >
                {weightOptions.map((option) => (
                  <option key={option.label} value={option.label}>{option.label} - Rs. {sweetfood.price * option.multiplier}</option>
                ))}
              </select>
              <Button className="mt-2" onClick={(e) => handleAddToCart(e, sweetfood)}>Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={HandlePrevious} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10">Home</Button>
        <Button onClick={HandleNext} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 font-semibold">Next</Button>
      </div>
    </div>
  );
};

export default SweetsPage;

