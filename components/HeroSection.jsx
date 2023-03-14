import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const HeroSection = () => {
  const [showMobileMenue, setShowMobileMenue] = useState(true);

  return (
    <>
      {showMobileMenue && (
        <div className="fixed md:hidden bg-white p-10 left-0 right-0">
          <span
            className="text-2xl cursor-pointer"
            onClick={() => setShowMobileMenue(false)}
          >
            X
          </span>
          <div className="flex flex-col gap-4 mt-8 justify-center items-center">
            <div className="flex gap-6">
              <p className="text-gray-400 py-1 ">01</p>
              <p className="rounded-[6px] h-[37px] w-[265px] flex justify-center items-center border border-blue-500 text-blue-500">
                Psychometric assessment
              </p>
            </div>
            <div className="flex gap-6">
            <p className="text-gray-400 py-1">02</p>
              <p className="rounded-[6px] h-[37px] w-[265px] flex justify-center items-center border border-blue-500 text-blue-500">
                Virtual internship
              </p>
            </div>

          </div>
        </div>
      )}

      <div className="min-h-[636px] px-10 bg-[#EDEDED] py-10 ">
        <nav className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <div className="md:hidden">
              <AiOutlineMenu
                className="text-[3rem] cursor-pointer"
                onClick={() => setShowMobileMenue(true)}
              />
            </div>
            <div className="h-[77px] w-[149px] -mt-[23px]">
              <img src="/logo.png" alt="" srcset="" />
            </div>
          </div>

          <div className="hidden md:flex gap-4">
            <div className="rounded-[6px] h-[37px] w-[258px] flex justify-center items-center border border-blue-500 text-blue-500 cursor-pointer">
              Psychometric assessment
            </div>
            <div className="rounded-[6px] h-[37px] w-[258px] flex justify-center items-center border border-blue-500 text-blue-500 cursor-pointer">
              <a href="https://www.youtube.com/">Virtual internship
              </a>
            </div>
          </div>
        </nav>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-5">
              <h1 className="text-[30px] text-[#313131] text-left font-medium	 max-w-[680px]">
                Helping to Find the Right Career is Priceless
              </h1>
              <p class=" text-[20px] text-[#71717A] max-w-[542px]">Our 4 step counseling process help kids to choose the major/career
                with confidence</p>
              <div className="space-y-4">
                <div className="bg-[#3780FF] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center cursor-pointer" onClick={() => window.open('https://legislative.gov.in/sites/default/files/dummy-pdf_2_2.pdf')}>
                  Download the fllyer
                </div>
                {/* <div className="bg-[#31B946] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center cursor-pointer">
                  Enquire now
                </div> */}
                <div className="relative ">
                  <Image
                    src="/Whatsapp button.png"
                    className="mt-[15.01px]"
                    alt="whatsapp"
                    width={401}
                    height={68}
                    priority
                  />
                  <div className="absolute text-base w-[99px] h-[24px] left-[150px] 
                       top-[12.01px] font-medium normal leading-6 ml-[23px] cursor-pointer" onClick={() => window.open('https://web.whatsapp.com/')}>
                    <h4 className="poppins text-white">Enquire now</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="Helping to Find the Right Career is Priceless.png" />
            </div>
          </div>
        </section>
      </div>


    </>
  );
};

export default HeroSection;