
import Image from "next/image";
import chain from "../public/assets/i/chain.png";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function About({id}) {
  return (
    
    <div className=" px-20 flex flex-col text-xl  w-screen h-screen bg-gradient-to-r from-[#00172D] to-[#00264D]   ">
      <div className="w-full h-screen flex items-center justify-center ">
        <div className={roboto.className}>
          <div className="p-8 text-5xl">Join The Journey</div>
          <div id={id} className="text-3xl md:text-4xl lg:text-5xl p-12 md:p-24  rounded-lg text-[#00264D] bg-white  md:flex">
            <div className="text-3xl px-4 text-center flex flex-col ">
              <div> Active AI Processes per Second</div>
              <div className="text-black text-2xl  pt-4 ">13.567</div>
            </div>

            <div className="text-3xl px-4 text-center">
            
              <div> Active AI Users per Second</div>
              <div className="text-black text-2xl pt-4">13.567</div>{" "}
            </div>
            <div className="text-3xl px-4 text-center">
              <div> Active AI Processes per Second</div>
              <div className="text-black text-2xl pt-4">13.567</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
