import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
const GoalSection = () => {

  return (
    <>
      <div className="min-h-[536px] px-10 bg-[#EDEDED]">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-5">
              <h1 className="text-[44px] text-[#313131] font-semibold max-w-[680px]">
                Goal Planning Session
              </h1>
              <p className=" text-[20px] text-[#71717A] max-w-[542px]">8 week program curated to give children a perspective on the world of careers and other important skill sets, such as soft skills & personal finance.</p>
              <div className="space-y-4">
                <div className="bg-[#3780FF] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center cursor-pointer" onClick={() => window.open('https://legislative.gov.in/sites/default/files/dummy-pdf_2_2.pdf')}>
                  Download the fllyer
                </div>
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
              top-[12.01px] font-medium normal leading-6 ml-[23px] mt-[18px]">
                    <h4 className="poppins text-white">Enquire now</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" alt="goal" src="/Goal Planning Session.png" width={629.99}
                    height={403.12}
                    priority />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GoalSection;
