'use client';


import { useEffect } from 'react';
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Approch from "@/components/Approch";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
// import Image from "next/image";
// import { FaHome } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function Home() {
   useEffect(() => {
    // Client-side pe hi yeh code chalega
    document.title = "My Page Title"; // Yeh line sirf client-side pe chalegi
  }, []);
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
 <Hero />
 <Grid />
 <RecentProjects />
 <Experience />
 <Approch />
 <Footer />
    </div>
   </main>
  );
}
