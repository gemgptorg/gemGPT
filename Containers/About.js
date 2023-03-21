
import Image from "next/image";
import chain from "../public/assets/i/chain.png"

import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });


export default function About({id}){
    return(
        <div className=" px-20 flex flex-col text-xl  justify-start  items-start w-screen h-screen bg-gradient-to-r from-[#00172D] to-[#00264D]  bg-cover bg-center ">
        <div className="w-full h-screen flex items-center justify-center ">
          <div id={id} className={roboto.className}>
            <div
              className="text-3xl md:text-4xl lg:text-5xl text-white"
              
            >
              Explore the potantial of AI and Crypto
            </div>
            <div
              className="text-xl md:text-2xl lg:text-3xl text-white pt-8 "
              
            >
              Lorem ipsum sit dolor amet
            </div>
          </div>
          <Image src={chain} ></Image>
        </div>
      </div>
    )
}