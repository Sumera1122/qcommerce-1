// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// interface CakesTypes {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number; 
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const  CakePage = () => {
//   const [cakes, setCakes] = useState<CakesTypes[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: CakesTypes[] = await client.fetch(
//          `*[_type == "cakes"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, avaialble
//           }`
//         );
//         setCakes(res);
//       } catch (error) {
//         console.error("Error fetching Cakes:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {cakes.length === 0 ? (
//         <p>No featured product found</p>
//       ) : (
//         cakes.map((cackitems) => (
//             <div key={cackitems._id}>
//               {cackitems?.tag ? (
//            <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//                {cackitems.tag}
//               </span>
//                ) : null}
//             {cackitems.imageUrl && (
//               <img src={cackitems.imageUrl} alt={cackitems.name} width={200} height={200} />
//             )}
//             <h1>{cackitems.name}</h1>
//             <p>{cackitems.description}</p>
//             <p>{cackitems.available}</p>
            
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CakePage;





// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

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

// const CakePage = () => {
//   const [cakes, setCakes] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: Products[] = await client.fetch(
//           `*[_type == "cakes"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
//           }`
//         );
//         setCakes(res);
//       } catch (error) {
//         console.error("Error fetching Cakes:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center text-lg">Loading...</p>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {cakes.length === 0 ? (
//         <p className="text-center text-gray-600">No featured product found</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
//           {cakes.map((cake) => (
//             <div key={cake._id} className="bg-white p-4 rounded-lg shadow-md">
//               {cake?.tag && (
//                 <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//                   {cake.tag}
//                 </span>
//               )}
//               {cake.imageUrl && (
//                 <img
//                   src={cake.imageUrl}
//                   alt={cake.name}
//                   className="w-full h-48 object-cover rounded-md mt-2"
//                 />
//               )}
//               <h1 className="text-xl font-semibold mt-2">{cake.name}</h1>
//               <p className="text-gray-600 mt-1">{cake.description}</p>
//               <p className="text-green-600 font-bold mt-1">${cake.price}</p>
//               <p className={`mt-1 ${cake.available ? "text-green-500" : "text-red-500"}`}>
//                 {cake.available ? "Available" : "Out of stock"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CakePage;



"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import Image from "next/image";


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

const CakePage = () => {
  const [cakes, setCakes] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "cakes"] {
            _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
          }`
        );
        setCakes(res);
      } catch (error) {
        console.error("Error fetching Cakes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;

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
    <div className="container mx-auto px-4 py-8">
      {cakes.length === 0 ? (
        <p className="text-center text-gray-600">No featured product found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {cakes.map((cake) => (
            <div key={cake._id} className="bg-white p-4 rounded-lg shadow-md">
              {cake?.tag && (
                <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
                  {cake.tag}
                </span>
              )}
              {cake.imageUrl && (
                <Image
                  src={cake.imageUrl}
                  alt={cake.name}
                  width={1600} height={400}
                  className="w-full h-48 object-cover rounded-md mt-2"
                />
              )}
              <h1 className="text-xl font-semibold mt-2">{cake.name}</h1>
              <p className="text-gray-600 mt-1">{cake.description}</p>
              <p className="text-green-600 font-bold mt-1">${cake.price}</p>
              <p className={`mt-1 ${cake.available ? "text-green-500" : "text-red-500"}`}>
                {cake.available ? "Available" : "Out of stock"}
              </p>
              <Button
                className="bg-gradient-to-l from-yellow-400 to-red-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out mt-2"
                onClick={(e) => handleAddToCart(e, cake)}
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CakePage;


