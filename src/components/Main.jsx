import React from "react";
import reg from "../assets/reg.png";
import cheked from "../assets/checked.png";
import trophy from "../assets/trophy.png";
import pen from "../assets/pen.png";
import camera from "../assets/camera.png";
import draw from "../assets/draw.png";
import video from "../assets/video.png";
import "react-icons";
import rocket from "../assets/rocket.png";
import bulb from "../assets/bulb.png";
import water from "../assets/water.png";
import write from "../assets/write.png";
const Main = () => {
  return (
    <div className="w-full">
      <div className="min-w-[415px] lg:w-full h-[200px] md:h-[400px] bg-black text-white flex items-center justify-center">
        <div>
          <img
            src={write}
            alt=""
            className=" h-[100px] absolute top-[25px] left-[1em] lg:top-[4px] lg:left-[26em] lg:h-[250px] -rotate-142"
          />
        </div>
        <h1 className="font-bold text-[50px] md:text-[150px] font-patua leading-[243.8px] tracking-[10%]">
          <div>
            <img
              src={water}
              alt=""
              className="absolute h-[80px] top-[70px] lg:h-[200px] left-[320px] lg:top-[122px] lg:left-[1310px] -rotate-9"
            />
          </div>
          INLUSTRO
        </h1>
      </div>
      <div className="bg-[#000A2F] pb-[100px] min-w-[415px] lg:w-full">
        <div className=" flex flex-col gap-[5rem] md:flex-row justify-evenly items-center pt-[100px]">
          <div className="bg-[#9B8CF8] mr-5 hover:scale-110 duration-100 flex flex-col items-center  justify-center w-[315px] h-[434px] rounded-3xl">
            <div>
              <img src={reg} alt="/" className="" />
            </div>
            <p className="font-patua font-bold w-[225px]  pt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
              ullam id nostrum et?
            </p>
          </div>
          <div className=" bg-[#E96D6D] mr-5 hover:scale-110 duration-100 flex flex-col justify-center items-center w-[315px] h-[434px] rounded-3xl">
            <div>
              <img src={cheked} alt="/" className="" />
            </div>
            <p className="font-patua font-bold w-[225px] h-[123px] pt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
              ullam id nostrum et?
            </p>
          </div>
          <div className="bg-[#7CDD9D] mr-5 hover:scale-110 duration-100 flex flex-col items-center justify-center w-[315px] h-[434px] rounded-3xl">
            <div>
              <img src={trophy} alt="/" className="" />
            </div>
            <p className="font-patua font-bold w-[225px] h-[123px] pt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
              ullam id nostrum et?
            </p>
          </div>
        </div>

        <div>
          <img
            src={bulb}
            alt="/"
            className="absolute left-[190px] top-[5040px] lg:top-[1800px] lg:left-[1450px] h-[300px] lg:h-[608px] opacity-[60%] "
          />
        </div>

        <div>
          <img
            src={rocket}
            alt=""
            className="z-10 absolute top-[2040px] lg:top-[1140px] lg:left-[-80px] h-[300px] lg:h-[608px] opacity-[60%]"
          />
        </div>
        <div className="flex flex-col gap-[5rem] md:flex-row justify-evenly items-center mt-40 ">
          <div className="h-[225px] w-[225px] flex flex-col mr-5 justify-center items-center rounded-full bg-[#AEADDC] hover:scale-110 duration-100">
            <img src={pen} alt="/" className="" />
          </div>
          <div className="text-white h-[550px] w-[300px] mr-5 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col justify-center hover:scale-110 duration-100 bg-[#514FA6] text-center text-lg font-bold p-[3rem] rounded-3xl font-patua">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quis
            sit voluptatum consequatur beatae nostrum repellendus enim dolorum
            odit suscipit corporis possimus porro sed vel omnis temporibus
            pariatur voluptatem, autem odio obcaecati.
          </div>
        </div>

        <div className="flex flex-col-reverse gap-[5rem] md:flex-row justify-evenly  items-center mt-40">
          <div className=" text-white h-[550px] w-[300px] mr-5 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col justify-center hover:scale-110 duration-100 bg-[#BE4A4A] text-center text-lg font-bold p-[3rem] rounded-3xl font-patua">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quis
            sit voluptatum consequatur beatae nostrum repellendus enim dolorum
            odit suscipit corporis possimus porro sed vel omnis temporibus
            pariatur voluptatem, autem odio obcaecati.
          </div>
          <div className="h-[225px] w-[225px] flex flex-col mr-5 justify-center items-center rounded-full hover:scale-110 duration-100 bg-[#E48C8C]">
            <img src={camera} alt="/" className="" />
          </div>
        </div>

        <div className="flex flex-col gap-[5rem] md:flex-row justify-evenly  items-center mt-40">
          <div className="h-[225px] w-[225px] flex flex-col mr-5 justify-center items-center rounded-full hover:scale-110 duration-100 bg-[#7CDD9D]">
            <img src={draw} alt="" />
          </div>
          <div className=" text-white h-[550px] w-[300px] mr-5 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col hover:scale-110 duration-100 justify-center bg-[#2BA555] text-center text-lg font-bold p-[3rem] rounded-3xl font-patua">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quis
            sit voluptatum consequatur beatae nostrum repellendus enim dolorum
            odit suscipit corporis possimus porro sed vel omnis temporibus
            pariatur voluptatem, autem odio obcaecati.
          </div>
        </div>

        <div className=" mx-3 flex flex-col-reverse gap-[5rem] md:flex-row justify-evenly  items-center mt-40 ">
          <div className="text-white w-[300px] mr-5 h-[550px] lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col justify-center hover:scale-110 duration-100 bg-[#862197] text-center text-lg font-bold p-[3rem] rounded-3xl font-patua">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quis
            sit voluptatum consequatur beatae nostrum repellendus enim dolorum
            odit suscipit corporis possimus porro sed vel omnis temporibus
            pariatur voluptatem, autem odio obcaecati.
          </div>
          <div className="h-[225px] w-[225px] mr-5 flex flex-col justify-center hover:scale-110 duration-100 items-center rounded-full bg-[#DDA6E5]">
            <img src={video} alt="/" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
//absolute left-[450px] top-[143px] font-normal text-[200px] font-patua leading-[243.8px] text-center tracking-[10%]
