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

// const  PackedItems = () => {
//   const [packedFood, setPackedFood] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res:Products[] = await client.fetch(
//          `*[_type == "packeditems"] {
//             _id, name, category, price, "imageUrl": image.asset->url , tag, description, avaialble
//           }`
//         );
//         setPackedFood(res);
//       } catch (error) {
//         console.error("Error fetching Packed items:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {packedFood.length === 0 ? (
//         <p>No fast food found</p>
//       ) : (
//         packedFood.map((packfood) => (
//           <div key={packfood._id}>
//             {packfood?.tag ? (
//          <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
//              {packfood.tag}
//             </span>
//              ) : null}
//             {packfood.imageUrl && (
//               <img src={packfood.imageUrl} alt={packfood.name} width={200} height={200} />
//             )}
//             <h1>{packfood.name}</h1>
//             <p>{packfood.description}</p>
//             <p>{packfood.available}</p>
            
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default PackedItems;





"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Swal from "sweetalert2"; // ✅ Import Swal for notifications
import Link from "next/link";

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

const PackedItemsPage = () => {
  const router = useRouter();

  const HandlePrevious = () => {
    router.push("/");
  };
  const HandleNext = () => {
    router.push("/categorypages/nimco"); // Change to the appropriate next category
  };

  const [packedFood, setPackedFood] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "packeditems"] {
            _id, name, category, price, "imageUrl": image.asset->url , tag, description, available
          }`
        );
        setPackedFood(res);
      } catch (error) {
        console.error("Error fetching packed items:", error);
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
      <div className="bg-purple-600 text-white md:flex justify-center space-x-12 h-[auto] md:h-[60px] items-center p-2 mb-20">
  <div className="flex flex-wrap justify-center gap-4 md:gap-12">
    <Link href="#" className="text-[14px] sm:text-[16px] font-bold">PLAIN CAKES</Link>
    <Link href="#" className="text-[14px] sm:text-[16px] font-bold">ICE CAKES</Link>
    <Link href="#" className="text-[14px] sm:text-[16px] font-bold">PASTRIES</Link>
  </div>
  </div>
      

<div className="flex justify-center items-center">
     

<Image 
  src="/images/packed1.webp" 
  alt="Packed items" 
  width={1600} 
  height={400} 
  className="rounded shadow-lg"
/>

      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-5xl">
          {packedFood.length === 0 ? (
            <p className="text-center">No packed items found</p>
          ) : (
            packedFood.map((packedItem) => (
              <div
                key={packedItem._id}
                className="flex flex-col items-center p-4 bg-white shadow-lg border border-gray-200 rounded-lg w-full"
              >
                {packedItem.tag && (
                  <span className="text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-md">
                    {packedItem.tag}
                  </span>
                )}
                {packedItem.imageUrl && (
                  <Image
                    src={packedItem.imageUrl}
                    alt={packedItem.name}
                    width={1600}
                    height={400}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                )}
                <h1 className="text-lg font-semibold mt-2">{packedItem.name}</h1>
                <p className="text-sm text-gray-600">Rs{packedItem.price}</p>
                <p className="text-sm text-gray-600">{packedItem.description}</p>
                <p className="text-sm text-gray-600">
                  {packedItem.available ? "Available" : "Not Available"}
                </p>
                <Button
                  className="bg-gradient-to-l from-yellow-400 to-red-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-200 ease-out mt-2"
                  onClick={(e) => handleAddToCart(e, packedItem)}
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

export default PackedItemsPage;
