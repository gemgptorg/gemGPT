import { useState } from "react";
import classNames from "classnames";
import { MinusCircle, PlusCircle } from "react-feather";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });



const qa = [
    {
        question :"What is GemGPT ?",
        answer: "lorem ipsum sit dolor"
    },
    {
        question :"What is GemGPT ?",
        answer: "lorem ipsum sit dolor"
    },
    {
        question :"What is GemGPT ?",
        answer: "lorem ipsum sit dolor"
    },
    {
        question :"What is GemGPT ?",
        answer: "lorem ipsum sit dolor"
    },
    {
        question :"What is GemGPT ?",
        answer: "lorem ipsum sit dolor"
    },
    {
        question :"What is GemGPT ?",
        answer: "lorem ipsum sit dolor"
    },
]



export default function FAQ({id}){
    const [active, setActive] = useState(0);
    const handleActive = (index) => {
      if (active === index) {
        setActive(null);
      } else {
        setActive(index);
      }
    };
  
    return (
      <>
        <div className="w-full h-full md:h-[1000px]    lg:h-[960px]  bg-gradient-to-r from-[#00172D] to-[#00264D] items-center justify-center flex flex-col py-16 md:py-0 px-[10%] md:px-[25%] pb-36">
          <div className=" h-full w-full  flex flex-col items-center mt-48">
            <div className="flex flex-col items-center justify-center mb-16 ">
                <div className={roboto.className}>
              <p className="text-4xl text-white  font-bold mb-5">
                Frequently asked questions
              </p>
              <p className="text-base text-white text-center  mt-2">
                Everything about the GemGPT
              </p></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full " >
              {qa.map((item, index) => {
                const divStyle = classNames(
                  "flex flex-col items-center justify-center w-full bg-white ",
                  {
                    "border rounded-xl border-solid border-[#BF40BF] mb-2":
                      index !== qa.length ,
                  }
                );
  
                return (
                  <div  key={index} className={divStyle}>
                    
                    <div className="flex flex-row items-center justify-between w-full px-4 py-6 ">
                    <div  className={roboto.className}>
                      <p id={id} className="text-xl text-[#BF40BF] font-semibold">
                        {item.question}
                      </p>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-1">
                        <MinusCircle
                          className={classNames(
                            "h-5 w-5 mr-1 cursor-pointer",
                            active === index ? "text-black" : "hidden"
                          )}
                          onClick={() => handleActive(index)}
                        ></MinusCircle>
                        <PlusCircle
                          className={classNames(
                            "h-5 w-5 mr-1 cursor-pointer",
                            active === index ? "hidden" : "text-black"
                          )}
                          onClick={() => handleActive(index)}
                        ></PlusCircle>
                      </div>
                    </div>
                   
                    <div
                      className={classNames(
                        "w-full px-4 pb-6",
                        active === index ? "block" : "hidden"
                      )}
                    > <div className={roboto.className}>
                      <p className="text-base  text-black">
                        {item.answer}
                      </p>
                    </div></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  
 