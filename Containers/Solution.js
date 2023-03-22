import Image from "next/image";
import chain from "../public/assets/i/chain.png";
import logo from "../public/assets/i/logo.png";

import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function Solution({ id }) {
  return (
    <div className=" px-12 md:px-20 pt-16 pb-32 flex flex-col text-xl  justify-start  items-start w-screen h-screen bg-gradient-to-r from-[#00172D] to-[#00264D]  bg-cover bg-center ">
      <div className="w-full h-screen flex items-center justify-center md:p-8 md:gap-3 pb-32">
        <div id={id} className={roboto.className}>
          <div className="text-2xl md:text-4xl lg:text-5xl text-white ">
            Problems and our Solution
          </div>
          <div className="text-base md:text-xl lg:text-2xl text-white pt-8 ">
            The cryptocurrency market is highly volatile, and making accurate
            predictions can be challenging. Traditional research methods may not
            be sufficient in this rapidly evolving and complex market.
            Furthermore, the data available is often inconsistent and
            incomplete, making it difficult to draw meaningful conclusions.
          </div>
          <div className="text-base md:text-xl lg:text-2xl text-white pt-8 ">
            GemGPT addresses these challenges by
            leveraging blockchain technology and AI. The platform aggregates
            data from various sources, including exchanges, social media, and
            news outlets, and analyzes it using machine learning algorithms. 
          </div>
        </div>
        <Image src={logo} className="md:flex hidden"></Image>
      </div>
    </div>
  );
}
