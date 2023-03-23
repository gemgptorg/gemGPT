import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/assets/i/logo.png";
import robot from "../public/assets/i/robot.png";

import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

function MobileNav({ open, setOpen }) {
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  return (
    <div
      className={`  flex  dark:border-1 mt-28 absolute top-0 right-0 h-screen border-l border-[#FFFFFF26] w-64 bg-[#000000B3]  backdrop-blur-[4px]  transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col font-bold text-end w-full  ">
        <div className=" flex flex-col  items-center text-white  py-4">
          <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
          <span
            className="text-xl font-normal cursor-pointer"
            onClick={() => goToSection("#home")}
          >
            <div className="pb-2 px-6 py-2">Home</div>
          </span>
          <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
          <span
            className="text-xl font-normal cursor-pointer"
            onClick={() => goToSection("#about")}
          >
            <div className="pb-2 px-6 py-2">About</div>
          </span>
          <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
          <span
            className="text-xl font-normal cursor-pointer"
            onClick={() => goToSection("#statistics")}
          >
            <div className="pb-2 px-6 py-2">Statistics</div>
          </span>
          <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
          <span
            className="text-xl font-normal cursor-pointer"
            onClick={() => goToSection("#faq")}
          >
            <div className=" px-6 py-2">FAQ</div>
          </span>
          <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
          <span
            className="text-xl font-normal cursor-pointer"
            
          ><a
          href="/files/GEMGPT.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" px-6 py-2">Whitepaper</div>
        </a>
            
          </span>
          <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
          <span>
            <div className="pt-8">
              <div className={roboto.className}>
                <Link href="/coomingsoon">
                  <Image src={robot} className="w-[100px] h-[80px]"></Image>
                  <div className=" mr-4 text-white">RUN APP</div>
                </Link>
              </div>
            </div>
          </span>
          <span
            className="text-xl font-normal  "
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          ></span>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <nav className="z-50  fixed min-w-full flex bg-[#000000] md:bg-[#00172DB3]  md:backdrop-blur-2px]  px-4 lg:px-16 py-4 lg:py-4 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex w-full ">
        <div className="w-3/12 md:w-2/12 flex items-center  ">
          <div className={roboto.className}>
            <Link href="/">
              <div className="flex flex-col justify-center items-center">
                <Image src={logo} className="w-[50px] md:w-[80px]"></Image>
                <div className="text-2xl text-white">GemGPT</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-9/12 md:w-10/12 flex justify-end md:justify-start items-center pl-8 lg:pl-0">
          <div
            className=" z-50  flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-white  rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-white  rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-[0px]" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-white  rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>
          <div className={roboto.className}>
            <div className="flex w-full justify-between">
              <div className="hidden md:flex items-center">
                <span
                  onClick={() => goToSection("#home")}
                  className="cursor-pointer tracking-wide  text-lg lg:text-2xl block py-2 pl-3 mx-1 lg:mx-4pr-3  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </span>
                <span
                  onClick={() => goToSection("#about")}
                  className="cursor-pointer tracking-wide  text-lg lg:text-2xl block py-2 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </span>

                <span
                  onClick={() => goToSection("#statistics")}
                  className="cursor-pointer tracking-wide text-lg lg:text-2xl block py-2 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Statistics
                </span>

                <span
                  onClick={() => goToSection("#faq")}
                  className="cursor-pointer tracking-wide  text-lg lg:text-2xl block py-2 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  FAQ
                </span>
                <span className="cursor-pointer tracking-wide  text-lg lg:text-2xl block py-2 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <a
                    href="/files/GEMGPT.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whitepaper
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center">
          <div className={roboto.className}>
            <Link href="/coomingsoon">
              <Image src={robot} className="w-[100px] h-[80px]"></Image>
              <div className="ml-3 mt-2 text-white">RUN APP</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
