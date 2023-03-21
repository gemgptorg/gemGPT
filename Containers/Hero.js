import { Roboto_Mono } from "next/font/google";
import { SocialIcon } from "react-social-icons";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function Hero({id}) {
  return (
    <div className="pt-80 sm:pt-96 md:py-80 px-20 flex flex-col text-xl  justify-start  items-start w-screen h-screen  bg-cover bg-center ">
      <div className="w-full h-full  ">
        <div id={id} className={roboto.className}>
        <video
              src="/assets/video/banner.mp4"
              className="w-full h-full absolute top-0 left-0 object-cover -z-10"
              autoPlay
              loop
              muted
              playsinline
            ></video>
          <div
            className="text-3xl md:text-4xl lg:text-5xl text-white text-center "
            
          >
            Introducing the world's first AI-powered  gem <br></br>token researcher!
          </div>
          <div className="flex w-full justify-center pt-8 gap-6 "> <SocialIcon network="telegram" fgColor="white" />
              <SocialIcon network="twitter" fgColor="white" />
              <SocialIcon network="reddit" fgColor="white" />
              <SocialIcon network="discord" fgColor="white" />
              <SocialIcon network="youtube" fgColor="white" />
             
          </div>
          
        </div>
      </div>
    </div>
  );
}
