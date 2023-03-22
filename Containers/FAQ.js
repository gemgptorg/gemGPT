import { useState } from "react";
import classNames from "classnames";
import { MinusCircle, PlusCircle } from "react-feather";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

const qa = [
  {
    question: "What is GemGPT ?",
    answer:
      "GemGPT is a decentralized application (dApp) built on the blockchain that leverages artificial intelligence to facilitate research and analysis of the gemstone market. The goal of the project is to provide a comprehensive platform for gemstone enthusiasts, investors, and traders to access valuable insights and data, ultimately empowering them to make informed decisions.",
  },
  {
    question: "What Does GemGPT Do?",
    answer:
      "GemGPT is designed to function as a two-part system. Firstly, it will collect data on gemstone markets from various sources, including online marketplaces, auction houses, and gemstone dealerships. Secondly, it will use artificial intelligence algorithms to analyze and process the data, providing users with valuable insights on market trends, supply and demand, and pricing.",
  },
  {
    question: "Our Solution ",
    answer:
      "GemGPT addresses these challenges by leveraging blockchain technology and AI. The platform aggregates data from various sources, including exchanges, social media, and news outlets, and analyzes it using machine learning algorithms. The AI models are trained to identify patterns and trends in the data, allowing for more accurate predictions of market movements.",
  },
  {
    question: "$GEM",
    answer:
      "The Gem Token (GEM) is the native token of the platform, used to incentivize users to contribute data and provide liquidity to the platform. The token will be used to pay for access to premium research and analysis, and to reward users for their contributions to the platform. The total supply of GEM tokens will be fixed at 100 million, with a portion reserved for the team and advisors, and the remainder distributed through a token sale.",
  },
  {
    question: "When GemGPT Will Be Released?",
    answer:
      "The Gem Token Research Project is currently in the development phase, with a target launch date of Q4 2023. The platform will initially support a limited number of cryptocurrencies, with plans to expand to additional coins and tokens in the future. The team will also be conducting ongoing research and development to improve the accuracy of the AI models and expand the functionality of the platform.",
  },
 
];

export default function FAQ({ id }) {
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
        <div className=" h-full w-full  flex flex-col items-center mt-48 mb-48">
          <div className="flex flex-col items-center justify-center mb-16 ">
            <div className={roboto.className}>
              <p className="text-4xl text-white  font-bold mb-5">
                Frequently asked questions
              </p>
              <p className="text-base text-white text-center  mt-2">
                Everything about the GemGPT
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full ">
            {qa.map((item, index) => {
              const divStyle = classNames(
                "flex flex-col items-center justify-center w-full bg-white ",
                {
                  "border rounded-xl border-solid border-[#BF40BF] mb-2":
                    index !== qa.length,
                }
              );

              return (
                <div key={index} className={divStyle}>
                  <div className="flex flex-row items-center justify-between w-full px-4 py-6 ">
                    <div className={roboto.className}>
                      <p
                        id={id}
                        className="text-xl text-[#BF40BF] font-semibold"
                      >
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
                  >
                    {" "}
                    <div className={roboto.className}>
                      <p className="text-base  text-black">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
