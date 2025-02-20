// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// interface Chef {
//   _id: string;
//   name: string;
//   experience: number;
//   specialty: string; 
//   imageUrl: string;
// }

// const Chef = () => {
//   const [chefs, setChefs] = useState<Chef[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res: Chef[] = await client.fetch(
//           `*[_type == "chef"] {
//             _id, name, experience, specialty, "imageUrl": image.asset->url
//           }`
//         );
//         setChefs(res);
//       } catch (error) {
//         console.error("Error fetching chefs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {chefs.length === 0 ? (
//         <p>No chefs found</p>
//       ) : (
//         chefs.map((chef) => (
//           <div key={chef._id}>
//             <h1>{chef.name}</h1>
//             <p>Experience: {chef.experience} years</p>
//             <p>Specialty: {chef.specialty}</p>
//             {chef.imageUrl && (
//               <img src={chef.imageUrl} alt={chef.name} width={200} height={200} />
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Chef;



"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";


interface Products {
  _id: string;
  name: string;
  experience: number;
  specialty: string;
  imageUrl: string;
}

const Chef = () => {
  const router = useRouter();

  const handlePrevious = () => {
    router.push("/");
  };

  const handleNext = () => {
    router.push("/categorypages/fastfood");
  };

  const [chefs, setChefs] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Products[] = await client.fetch(
          `*[_type == "chef"] {
            _id, name, experience, specialty, "imageUrl": image.asset->url
          }`
        );
        setChefs(res);
      } catch (error) {
        console.error("Error fetching chefs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <div className="bg-purple-600 text-white md:flex justify-center space-x-12 h-[auto] md:h-[60px] items-center p-2 mb-20">
  <div className="flex flex-wrap justify-center gap-4 md:gap-12">
    <Link href="#" className="text-[14px] sm:text-[16px] font-bold">OUR CHEF</Link>
    <Link href="#" className="text-[14px] sm:text-[16px] font-bold">EXPERIENCE</Link>
    <Link href="#" className="text-[14px] sm:text-[16px] font-bold">SPECIALITY</Link>
  </div>
</div>


      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-20 p-4 max-w-5xl">
          {chefs.length === 0 ? (
            <p className="text-center">No chefs found</p>
          ) : (
            chefs.map((chef) => (
              <div
                key={chef._id}
                className="flex flex-col items-center p-4 bg-white shadow-lg border border-purple-100 rounded-lg max-w-sm w-full 
                  max-sm:w-full max-md:w-1/2 md:w-1/3 md:h-96"
              >
                {chef.imageUrl && (
                  <Image
                    src={chef.imageUrl}
                    alt={chef.name}
                    width={1600} 
                    height={400}
                    className="w-40 h-40 object-cover rounded-full shadow-lg"
                  />
                )}
                <h1 className="text-lg font-semibold mt-2">{chef.name}</h1>
                <p className="text-sm text-gray-600">Experience: {chef.experience} years</p>
                <p className="text-sm text-gray-600">Specialty: {chef.specialty}</p>
                <Button className="mt-6">Know More</Button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={handlePrevious} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10 ">Home</Button>
        <Button onClick={handleNext} className="bg-black w-[120px] h-[60px] p-6 rounded mb-10  font-semibold">Next</Button>
      </div>
    </div>
  );
};

export default Chef;
