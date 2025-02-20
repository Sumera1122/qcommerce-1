// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// interface fastFood {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number; 
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const FastFood = () => {
//   const [fastfood, setfastfood] = useState<fastFood[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: fastFood[] = await client.fetch(
//          `*[_type == "fastfood"] {
//             _id, name, category, price, tag, "imageUrl": image.asset->url ,description, avaialble
//           }`
//         );
//         setfastfood(res);
//       } catch (error) {
//         console.error("Error fetching fastfood:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <div className=" md:flex justify-center space-x-12  bg-purple-600 h-[60px]  items-center text-white ">
//             <Link href="/categorypages/fastfood" className="text-[16px] font-extrabold  w-[120px] h-[40px] flex justify-end items-center p-4 rounded-lg shadow-lg"> Sandwitch</Link>
//             <Link href="#" className="text-[16px] font-bold">ChickenRoll</Link>
//             <Link href="#" className="text-[16px] font-bold">Samosa</Link>
//             <Link href="#" className="text-[16px] font-bold">Patties</Link>
//             <Link href="#" className="text-[16px] font-bold">Chicken Stick</Link>
            
//           </div>
    
          

//     <div>
//       {fastfood.length === 0 ? (
//         <p>No fast food found</p>
//       ) : (
//         fastfood.map((fastfood) => (
//           <div key={fastfood._id}>
//              {fastfood?.tag ? (
//         <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//             {fastfood.tag}
//            </span>
//             ) : null}
//             {fastfood.imageUrl && (
//               <img src={fastfood.imageUrl} alt={fastfood.name} width={200} height={200} />
//             )}
//             <h1>{fastfood.name}</h1>
//             <p>{fastfood.description}</p>
//             <p>{fastfood.available}</p>
            
//           </div>
//         ))
//       )}
//       </div>
//     </div>
//   );
// };

// export default FastFood;
//  



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

const FastFood = () => {
  const router = useRouter();
  const [fastfood, setFastfood] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  const HandlePrevious = () => {
    router.push("/categorypages/chefs");
  };

  const HandleNext = () => {
    router.push("/categorypages/featured");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "fastfood"] {
            _id, name, category, price, tag, "imageUrl": image.asset->url ,description, available
          }`
        );
        setFastfood(res);
      } catch (error) {
        console.error("Error fetching fastfood:", error);
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
    <div className="p-4">
      <div className="md:flex justify-center space-x-6 bg-purple-600 h-[60px] items-center text-white text-center">
        <Link href="/categorypages/fastfood" className="text-[16px] font-extrabold w-[120px] h-[40px] flex justify-center items-center p-2 rounded-lg shadow-lg">Sandwich</Link>
        <Link href="#" className="text-[16px] font-bold">Chicken Roll</Link>
        <Link href="#" className="text-[16px] font-bold">Samosa</Link>
        <Link href="#" className="text-[16px] font-bold">Patties</Link>
        <Link href="#" className="text-[16px] font-bold">Chicken Stick</Link>
      </div>

      <div className="flex justify-center items-center">
        <Image src={'/images/fastfood1.webp'} alt="pic" width={1600} height={400} className="rounded shadow-lg" />
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {fastfood.length === 0 ? (
          <p className="text-center w-full">No fast food found</p>
        ) : (
          fastfood.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-lg p-4 relative w-80 h-[600px]">
              {item?.tag && (
                <span className="absolute top-2 left-2 bg-yellow-400 px-2 py-1 rounded-md text-sm font-semibold">
                  {item.tag}
                </span>
              )}
              {item.imageUrl && (
                <Image src={item.imageUrl} alt={item.name} width={1600} height={400} className="w-full h-80 object-cover rounded-lg font-semibold shadow-inner" />
              )}
              <div className="p-2">
                <h2 className="text-lg font-semibold mt-6">{item.name}</h2>
                <p className="text-sm text-gray-600 mt-6">{item.description}</p>
                <Button
                  className="bg-gradient-to-l from-yellow-400 to-red-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out mt-2"
                  onClick={(e) => handleAddToCart(e, item)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={HandlePrevious} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10">Home</Button>
        <Button onClick={HandleNext} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 font-semibold">Next</Button>
      </div>
    </div>
  );
};

export default FastFood;