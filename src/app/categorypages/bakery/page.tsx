// // "use client";
// // import { useEffect, useState } from "react";
// // import { client } from "@/sanity/lib/client";

// // interface Biscuits {
// //   tag: string;
// //   _id: string;
// //   name: string;
// //   category: string;
// //   price: number; 
// //   imageUrl: string;
// //   description: string;
// //   available: boolean;
// // }

// // const BakeryPage = () => {
// //   const [bakeryItems, setBakeryItems] = useState<Biscuits[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res: Biscuits[] = await client.fetch(
// //          `*[_type == "bakery"] {
// //             _id, name, category, price, "imageUrl": image.asset->url , tag, description, avaialble
// //           }`
// //         );
// //         setBakeryItems(res);
// //       } catch (error) {
// //         console.error("Error fetching Biscuits:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;

// //   return (
// //     <div>
// //       {bakeryItems.length === 0 ? (
// //         <p>No fast food found</p>
// //       ) : (
// //         bakeryItems.map((items) => (
// //           <div key={items._id}>
// //             {items?.tag ? (
// //          <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
// //              {items.tag}
// //             </span>
// //              ) : null}
// //             {items.imageUrl && (
// //               <img src={items.imageUrl} alt={items.name} width={200} height={200} />
// //             )}
// //             <h1>{items.name}</h1>
// //             <p>{items.description}</p>
// //             <p>{items.available}</p>
            
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default BakeryPage;




// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";


// interface Product {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const BakeryPage = () => {
//   const router=useRouter();
    
//       const HandlePrevious= ()=>{
//         router.push("/")
//       }
//       const HandleNext= ()=>{
//         router.push("/categorypages/nimco")
//       }


//   const [bakeryItems, setBakeryItems] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: Product[] = await client.fetch(
//           `*[_type == "bakery"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
//           }`
//         );
//         setBakeryItems(res);
//       } catch (error) {
//         console.error("Error fetching Biscuits:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center">Loading...</p>;

//   const handleAddToCart=(e:React.MouseEvent,product:Product)=>{
//     e.preventDefault();
//     addToCart(product)
//   }

//   return (
//     <div>
//       <div className="md:flex justify-center space-x-6 bg-purple-600 h-[60px] items-center text-white text-center mb-16 ">
//         <Link href="#" className="text-[16px] font-bold">Rusk</Link>
//         <Link href="#" className="text-[16px] font-bold">Mix Biscuits</Link>
//         <Link href="#" className="text-[16px] font-bold">Bread</Link>
//         <Link href="#" className="text-[16px] font-bold">Puffs</Link>
//       </div>
//        <div className=" flex justify-center items-center">
//               <Image src={'/images/biscuit1.webp'} alt="pic" width={1600} height={400} className="rounded shadow-lg"/>
//             </div>

//     <div className="flex justify-center">
//       <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-5xl">
//         {bakeryItems.length === 0 ? (
//           <p className="text-center">No bakery items found</p>
//         ) : (
//           bakeryItems.map((items) => (
//             <div
//             key={items._id}
//             className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
//             >
//               {items.tag && (
//                 <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//                   {items.tag}
//                 </span>
//               )}
//               {items.imageUrl && (
//                 <img
//                 src={items.imageUrl}
//                 alt={items.name}
//                 className="w-40 h-40 object-cover rounded-lg"
//                 />
//               )}
//               <h1 className="text-lg font-semibold mt-2">{items.name}</h1>
//               <p className="text-sm text-gray-600">{items.description}</p>
//               <p className="text-sm text-gray-600">
//                 {items.available ? "Available" : "Not Available"}
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

//       <div>
//         <Button className="bg-gradient-to-l from-yellow-40 to-white text-black font-semibold py-2 px-6 rounded-lg shaddow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out " onClick={(e)=> handleAddToCart(e,bakeryItems)}>

//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BakeryPage;
// function addToCart(product: Product) {
//   throw new Error("Function not implemented.");
// }



"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2"; // ✅ Fixed import

interface Products {
  tag: string;
  _id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  available: boolean;
  qunatity: number;
}

const BakeryPage = () => {
  const router = useRouter();

  const handlePrevious = () => {
    router.push("/");
  };
  const handleNext = () => {
    router.push("/categorypages/nimco");
  };

  const [bakeryItems, setBakeryItems] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "bakery"] {
            _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
          }`
        );
        setBakeryItems(res);
      } catch (error) {
        console.error("Error fetching Biscuits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  const handleAddToCart = (e: React.MouseEvent, product: Products) => {
    e.preventDefault();
  
    // Get cart from localStorage or create a new one if it doesn't exist
    const cart: Products[] = JSON.parse(localStorage.getItem("cart") || "[]");
  
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item._id === product._id);
  
    if (existingProductIndex > -1) {
      // ✅ If product exists, increase quantity
      cart[existingProductIndex].qunatity = (cart[existingProductIndex].qunatity || 1) + 1;
    } else {
      // ✅ If new product, add with quantity: 1
      cart.push({ ...product, qunatity: 1 });
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Show confirmation alert
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart!`,
      showConfirmButton: false,
      timer: 1000,
    });
  };
  

  return (
    <div>
      <div className="md:flex justify-center space-x-6 bg-purple-600 h-[60px] items-center text-white text-center mb-16">
        <Link href="#" className="text-[16px] font-bold">Rusk</Link>
        <Link href="#" className="text-[16px] font-bold">Mix Biscuits</Link>
        <Link href="#" className="text-[16px] font-bold">Bread</Link>
        <Link href="#" className="text-[16px] font-bold">Puffs</Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={"/images/biscuit1.webp"}
          alt="pic"
          width={1600}
          height={400}
          className="rounded shadow-lg"
        />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-5xl">
          {bakeryItems.length === 0 ? (
            <p className="text-center">No bakery items found</p>
          ) : (
            bakeryItems.map((item) => (
              <div
                key={`${item._id}-${item.name}`} // Concatenate _id and name to ensure uniqueness
                className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
              >
                {item.tag && (
                  <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
                    {item.tag}
                  </span>
                )}
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={1600} height={400}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                )}
                <h1 className="text-lg font-semibold mt-2">{item.name}</h1>
                <p className="text-lg font-semibold mt-2">Rs{item.price} 125g</p>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-600">
                  {item.available ? "Available" : "Not Available"}
                </p>

                {/* Add to Cart Button */}
                <Button
                  className="bg-gradient-to-l from-yellow-400 to-red-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out mt-2"
                  onClick={(e) => handleAddToCart(e, item)}
                >
                  Add to Cart
                </Button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrevious}
          className="bg-black text-white w-[120px] h-[60px] p-6 rounded mb-10"
        >
          Home
        </button>
        <Button
          onClick={handleNext}
          className="bg-black text-white w-[120px] h-[60px] p-6 rounded mb-10 font-semibold"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default BakeryPage;
