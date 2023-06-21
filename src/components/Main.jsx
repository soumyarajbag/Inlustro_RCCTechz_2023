import React from "react";

import "react-icons";
import { FaPalette } from "react-icons/fa";
import { BsFillTrophyFill, BsCameraFill } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
const Main = () => {
  return (
    <div className="w-full">
      <div className=" w-full h-[200px] md:h-[400px] bg-black text-white flex items-center justify-center">
        <h1 className="font-bold text-[50px] md:text-[150px] font-patua leading-[243.8px] tracking-[10%]">
          INLUSTRO
        </h1>
      </div>
      <div className="bg-yellow-50 pb-[100px]">
        <div className=" flex flex-col gap-[5rem] md:flex-row justify-evenly items-center pt-[100px]">
          <div className="bg-col1 flex flex-col items-center  justify-center w-[315px] h-[434px] rounded-2xl">
            <div>
              <FaPalette color="black" size="100px" />
            </div>
            <p className="font-patua font-bold w-[225px]  pt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
              ullam id nostrum et?
            </p>
          </div>
          <div className=" bg-col1 flex flex-col justify-center items-center w-[315px] h-[434px] rounded-2xl">
            <div>
              <FaPalette color="black" size="100px" />
            </div>
            <p className="font-patua font-bold w-[225px] h-[123px] pt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
              ullam id nostrum et?
            </p>
          </div>
          <div className="bg-col1 flex flex-col items-center justify-center w-[315px] h-[434px] rounded-2xl">
            <div>
              <BsFillTrophyFill color="black" size="100px" />
            </div>
            <p className="font-patua font-bold w-[225px] h-[123px] pt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
              ullam id nostrum et?
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[5rem] md:flex-row justify-evenly  items-center mt-40">
          <div className="h-[225px] w-[225px] flex flex-col justify-center items-center rounded-full bg-col1">
            <FaPalette size="100px" />
          </div>
          <div className=" h-[550px] w-[370px] md:h-[225px] md:w-[830px] flex flex-col justify-center bg-col1 text-center text-lg font-bold p-[3rem] rounded-lg font-patua">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quis
            sit voluptatum consequatur beatae nostrum repellendus enim dolorum
            odit suscipit corporis possimus porro sed vel omnis temporibus
            pariatur voluptatem, autem odio obcaecati.
          </div>
        </div>

        <div className="flex flex-col-reverse gap-[5rem] md:flex-row justify-evenly  items-center mt-40">
          <div className="h-[550px] w-[370px] md:h-[225px] md:w-[830px] flex flex-col justify-center bg-col1 text-center text-lg font-bold p-[3rem] rounded-lg font-patua">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quis
            sit voluptatum consequatur beatae nostrum repellendus enim dolorum
            odit suscipit corporis possimus porro sed vel omnis temporibus
            pariatur voluptatem, autem odio obcaecati.
          </div>
          <div className="h-[225px] w-[225px] flex flex-col justify-center items-center rounded-full bg-col1">
            <BsCameraFill size="100px" />
          </div>
        </div>

        <div className="flex flex-col gap-[5rem] md:flex-row justify-evenly  items-center mt-40">
          <div className="h-[225px] w-[225px] flex flex-col justify-center items-center rounded-full bg-col1">
            <FaPalette size="100px" />
          </div>
          <div className="h-[550px] w-[370px] md:h-[225px] md:w-[830px] flex flex-col justify-center bg-col1 text-center text-lg font-bold p-[3rem] rounded-lg font-patua">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quis
            sit voluptatum consequatur beatae nostrum repellendus enim dolorum
            odit suscipit corporis possimus porro sed vel omnis temporibus
            pariatur voluptatem, autem odio obcaecati.
          </div>
        </div>

        <div className=" mx-3 flex flex-col-reverse gap-[5rem] md:flex-row justify-evenly  items-center mt-40">
          <div className="h-[550px] w-[370px] md:h-[225px] md:w-[830px] flex flex-col justify-center bg-col1 text-center text-lg font-bold p-[3rem] rounded-lg font-patua">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quis
            sit voluptatum consequatur beatae nostrum repellendus enim dolorum
            odit suscipit corporis possimus porro sed vel omnis temporibus
            pariatur voluptatem, autem odio obcaecati.
          </div>
          <div className="h-[225px] w-[225px] flex flex-col justify-center items-center rounded-full bg-col1">
            <BiMoviePlay size="100px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
//absolute left-[450px] top-[143px] font-normal text-[200px] font-patua leading-[243.8px] text-center tracking-[10%]
