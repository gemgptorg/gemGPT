import { Roboto_Mono } from "next/font/google";
import { ChevronLeft } from "react-feather";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function Cooming({ id }) {
  return (
    <div className="pt-80 sm:pt-96 md:py-80 px-20 flex flex-col text-xl  justify-start  items-start w-screen h-screen bg-hero  bg-cover bg-center ">
      <div className="w-full h-full  ">
        <div id={id} className={roboto.className}>
          <div className="text-3xl md:text-4xl lg:text-5xl text-white text-center ">
            Cooming Soon... <br></br>
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl pt-6 text-white text-center ">
            GemGPT team still working on the world's first AI-powered gem{" "}
            <br></br>token researcher!
          </div>
          <div className="flex w-full justify-center pt-8 gap-6 ">
            
            <SocialIcon network="telegram" fgColor="white" />
            <SocialIcon network="twitter" fgColor="white" />
            <SocialIcon network="reddit" fgColor="white" />
            <SocialIcon network="discord" fgColor="white" />
            <SocialIcon network="youtube" fgColor="white" />
          </div>
          <div className="w-full flex justify-center pt-4">
          <button className="bg-white  text-black px-4 py-2 rounded-md text-lg font-bold mt-4 z-0">
            <div className="w-full flex items-center">
              <ChevronLeft></ChevronLeft>
              <Link href="/" legacyBehavior>
                
                <a> Go Back</a>
              </Link>
            </div>
          </button></div>
        </div>
      </div>
    </div>
  );
}
