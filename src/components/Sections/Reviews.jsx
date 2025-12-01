import React from "react";
import { Star } from "lucide-react";
import { ChevronsRight } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Emma Johnson",
      rating: 5,
      review:
        "Absolutely loved the food! The flavors were fresh and perfectly balanced. Highly recommended!",
    },
    {
      name: "David Anderson",
      rating: 4,
      review:
        "Great ambiance and delicious food. Service was also excellent. Will come back again!",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 bg-[#FCB53B] mt-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-10 w-full max-w-5xl">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 w-full"
          >
            {/* Name */}
            <div className="mb-3">
              <p className="font-semibold text-lg">{item.name}</p>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(item.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 stroke-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>
      <button className="bg-[#84994F] text-black font-semibold mt-5 rounded-2xl px-4 py-2 text-sm sm:text-base md:px-6 md:py-3 shadow flex items-center gap-2">
        More Reviews <ChevronsRight size={18} />
      </button>
    </div>
  );
}
