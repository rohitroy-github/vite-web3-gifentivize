// Services section !

import React from "react";
import {BsShieldFillCheck} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import {RiHeart2Fill} from "react-icons/ri";
import {AiOutlineFileGif} from "react-icons/ai";

// ServiceCard for common styles !
const ServiceCard = ({color, title, icon, subtitle}) => (
  <div className="flex flex-row justify-between items-start white-glassmorphism p-5 m-3 cursor-pointer hover:shadow-2xl align-middle w-full">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className=" text-white text-xl">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-[80%]">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services h-[100vh]">
    <div className="md:w-[75%] w-full flex mf:flex-row flex-col justify-center ">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-5 text-gradient ">
          Services that we
          <br />
          offer and continue
          <br />
          to improve.
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets is with
          Gifentivize, with the various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security guranteed !"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates !"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Get the best exchange rates in the market by using Gifentivize. "
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions !"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Lighning fast transactions. We are using EVM based Sepolia test network currently"
        />
        <ServiceCard
          color="bg-[#E30B5D]"
          title="Gifentivize transactions !"
          icon={<AiOutlineFileGif fontSize={21} className="text-white" />}
          subtitle="Just make your transactions. We'll make them cool by adding a GIF based on your entered keyword."
        />
      </div>
    </div>
  </div>
);

export default Services;
