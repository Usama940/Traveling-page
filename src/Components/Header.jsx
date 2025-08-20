import React, { useState } from "react";
import logo from "../assets/Logo.png";
import plane from "../assets/plane.png";
import Girl from "../assets/Traveller 1.png";
import { FaCirclePlay } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Decor from "../assets/Decore.png";



export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="px-4 md:pl-19 py-4 w-full overflow-x-hidden">
                <div className="flex items-center justify-between w-full">

                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </div>


                    <div className="hidden md:flex items-center gap-6 md:ml-4 lg:ml-[7rem]">
                        <ul className="flex gap-4 lg:gap-[2.5rem] text-gray-800 font-normal text-[17px]  font-Roboto">
                            <li>Destinations</li>
                            <li>Hotels</li>
                            <li>Flights</li>
                            <li>Bookings</li>
                            <li>Login</li>
                        </ul>

                        <div className="flex items-center gap-3 lg:gap-4 px-4 py-2 rounded-l-full">
                            <button className="border border-slate-900 rounded-sm px-3 py-1 hover:bg-slate-100 whitespace-nowrap">
                                Sign up
                            </button>
                            <select
                                id="language"
                                name="language"
                                className="cursor-pointer bg-transparent"
                            >
                                <option value="english">EN</option>
                                <option value="urdu">UR</option>
                            </select>
                        </div>
                    </div>

                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>

                </div>

                {/* for Mobile */}
                {menuOpen && (
                    <div className="mt-4 flex flex-col gap-4 md:hidden">
                        <ul className="flex flex-col gap-2 text-gray-800 font-medium">
                            <li>Destinations</li>
                            <li>Hotels</li>
                            <li>Flights</li>
                            <li>Bookings</li>
                            <li>Login</li>
                        </ul>
                        <div className="flex items-center gap-4">
                            <button className="border border-slate-900 rounded-sm px-3 py-1 hover:bg-slate-100 whitespace-nowrap">
                                Sign up
                            </button>
                            <select
                                id="language"
                                name="language"
                                className="cursor-pointer bg-transparent"
                            >
                                <option value="english">EN</option>
                                <option value="urdu">UR</option>
                            </select>
                        </div>
                    </div>
                )}
            </header>

            <section className="w-screen flex flex-col md:flex-row items-center">


                <div className="w-full md:w-1/2 md:ml-[4rem] mx-auto text-center md:text-left px-4">
                    <h4 className="text-[rgba(223,105,81,1)] text-[1.2rem] font-bold">
                        Best Destinations around the world
                    </h4>
                    <h1
                        className="text-blue-950 font-bold py-4 font-volkhov "
                        style={{
                            fontSize: "75.8px",
                            lineHeight: "80.31px",
                            letterSpacing: "-0.04em",
                        }}
                    >
                        Travel, enjoy <br />
                        and live a new <br />
                        and full life
                    </h1>

                    <p className="text-slate-700 mt-4 text-center md:text-left font-poppins">
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
                        Park gate sell they west hard for the.
                    </p>



                    <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6  justify-center md:justify-start">
                        <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded-lg hover:bg-blue-700 w-full sm:w-auto sm:px-6 sm:py-2 sm:text-base">
                            Find out more
                        </button>
                        <button className="flex items-center justify-center border px-2 py-1 text-sm rounded-lg w-full sm:w-auto sm:px-4 sm:py-2 sm:text-base">
                            <span className="text-red-400 text-xl mr-1 sm:text-2xl"><FaCirclePlay /></span>
                            Play Demo
                        </button>
                    </div>
                </div>


                <div className="w-full md:w-1/2 flex justify-center items-center relative overflow-visible px-4 md:pr-15">
                    <img
                        className="absolute top-3 left-25 z-20 hidden md:block"
                        src={plane}
                        alt="plane"
                    />
                    <img
                        src={Girl}
                        alt="Girl"
                        className="relative z-10 max-w-full h-auto"
                    />
                    <img
                        className="absolute top-35 left-90 z-20 hidden md:block"
                        src={plane}
                        alt="plane"
                    />
                    <img
                        className="absolute -top-[5rem] -right-[2rem] -z-10 w-[70em] h-auto hidden md:block"
                        src={Decor}
                        alt="Decor"
                    />
                </div>
            </section>
        </>
    );
}
