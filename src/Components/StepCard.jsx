import React from "react";
import girl from "../assets/Rectangle 17.jpg";
import {
  FaMapMarkerAlt,
  FaCreditCard,
  FaPlane,
  FaLeaf,
  FaMap,
  FaPaperPlane,
} from "react-icons/fa";

export default function StepCard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-10 md:m-20 m-6">


      <div className="flex-1">
        <p className="text-sm text-gray-500 font-medium">Easy and Fast</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-blue-950 leading-snug">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h2>

        <div className="mt-8 space-y-6">

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg text-white flex-shrink-0">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900">Choose Destination</h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-red-400 rounded-lg text-white flex-shrink-0">
              <FaCreditCard size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900">Make Payment</h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>


          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg text-white flex-shrink-0">
              <FaPlane size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900">
                Reach Airport on Selected Date
              </h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex-1 flex justify-center items-center">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-visible w-80">
          <img
            src={girl}
            alt="Trip to Greece"
            className="h-48 w-full object-cover rounded-t-2xl"
          />
          <div className="p-4">
            <h4 className="font-semibold text-lg">Trip To Greece</h4>
            <p className="text-sm text-gray-500">14-29 June | by Robbin j</p>
            <div className="flex gap-3 mt-3 text-gray-500 text-lg">
              <FaLeaf />
              <FaMap />
              <FaPaperPlane />
            </div>
            <p className="mt-3 text-sm text-gray-500">24 people going</p>
          </div>


          <div className="absolute bottom-4 right-4 md:bottom-9 md:-right-16 bg-white shadow-lg rounded-xl p-3 w-40">
            <p className="text-xs text-gray-400">Ongoing</p>
            <h5 className="font-semibold">Trip to Rome</h5>
            <p className="text-xs text-blue-500">40% completed</p>
          </div>
        </div>
      </div>

    </div>
  );
}
