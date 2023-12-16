import Image from "next/image";
import img1 from "@/images/home-Page/andy-hay-ZN-TT10kf4o-unsplash.jpg";
import img2 from "@/images/home-Page/chad-montano-MqT0asuoIcU-unsplash.jpg";
import img3 from "@/images/home-Page/jonas-allert-MZ0U0g6RQpQ-unsplash.jpg";
import img4 from "@/images/home-Page/kabir-cheema-8T9AVksyt7s-unsplash.jpg";
import imgp2 from "@/images/home-Page/page2/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg";
import signupSideImage from "@/images/WebsiteImages/pexels-jonathan-meyer-752503.jpg";

import type { Metadata } from "next";
import SearchRecipeButton from "./utils/ui/home/SearchRecipeButton";
import MidPage from "./utils/ui/home/midPage";
import { cache } from "react";
import getAllRecipeService from "@/services/recipeService/getAllRecipeService";


export const metadata:Metadata={
  title:{
    template:'%s | CWWYH',
    default:'CWWYH',
  }
}

export default async function Home() {

  getAllRecipeService(0,undefined)
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
            <SearchRecipeButton type="SEARCH" />
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
              <SearchRecipeButton type="EXPLORE" />
            </div>
          </div>
        </div>

        <div
          className="snap-start snap-mandatory snap-always w-full h-screen bg-[#2596be] back"
          style={{
            backgroundImage: `url(${signupSideImage.src})`,
            backgroundSize: "cover",
          }}
        >
          <MidPage />
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
