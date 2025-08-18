import React from "react";

import recicon1 from "../assets/rec-1.png";
import recicon2 from "../assets/rec-2.jpg";
import recicon3 from "../assets/rec-3.png";

const services = [
    {
        img: recicon1,
        title: "Rome, Italy",
        num: "$5,42k",
        description: "10 Days Trip",
    },
    {
        img: recicon2,
        title: "London, UK",
        num: "$4.2k",
        description: "12 Days Trip",
    },
    {
        img: recicon3,
        title: "Full Europe",
        num: "$15k",
        description: "28 Days Trip",
    },
];

export default function Service() {
    return (
        <div className="flex flex-col items-center m-[5rem]">
            <div>
                <h4 className="mb-2 text-1xl text-slate-600 text-center">Top Selling</h4>
                <h2 className="mb-20 text-2xl font-bold font-serif text-nowrap text-blue-950">
                    Top Destinations
                </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {services.map(({ img, title, num, description }, index) => (
                    <div key={index} className="relative w-fit">
                        <img
                            src={img}
                            alt={title}
                            className="rounded-lg w-150 h-auto object-cover md:w-full md:h-auto"
                        />


                        <div
                            className="absolute bottom-0 left-0 right-0 bg-amber-50 p-2 rounded-b-lg w-full overflow-visible hidden md:block"
                        >
                            <div className="flex justify-between text-slate-700">
                                <h5 className="text-sm font-semibold">{title}</h5>
                                <h5 className="text-sm font-semibold">{num}</h5>
                            </div>
                            <p className="text-gray-900">{description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
