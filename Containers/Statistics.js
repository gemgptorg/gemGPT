
import Image from "next/image";
import chain from "../public/assets/i/chain.png";
import { Roboto_Mono } from "next/font/google";
import Counter from "@/Components/Counter";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function About({id}) {
  return (
    
    <div className=" px-20 py-32 flex flex-col text-xl  w-screen h-screen bg-gradient-to-r from-[#00172D] to-[#00264D]   ">
      <div className="w-full h-screen flex items-center justify-center ">
        <div className={roboto.className}>
          <div className="p-8 text-5xl text-white">Join The Journey</div>
          <div id={id} className="text-3xl md:text-4xl lg:text-5xl p-12 md:p-24  items-center justify-between gap-4  text-white   md:flex">
            <div className="md:w-1/2 text-3xl px-4 py-4 md:py-0 text-center flex flex-col rounded-2xl border border-[#BF40BF] ">
              <div  className="md:py-8">Number of daily AI users </div>
              <div className="text-white text-3xl  py-4 ">25 Million</div>
            </div>

            <div className="md:hidden flex w-full h-[1px] bg-black"></div>
         
            <div className="md:w-1/2 text-3xl  px-4 py-4 md:py-0 text-center flex  rounded-2xl border border-[#BF40BF] flex-col">
            <div className="md:py-8">Total AI <br></br>investment</div>
            <div className="py-4 "> 93.5 Billion $</div>
             
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
