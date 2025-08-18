import React from 'react';
import dotimg from "../assets/dots.png";
import man from "../assets/Image.png";

export default function Testimonials() {
    return (
        <div className="flex flex-col md:flex-row bg-white justify-between items-center gap-6 px-4 py-8 md:p-10 mt-16 md:mt-24 overflow-x-hidden md:m-25">

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left max-w-full">
                <h4 className="text-xl text-blue-900">Testimonials</h4>
                <h2 className="text-3xl md:text-4xl text-blue-950 font-bold leading-snug">
                    What people say about Us.
                </h2>
                <img src={dotimg} alt="dotimg" className="mt-4" />
            </div>


            <div className="w-full md:w-[40%] bg-white max-w-full">
                <div className="shadow-lg rounded-xl p-4 w-full">
                    <img
                        src={man}
                        alt=""
                        className="mb-4 w-28 h-auto md:w-16 lg:w-20 object-cover rounded-lg"
                    />
                    <p className="italic mb-4 text-start text-gray-700 leading-relaxed">
                        “On the Windows talking painted pasture yet its express parties use.
                        Sure last upon he same as knew next. Of believed or diverted no.”
                    </p>
                    <h4 className="font-bold text-start text-blue-950">Mike Taylor</h4>
                    <p className="text-sm text-gray-600 text-start">Lahore, Pakistan</p>
                </div>

                <div className="border-b border-r rounded-b-2xl border-red-800 p-4 w-full">
                    <p className="font-semibold text-lg text-blue-950">Chris Thomas</p>
                    <p className="text-sm text-gray-500">CEO of Red Button</p>
                </div>
            </div>

        </div>
    );
}
