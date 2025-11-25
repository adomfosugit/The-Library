import { Button } from "@/components/ui/button";
import HotSales from "@/components/ui/Landing/HotSales";
import Landing from "@/components/ui/Landing/Landing";
import Trending from "@/components/ui/Landing/Trending";
import Image from "next/image";

export default async function Home() {

  
  return (
    <div className="">
    
       <Landing />


       {/*Shop by Category */}
       <HotSales />

     
       
    
    </div>
  );
}
