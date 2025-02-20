// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// interface FeaturedTypes {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number; 
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const FeaturedProducts = () => {
//   const [featuredFood, setFeaturedFood] = useState<FeaturedTypes[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: FeaturedTypes[] = await client.fetch(
//          `*[_type == "featured"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, avaialble
//           }`
//         );
//         setFeaturedFood(res);
//       } catch (error) {
//         console.error("Error fetching Featured Products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {featuredFood.length === 0 ? (
//         <p>No featured product found</p>
//       ) : (
//         featuredFood.map((featureditems) => (
//             <div key={featureditems._id}>
//               {featureditems?.tag ? (
//            <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//                {featureditems.tag}
//               </span>
//                ) : null}
//             {featureditems.imageUrl && (
//               <img src={featureditems.imageUrl} alt={featureditems.name} width={200} height={200} />
//             )}
//             <h1>{featureditems.name}</h1>
//             <p>{featureditems.description}</p>
//             <p>{featureditems.available}</p>
            
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default FeaturedProducts;





// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
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

// const FeaturedProducts = () => {
//   const router=useRouter();

//   const HandlePrevious= ()=>{
//     router.push("/")
//   }
//   const HandleNext= ()=>{
//     router.push("/categorypages/sweets")
//   }
//   const [featuredFood, setFeaturedFood] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: Products[] = await client.fetch(
//           `*[_type == "featured"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
//           }`
//         );
//         setFeaturedFood(res);
//       } catch (error) {
//         console.error("Error fetching Featured Products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center">Loading...</p>;

//   return (
//     <div>

//    <div className=" md:flex justify-center space-x-12  bg-purple-600 h-[60px]  items-center text-white mb-6 ">
//         <Link href="#" className="text-[16px] font-bold">GIFT PACK</Link>
//         <Link href="#" className="text-[16px] font-bold">GHEE</Link>
//         <Link href="#" className="text-[16px] font-bold">MAKKHAN</Link>
//         <Link href="#" className="text-[16px] font-bold">PARATHA</Link>
//         <Link href="#" className="text-[16px] font-bold">GAJAR HALWA</Link>
//       </div>

//        <div className=" flex justify-center items-center">
//               <Image src={'/images/featured1.webp'} alt="pic" width={1600} height={400} className="rounded shadow-lg" />
//             </div>
//     <div className="flex justify-center">
//       <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-2 gap-6 p-4 max-w-5xl">
//         {featuredFood.length === 0 ? (
//           <p className="text-center">No featured product found</p>
//         ) : (
//           featuredFood.map((featuredItem) => (
//             <div
//               key={featuredItem._id}
//               className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg"
//             >
//               {featuredItem.tag && (
//                 <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//                   {featuredItem.tag}
//                 </span>
//               )}
//               {featuredItem.imageUrl && (
//                 <img
//                   src={featuredItem.imageUrl}
//                   alt={featuredItem.name}
//                   className="w-80 h-80 object-cover rounded-lg shadow-lg"
//                 />
//               )}
//               <h1 className="text-lg font-semibold mt-2">{featuredItem.name}</h1>
//               <p className="text-sm text-gray-600">{featuredItem.description}</p>
//               <p className="text-sm text-gray-600">{featuredItem.available ? "Available" : "Not Available"}</p>
//             </div>
//           ))
//         )}
//       </div>

//     </div>
//       <div className="flex justify-center gap-4 mt-8">
//         <Button onClick={HandlePrevious} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 ">Home</Button>
//         <Button onClick={HandleNext} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10  font-semibold">Next</Button>
//       </div>
//   </div>
//   );
// };

// export default FeaturedProducts;





"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

const FeaturedProducts = () => {
  const router = useRouter();

  const HandlePrevious = () => {
    router.push("/");
  };
  const HandleNext = () => {
    router.push("/categorypages/sweets");
  };

  const [featuredFood, setFeaturedFood] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "featured"] {
            _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
          }`
        );
        setFeaturedFood(res);
      } catch (error) {
        console.error("Error fetching Featured Products:", error);
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
      <div className="md:flex justify-center space-x-12 bg-purple-600 h-[60px] items-center text-white mb-6">
        <Link href="#" className="text-[16px] font-bold">GIFT PACK</Link>
        <Link href="#" className="text-[16px] font-bold">GHEE</Link>
        <Link href="#" className="text-[16px] font-bold">MAKKHAN</Link>
        <Link href="#" className="text-[16px] font-bold">PARATHA</Link>
        <Link href="#" className="text-[16px] font-bold">GAJAR HALWA</Link>
      </div>

      <div className="flex justify-center items-center">
        <Image src={'/images/featured1.webp'} alt="pic" width={1600} height={400} className="rounded shadow-lg" />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-2 gap-6 p-4 max-w-5xl">
          {featuredFood.length === 0 ? (
            <p className="text-center">No featured product found</p>
          ) : (
            featuredFood.map((featuredItem) => (
              <div
                key={featuredItem._id}
                className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg"
              >
                {featuredItem.tag && (
                  <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
                    {featuredItem.tag}
                  </span>
                )}
                {featuredItem.imageUrl && (
                  <Image
                    src={featuredItem.imageUrl}
                    alt={featuredItem.name}
                    width={16}
                    className="w-80 h-80 object-cover rounded-lg shadow-lg"
                  />
                )}
                <h1 className="text-lg font-semibold mt-2">{featuredItem.name}</h1>
                <p className="text-sm text-gray-600">{featuredItem.description}</p>
                <p className="text-sm text-gray-600">{featuredItem.available ? "Available" : "Not Available"}</p>
                <Button
                  className="bg-gradient-to-l from-yellow-400 to-red-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out mt-2"
                  onClick={(e) => handleAddToCart(e, featuredItem)}
                >
                  Add to Cart
                </Button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={HandlePrevious} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10">Home</Button>
        <Button onClick={HandleNext} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 font-semibold">Next</Button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
