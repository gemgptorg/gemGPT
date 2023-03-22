import { Roboto_Mono } from "next/font/google";
import { ChevronLeft } from "react-feather";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import pancake from "../../public/assets/i/pancakeswap.png";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function Cooming({ id }) {
  return (
    <div className="pt-80 sm:pt-96 md:py-80 px-20 flex flex-col text-xl  justify-start  items-start w-screen h-screen bg-hero  bg-cover bg-center ">
      <div className="w-full h-full  ">
        <div id={id} className={roboto.className}>
          <div className="text-3xl md:text-4xl lg:text-5xl text-white text-center ">
            Cooming Soon
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl pt-6 text-white text-center ">
            GemGPT team still working on the world's first AI-powered gem{" "}
            <br></br>token researcher!
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl pt-6 text-white text-center underline ">
            Follow us on social media!
            
          </div>
          <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-6 w-full md:w-1/2 pt-8 gap-4 content-center  place-content-center  ">
            
            <SocialIcon
              network="telegram"
              fgColor="white"
              style={{ minheight: 50, minWidth: 50, marginRight:"auto" , marginLeft:"auto" }}
            />
            <SocialIcon
              network="twitter"
              fgColor="white"
              style={{ minheight: 50, minWidth: 50 , marginRight:"auto" , marginLeft:"auto"}}
              url="https://twitter.com/gemgptlabs"
            />
            <SocialIcon
              network="reddit"
              fgColor="white"
              style={{ minHeight: 50, minWidth: 50, marginRight:"auto" , marginLeft:"auto" }}
            />
            <SocialIcon
              network="discord"
              fgColor="white"
              style={{ minHeight: 50, minWidth: 50, marginRight:"auto" , marginLeft:"auto" }}
            />
            <SocialIcon
              network="youtube"
              fgColor="white"
              style={{ minHeight: 50, minWidth: 50 , marginRight:"auto" , marginLeft:"auto"}}
            />
            <Image
              width={50}
              src={pancake}
              style={{ minHeight: 50, minWidth: 50 , marginRight:"auto" , marginLeft:"auto"}}
            ></Image>
          </div></div>
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
