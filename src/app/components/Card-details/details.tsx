import React from "react";
import { FaUser } from "react-icons/fa6";
import card from "../img/card.png";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa6";

const Details = () => {
  return (
    <div className="absolute bottom-8 left-40 h-[54%] w-[71%] rounded-[40px] flex justify-between animate-slide-up">
      {/* main dev  */}
      <div className=" bg-white/80 w-[74.5%] rounded-3xl shadow-lg">

        {/* first line */}   
        <div className="flex m-7 items-center justify-between">
        {/* icon  */}
            <div className="flex">
            <div className=" w-11 h-11 rounded-full items-center flex justify-center bg-gradient-to-b from-[#ff007f] to-[#8b00ff] pointer-events-none select-none">
                <FaAddressCard className="text-slate-200 h-6 w-6" />
                </div>
                {/* heading  */}
                <h2 className="ml-6 text-3xl font-bold pointer-events-none select-none">My Visa Card</h2>
            </div>
            <h3 className="text-3xl font-bold pointer-events-none select-none">$4321.65</h3>
        </div>

        {/* second line */} 
        <div className="flex justify-between px-8 pb-4">
            <div>
                <h3 className="text-2xl font-bold pointer-events-none select-none">Overview</h3>
                <p className="bg-gradient-to-tr from-[#ff007f] to-[#8b00ff] bg-clip-text text-transparent font-bold pointer-events-none select-none">Total Amount</p>
            </div>

            <div className="bg-stone-300 w-72 h-12 text-gray-500 font-bold flex items-center justify-between pr-5 pl-1 rounded-[40px] pointer-events-none select-none">
                <div className="w-24 h-10 rounded-[40px] flex justify-center items-center shadow-lg bg-white/90 pointer-events-none select-none">Earnings</div>
                Spending
            </div>

        </div>


        {/* third line  */}
        <div className="relative w-[90%] h-24 rounded-3xl bg-stone-300 ml-12 px-1 flex items-center mb-3 justify-between">
            <div className="relative w-[31.8%] h-[95%] bg-white/85 shadow-xl rounded-3xl">
                <h3 className="absolute right-7 top-4 font-bold text-3xl">$2500.00</h3>
                <div className="absolute right-7 top-14 flex gap-5 font-bold ">
                    <h5 className="text-green-600">+40.2%</h5>
                    <h5 className="text-gray-500">Salary</h5>
                </div>
            </div>

            <div className="relative w-[31.8%] h-[95%] bg-white/85 shadow-xl rounded-3xl">
                <h3 className="absolute right-7 top-4 font-bold text-3xl">$2500.00</h3>
                <div className="absolute right-7 top-14 flex gap-5 font-bold ">
                    <h5 className="text-green-600">+40.2%</h5>
                    <h5 className="text-gray-500">Salary</h5>
                </div>
            </div>

            <div className="relative w-[31.8%] h-[95%] bg-white/85 shadow-xl rounded-3xl">
                <h3 className="absolute right-7 top-4 font-bold text-3xl">$2500.00</h3>
                <div className="absolute right-7 top-14 flex gap-5 font-bold ">
                    <h5 className="text-green-600">+40.2%</h5>
                    <h5 className="text-gray-500">Salary</h5>
                </div>
            </div>
        </div>

        {/* fourth line  */}

        <div className="px-8 py-3 flex justify-between">
            <h3 className="font-bold text-2xl pointer-events-none select-none">Summery</h3>
            <div className="bg-neutral-200 w-[40%] rounded-[40px] ">
                <ul className="flex justify-evenly font-bold pt-1 text-gray-500 pointer-events-none select-none">
                    <li>1D</li>
                    <li>1W</li>
                    <li>1M</li>
                    <li>1Y</li>
                    <li>Max</li>
                </ul>
            </div>
        </div>


        {/* summary last line  */}

        <div className="relative w-[93.5%] mx-8 h-[33%] flex justify-between">

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[50%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[70%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[85%] w-[90%] bg-gradient-to-tr from-[#ff007f] to-[#8b00ff] shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[75%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[40%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[40%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[80%] w-[90%] bg-gradient-to-br from-[#ff007f] to-[#8b00ff] shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[60%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[55%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[65%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[70%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

            <div className="relative h-full w-[6%]  rounded-2xl bg-gray-200 shadow-xl flex justify-center ">
                <div className="absolute bottom-0 rounded-2xl h-[50%] w-[90%] bg-white/80 shadow-lg mb-1"></div>
            </div>

        </div>




      </div>




      {/* card details  */}
      <div className="w-80 h-[54%] rounded-3xl bg-white/90 shadow-lg justify-center px-5 py-5">
        {/* heading with icon  */}
        <div className="flex">
          <span className=" p-2 rounded-full bg-gradient-to-b from-[#ff007f] to-[#8b00ff] pointer-events-none select-none">
            <FaUser className="text-slate-200 h-5 w-5" />
          </span>
          <h2 className="font-bold text-2xl text-black pl-6 pointer-events-none select-none">
            Card Details
          </h2>
        </div>

        {/* details div  */}
        <div className="bg-stone-200 rounded-2xl h-32 my-4 px-4 py-4 grid grid-cols-2 justify-between text-zinc-400 font-bold pointer-events-none select-none">
          <h4>Holder Name</h4>
          <p className="ml-14">Umair</p>
          <h4>Card Number</h4>
          <p className="ml-14">***3190</p>
          <h4>Expire Date</h4>
          <p className="ml-14">11/24</p>
          <h4>CVV</h4>
          <p className="ml-14">***</p>
        </div>

        {/* button  */}
        <button className=" w-[100%] h-12 rounded-[40px] font-bold text-xl bg-gradient-to-b from-red-500 to-pink-500 text-white/85">
          View Details
        </button>
      </div>

      {/* ad  */}
      <div className="absolute bottom-0 right-0 bg-black/75 w-80 h-[41%] shadow-lg rounded-3xl pointer-events-none select-none">
        <Image
          src={card}
          alt="card"
          height={500}
          width={500}
          className="absolute left-10 rotate-12"
        />
        {/* icon  */}
        <div className="absolute top-8 left-6 p-2 w-11 h-11 rounded-full items-center bg-gradient-to-b from-[#ff007f] to-[#8b00ff]">
          <IoIosStar className="text-slate-200 h-7 w-7" />
        </div>
        <h3 className="text-white/90 text-3xl absolute top-[90px] left-6">
          Join
        </h3>
        <h4 className="text-white/90 text-3xl absolute top-32 left-6 ">
          Premium
        </h4>
      </div>
    </div>
  );
};

export default Details;
