import React from 'react'
import ggogle1 from "../assets/Play Store.png"
import ggogle2 from "../assets/Google Play.png"
import { FiSend } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function SubscribeSection() {
    return (
        <>

            <div className="relative bg-[#f8f5ff] p-8 md:p-18 w-[90%] mx-auto mt-12 overflow-hidden rounded-lg justify-center items-center">

                <div className="absolute left-0 top-0 w-40 h-40 opacity-30 rounded-full -translate-x-1/3 -translate-y-1/3"></div>

                <div className="absolute right-0 top-0 bg-blue-600 text-white p-3 rounded-full">
                    <FiSend size={20} />
                </div>


                <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-700 mb-6 font-poppins">
                    Subscribe to get information, latest news and other <br className="hidden md:block" />
                    interesting offers about Jadoo
                </h2>


                <form className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">

                    <div className="relative w-full md:flex-1">
                        <MdOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder:text-sm md:placeholder:text-base"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-auto bg-[rgba(255,148,109,1)] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>


            <footer className="bg-white py-12 mt-12">
                <div className="w-4/5 mx-auto flex flex-col md:flex-row md:justify-between md:items-start items-center text-center md:text-left gap-8 ">


                    <div className="flex flex-col items-center md:items-start w1/5">
                        <h2 className="text-2xl font-bold text-blue-900">Jadoo.</h2>
                        <p className="text-slate-700 mt-2 text-sm">
                            Book your trip in minute, get full control for much longer.
                        </p>
                    </div>


                    <div className="flex flex-col items-center md:items-start w-1/5">
                        <h3 className="font-bold mb-3">Company</h3>
                        <ul className="space-y-2 text-slate-700 text-[18px] font-poppins font-normal">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Mobile</li>
                        </ul>
                    </div>


                    <div className="flex flex-col items-center md:items-start w-1/5">
                        <h3 className="font-bold mb-3">Contact</h3>
                        <ul className="space-y-2 text-slate-700 text-[18px] font-poppins font-normal">
                            <li>Help/FAQ</li>
                            <li>Press</li>
                            <li>Affiliates</li>
                        </ul>
                    </div>


                    <div className="flex flex-col items-center md:items-start w-1/5">
                        <h3 className="font-bold mb-3">More</h3>
                        <ul className="space-y-2 text-slate-700 text-[18px] font-poppins font-normal">
                            <li>Airlinefees</li>
                            <li>Airline</li>
                            <li>Low fare tips</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center w-1/4">
                        <div className="flex space-x-3 mb-4">
                            <a href="#" className="bg-white border rounded-full p-2 shadow hover:shadow-md">
                                <FaFacebookF className="text-gray-600 w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-2 shadow hover:shadow-md">
                                <FaInstagram className="text-white w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white border rounded-full p-2 shadow hover:shadow-md">
                                <FaTwitter className="text-gray-600 w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">Discover our app</p>
                        <div className="flex gap-4 justify-center md:justify-start w-full">
                            <a
                                href="#"
                                className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded-4xl hover:bg-gray-900 transition h-9"
                            >
                                <FaApple className="text-[10px] flex-shrink-0" />
                                <div className="flex flex-col justify-center text-left whitespace-nowrap flex-shrink-0">
                                    <span className="text-[10px]">Available on the</span>
                                    <span className="font-semibold text-[10px]">Apple Store</span>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-4xl hover:bg-gray-900 transition h-9"
                            >
                                <FaGooglePlay className="text-[10px] flex-shrink-0" />
                                <div className="flex flex-col justify-center text-left whitespace-nowrap flex-shrink-0">
                                    <span className="text-[10px]">GET IT ON</span>
                                    <span className="font-semibold text-[10px]">Google Play</span>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="text-center text-slate-700  mt-8 font-normal text-[18px]">
                    All rights reserved@jadoo.co
                </div>
            </footer>
        </>
    );
}
