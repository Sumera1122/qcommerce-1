// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// interface NimcoType {
//   tag: string;
//   _id: string;
//   name: string;
//   category: string;
//   price: number; 
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const  NimcoPage = () => {
//   const [nimcoPack, setNimcoPack] = useState<NimcoType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: NimcoType[] = await client.fetch(
//          `*[_type == "nimco"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, avaialble
//           }`
//         );
//         setNimcoPack(res);
//       } catch (error) {
//         console.error("Error fetching nimco items:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {nimcoPack.length === 0 ? (
//         <p>No fast food found</p>
//       ) : (
//         nimcoPack.map((nimcoitems) => (
//           <div key={nimcoitems._id}>
//             {nimcoitems?.tag ? (
//          <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//              {nimcoitems.tag}
//             </span>
//              ) : null}
//             {nimcoitems.imageUrl && (
//               <img src={nimcoitems.imageUrl} alt={nimcoitems.name} width={200} height={200} />
//             )}
//             <h1>{nimcoitems.name}</h1>
//             <p>{nimcoitems.description}</p>
//             <p>{nimcoitems.available}</p>
            
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default NimcoPage;




// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
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

// const NimcoPage = () => {
//    const router=useRouter();
      
//         const HandlePrevious= ()=>{
//           router.push("/")
//         }
//         const HandleNext= ()=>{
//           router.push("/categorypages/packeditems")
//         }
//   const [nimcoPack, setNimcoPack] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: Products[] = await client.fetch(
//           `*[_type == "nimco"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
//           }`
//         );
//         setNimcoPack(res);
//       } catch (error) {
//         console.error("Error fetching nimco items:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center">Loading...</p>;

//   return (
//     <div>
//       <div className=" flex justify-center items-center">
//         <Image src={'/images/nimco1.webp'} alt="pic" width={1600} height={400}  className="rounded shadow-lg"/>
//       </div>

//     <div className="flex justify-center">
//       <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-5xl">
//         {nimcoPack.length === 0 ? (
//           <p className="text-center">No nimco items found</p>
//         ) : (
//           nimcoPack.map((nimcoitems) => (
//             <div
//               key={nimcoitems._id}
//               className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
//             >
//               {nimcoitems.tag && (
//                 <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//                   {nimcoitems.tag}
//                 </span>
//               )}
//               {nimcoitems.imageUrl && (
//                 <img
//                 src={nimcoitems.imageUrl}
//                 alt={nimcoitems.name}
//                   className="w-40 h-40 object-cover rounded-lg"
//                 />
//               )}
//               <h1 className="text-lg font-semibold mt-2">{nimcoitems.name}</h1>
//               <p className="text-sm text-gray-600">{nimcoitems.description}</p>
//               <p className="text-sm text-gray-600">
//                 {nimcoitems.available ? "Available" : "Not Available"}
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

// export default NimcoPage;






"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
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

const NimcoPage = () => {
  const router = useRouter();

  const HandlePrevious = () => {
    router.push("/");
  };
  const HandleNext = () => {
    router.push("/categorypages/packeditems");
  };

  const [nimcoPack, setNimcoPack] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "nimco"] {
            _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
          }`
        );
        setNimcoPack(res);
      } catch (error) {
        console.error("Error fetching nimco items:", error);
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
      <div className="flex justify-center items-center">
        <Image src={'/images/nimco1.webp'} alt="pic" width={1600} height={400} className="rounded shadow-lg"/>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-5xl">
          {nimcoPack.length === 0 ? (
            <p className="text-center">No nimco items found</p>
          ) : (
            nimcoPack.map((nimcoitems) => (
              <div
                key={nimcoitems._id}
                className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
              >
                {nimcoitems.tag && (
                  <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
                    {nimcoitems.tag}
                  </span>
                )}
                {nimcoitems.imageUrl && (
                  <Image
                    src={nimcoitems.imageUrl}
                    alt={nimcoitems.name}
                    width={1600}
                    height={400}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                )}
                <h1 className="text-lg font-semibold mt-2">{nimcoitems.name}</h1>
                <p className="text-sm text-gray-600">Rs{nimcoitems.price}</p>
                <p className="text-sm text-gray-600">{nimcoitems.description}</p>
                <p className="text-sm text-gray-600">
                  {nimcoitems.available ? "Available" : "Not Available"}
                </p>
                <Button
                  className="bg-gradient-to-l from-yellow-400 to-red-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out mt-2"
                  onClick={(e) => handleAddToCart(e, nimcoitems)}
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

export default NimcoPage;
