
import Image from "next/image";
import chain from "../public/assets/i/chain.png"

import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });


export default function About({id}){
    return(
        <div className=" px-12 md:px-20 flex flex-col text-xl  justify-start  items-start w-screen h-screen bg-gradient-to-r from-[#00172D] to-[#00264D]  bg-cover bg-center ">
        <div className="w-full h-screen flex items-center justify-center md:p-8 md:gap-3">
          <div id={id} className={roboto.className}>
            <div
              className="text-2xl md:text-4xl lg:text-5xl text-white "
              
            >
              Explore the potential of AI and Crypto
            </div>
            <div
              className="text-lg md:text-xl lg:text-2xl text-white pt-8 "
              
            >
              GemGPT AI can provide investors with a greater understanding of the token market. By utilizing powerful algorithms, AI can quickly identify patterns and trends in the token market. This can help investors make better decisions and maximize their profits
            </div>
          </div>
          <Image src={chain} className="md:flex hidden" ></Image>
        </div>
      </div>
    )
}