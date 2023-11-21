"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import img1 from "@/images/home-Page/andy-hay-ZN-TT10kf4o-unsplash.jpg";
import img2 from "@/images/home-Page/chad-montano-MqT0asuoIcU-unsplash.jpg";
import img3 from "@/images/home-Page/jonas-allert-MZ0U0g6RQpQ-unsplash.jpg";
import img4 from "@/images/home-Page/kabir-cheema-8T9AVksyt7s-unsplash.jpg";
import imgp2 from "@/images/home-Page/page2/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Signup from "@/components/auth/Signup";
import signupSideImage from '@/images/WebsiteImages/pexels-jonathan-meyer-752503.jpg'

import type { Metadata } from "next";
// export const metadata:Metadata={
//   title:{
//     // absolute:'',
//     default:'CWWYH',
//     template:'%s | Home'
//   }
// }

export default function Home() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   let tl = gsap.timeline({});
  //   tl.from(".foodImg", {
  //     scale: 0,
  //     opacity: 0,
  //   });
  //   tl.from("#mainH1 ,#p1, #p2 ", {
  //     x: 200,
  //     opacity: 0,
  //     stagger: 0.2,
  //   });

  //   let page2Tl = gsap.timeline();

  //   page2Tl.from(".page2 h1 , .page2 p ", {
  //     x: -100,
  //     opacity: 0,
  //     stagger: 0.2,
  //   });

  //   page2Tl.from(".page2img", {
  //     x: 200,
  //     rotate: 3,
  //     opacity: 0,
  //   });
  // }, []);

  return (
    <>
      <main className="snap-y snap-mandatory snap-always overflow-y-scroll bg-app-background h-screen relative">
        <div className="snap-start w-full h-screen flex bg-app-secondary  ">
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
            <div
              onClick={() => router.push("/recipe")}
              className="z-30 absolute top-[40%] left-[13%] "
            >
              <button className="h-24 w-80 rounded-[2rem] bg-white text-2xl text-center font-bold text-black">
                Search Recipe
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center relative text-app-accent">
            <h1 id="mainH1" className="text-7xl font-extrabold">
              Search for a Recipe
            </h1>
            <p id="p1" className="text-xl mt-2">
              What do you want to try next? Think of something you are into
            </p>
            <div id="p2" className="flex gap-3 ">
              <p className="text-xl">see what you find.</p>

              <button className="w-24 h-5 bg-amber-600 rounded-lg text-center text-base flex items-center justify-center relative top-[0.20rem]">
                EXPLORE
              </button>
            </div>
          </div>
        </div>

        <div className="snap-start snap-mandatory snap-always w-full h-screen bg-[#2596be] back" style={{backgroundImage:`url(${signupSideImage.src})`,backgroundSize:'cover'}}>
          <Grid container className="h-full pt-6">
            {isSmall && (
              <Grid
                container
                item
                xs={0}
                sm={0}
                md={8}
                justifyContent={"center"}
                className="relative"
              >
                {/* <Image src={signupSideImage} fill objectFit="cover" alt='Image' /> */}  
              </Grid>
            )}
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={4}
              justifyContent={"center"}
              className="h-full"
            >
              <Grid item xs={11} sm={11} md={11}>
                <Signup />
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div className="page2 snap-start snap-mandatory snap-always  w-full h-screen bg-app-primary flex">
          <div className="w-[45%] flex flex-col justify-center items-center text-gray-800">
            <h1 className="text-7xl font-extrabold text-center">
              Save Recipes you like
            </h1>
            <div className="text-2xl mt-4 text-center">
              <p> collect your favorites recipes so you can</p>
              <p>get back to them later</p>
            </div>
          </div>
          <div className="w-[55%] relative">
            <Image
              src={imgp2}
              alt="Page 2 Image"
              layout="fill"
              className="page2img object-cover rounded-s-[2rem] "
            />
          </div>
        </div>

      </main>
    </>
  );
}
