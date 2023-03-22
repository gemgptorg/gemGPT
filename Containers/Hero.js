import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import pancake from "../public/assets/i/pancakeswap.png";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function Hero({ id }) {
  return (
    <div className="pt-32 sm:pt-48 md:py-80 px-20 flex flex-col text-xl justify-center  items-center w-screen h-screen  bg-cover bg-center ">
      <div className="w-full h-full flex justify-center  items-center">
        <div id={id} className={roboto.className}>
          <video
            src="/assets/video/banner.mp4"
            className="w-full h-full absolute top-0 left-0 object-cover -z-10"
            autoPlay
            loop
            muted
            playsinline
          ></video>
          <div className="text-3xl md:text-4xl lg:text-5xl text-white text-center ">
            Introducing the world's first AI-powered gem <br></br>token
            researcher!
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
        </div>
      </div>
    </div>
  );
}
