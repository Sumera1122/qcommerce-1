
import Announcement from "./components/announcement";
import ImagesCarousel from "./components/carousel";
import Categories from "./components/categories";
// import Bar from "./components/bar";
import FastFood from "./categorypages/fastfood/page";


export default function Home() {
  return (
    <div>
      <Announcement/>
      <ImagesCarousel/>
      <Categories/>
      {/* <Bar/> */}
      <div>
        
       <FastFood/>

      </div>
    </div>
  );
}
