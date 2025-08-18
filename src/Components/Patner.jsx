import React from 'react'
import logo1 from "../assets/image 27.png"
import logo2 from "../assets/image 28.png"
import logo3 from "../assets/image 29.png"
import logo4 from "../assets/image 30.png"
import logo5 from "../assets/image 31.png"

const patnerlogo = [
    { img: logo1 },
    { img: logo2 },
    { img: logo3 },
    { img: logo4 },
    { img: logo5 }
]

export default function Patner() {
    return (
        <div className="flex gap-4 flex-wrap justify-around m-19">
            {patnerlogo.map(({ img }, index) => (
                <div key={index} className="relative  flex ">
                    <img
                        src={img}
                        alt={`Partner logo `}
                        className="rounded-lg w-24 h-auto flex md:flex md:flex-shrink-0 "
                    />
                </div>
            ))}
        </div>
    )
}
