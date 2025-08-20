import React from "react";

import catagoryicon1 from "../assets/Group 48.png";
import catagoryicon2 from "../assets/Group 51.png";
import catagoryicon3 from "../assets/Group 50.png";
import catagoryicon4 from "../assets/Group 49.png";

const categories = [
    {
        icon: catagoryicon1,
        title: "Calculated Weather",
        description: "Built Wicket longer admire do barton vanity itself do in it.",

    },
    {
        icon: catagoryicon2,
        title: "Best Flights",
        description: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
        icon: catagoryicon3,
        title: "Local Events",
        description: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    },
    {
        icon: catagoryicon4,
        title: "Customization",
        description: "We deliver outsourced aviation services for military customers.",
    },
];

export default function Catagory() {
    return (
        <div>
            <div className="flex flex-col items-center m-[5rem]  text-center md:text-left">
                <h2 className="mb-2 text-xl text-slate-600">CATEGORY</h2>
                <h2 className="mb-8 md:mb-10 text-lg md:text-2xl font-bold font-serif text-blue-950 text-center md:text-left  overflow-x-auto">
                    We Offer Best Services
                </h2>

                <div className="flex items-center justify-between mt-4 flex-col md:flex-row">
                    {categories.map(({ icon, title, description, 1: specialStyle }, index) => (
                        <div
                            key={title}
                            className={`text-center md:w-1/6 ${specialStyle
                                ? "rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.02)_0px_8px_6px_rgba(0,0,0,0.01)_0px_20px_13px_rgba(0,0,0,0.01)] w-25 h-10"
                                : ""
                                }`}
                        >
                            <img src={icon} alt={title} className="mx-auto" />
                            <h2 className="mt-4 text-blue-950 font-semibold">{title}</h2>
                            <p className="mt-2 text-sm text-slate-700 font-poppins">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
