"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo2 from "@/images/LOGO2.png";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [prevScroll, setPrevScrool] = useState(window.scrollY);
  const[token,setToken]=useState(sessionStorage.getItem("token") || "")
  const router = useRouter();


  useEffect(()=>{
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("nav");
      let currentScrollPos = window.scrollY;
      if (navbar) {
        if (currentScrollPos > prevScroll) {
          navbar.style.transform = `translateY(-105%)`;
        } else {
          navbar.style.transform = `translateY(0%)`;
        }
        setPrevScrool(currentScrollPos);
      }
    });
  },[prevScroll])

  useEffect(()=>{
    const updatedToken = sessionStorage.getItem('token') || ''
    setToken(updatedToken)
  },[token])

  

  return (
    <nav
      id="nav"
      className="navbar fixed top-0 left-0  transition-transform duration-500 ease-in-out w-screen   bg-app-secondary h-20 flex justify-between items-center text-2xl font-semibold "
    >
      <div className="flex ms-8">
        <Image
          // className="logo"
          src={logo2}
          alt="LOGO"
          width={160}
          height={160}
          loading="lazy"
        />
        <h1>CWWYH</h1>
      </div>
      <div className="flex gap-14 me-10">
        <Link href={"/"} className="hover:text-blue-800">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-blue-800">
          About
        </Link>
        <Link href={"/contact"} className="hover:text-blue-800">
          Contact
        </Link>
        <Link href={"/blog"} className="hover:text-blue-800">
          Blog
        </Link>
        <div className="border border-darkApp-background h-9"></div>
        {token.length !== 0 ? (
          <Button
          variant="contained"
            className="bg-app-primary hover:bg-slate-500"
            onClick={() => {
              sessionStorage.removeItem('token')
              setToken('');
              router.push("/")
            }}
          >
            logout
          </Button>
        ) : (
          <Button
            variant="contained"
            className="bg-app-primary hover:bg-slate-500"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
