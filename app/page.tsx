"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import img1 from "images/home-Page/andy-hay-ZN-TT10kf4o-unsplash.jpg";
import img2 from "@/images/home-Page/chad-montano-MqT0asuoIcU-unsplash.jpg";
import img3 from "@/images/home-Page/jonas-allert-MZ0U0g6RQpQ-unsplash.jpg";
import img4 from "@/images/home-Page/kabir-cheema-8T9AVksyt7s-unsplash.jpg";
import InputController from "@/components/muiControllers/InputController";
import { TextField } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    let tl = gsap.timeline()
    tl.from('.foodImg',{
      scale:0,
      opacity:0,
      stagger:0.2
    })
    tl.from('#mainH1 ,#p1, #p2 ',{
      x:200,
      opacity:0,
      stagger:0.2
    })
  },[])

  return (
    <>
      <main className="snap-y snap-mandatory overflow-y-scroll bg-app-background h-screen relative">
        
        <div className="snap-start w-full h-screen flex bg-app-primary  ">
          <div className="w-1/2 h-full flex">
            <div className="absolute top-10 left-[35%] z-0">
              <Image
                src={img1}
                alt="IMG1"
                height={300}
                width={200}
                className="rounded-[2rem] foodImg"
              />
            </div>
            <div className="absolute top-[50%] left-[35%]">
              <Image
                src={img2}
                alt="IMG2"
                height={300}
                width={200}
                className="rounded-[2rem] foodImg"
              />
            </div>

            <div className="absolute  top-[30%] left-[6%] ">
              <Image
                src={img4}
                alt="IMG4"
                height={400}
                width={400}
                className="rounded-[2rem] foodImg"
              />
            </div>
            <div className="absolute top-[23%] left-[20%]   ">
              <Image
                src={img3}
                alt="IMG3"
                height={400}
                width={300}
                className=" rounded-[2rem] foodImg"
              />
            </div>
            <div className="z-30 absolute top-[40%] left-[13%] ">
              <input
                className="h-24 w-80 rounded-[2rem] bg-white text-2xl text-center font-bold text-black"
                placeholder="Search Recipe"
              />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center relative">
            <h1 id="mainH1" className="text-7xl font-extrabold">Search for a Recipe</h1>
            <p id="p1">
            What do you want to try next? Think of something you are into
            </p>
            <div id="p2" className="flex gap-3 ">
            <p>
            see what you find.
            </p>

            <button
            className="w-24 h-5 bg-amber-600 rounded-lg text-center text-base flex items-center justify-center relative top-[0.20rem]"
            >
              EXPLORE
            </button>
            </div>
          </div>
        </div>

        <div className="snap-start  w-full h-screen bg-green-500">Page 2</div>
        <div className="snap-start  w-full h-screen bg-green-800">Page 3</div>
      </main>
    </>
  );
}
