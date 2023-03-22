import { Roboto_Mono } from "next/font/google";
import Image from "next/image";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

import logo from "../public/assets/i/logo.png";

const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

export default function Footer() {
  return (
    <>
      <div className="hidden w-screen  bg-[#071330] border-t-[1px] border-solid border-[#4b4949] lg:flex flex-col px-[5%] py-[2%] items-center justify-between ">
        <div className="w-full  h-full">
          <div className="flex pb-8 w-full flex-row justify-between">
            <div className="flex flex-col items-start ">
              <div className={roboto.className}>
                <div className="text-white text-base  mb-4 ">Contact Us</div>
                <div className="text-white text-[24px] leading-6  mb-4 ">
                  gary@gemgpt.org
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/12 flex items-center  ">
          <div className={roboto.className}>
            <div className="flex flex-col justify-center items-center">
              <Image src={logo} className="w-[50px] md:w-[80px]"></Image>
              <div className="text-2xl text-white">GemGPT</div>
            </div>
          </div>

          
        </div>
            <div className="flex flex-row">
              <div className="flex flex-col items-start pr-6 gap-2 text-center">
                <div className={roboto.className}>
                  <div className="text-white text-lg " >Sitemap</div>
                  <div className="text-white text-base cursor-pointer "onClick={() => goToSection("#home")}>Home</div>
                  <div className="text-white text-base "  onClick={() => goToSection("#about")}>About</div>
                  <div className="text-white text-base "onClick={() => goToSection("#statistics")}>Statistics</div>
                  <div className="text-white text-base "onClick={() => goToSection("#faq")}>FAQ</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
