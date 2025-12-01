import React from "react";

function Product() {
  const items = [
    { name: "Salad", img: "/img/salad.jpg", tag: "Healthy", desc: "A refreshing mix of greens and vegetables." },
    { name: "Pasta", img: "/img/pasta2.jpg", tag: "Special", desc: "Creamy Italian pasta with rich flavors." },
    { name: "Sandwich", img: "/img/sandwich.jpg", tag: "Hot", desc: "Juicy cheesy Sandwich with fresh veggies." },
    { name: "Burger", img: "/img/burger.jpg", tag: "Hot", desc: "Juicy Burger with fresh veggies and French Fries." },
    { name: "Cake", img: "/img/cake.jpg", tag: "Sweet", desc: "Soft and creamy fresh cake." },
    { name: "Ice Cream", img: "/img/icecream2.jpg", tag: "Cold", desc: "Refreshing ice cream with rich flavor." }
  ];

  return (
    <>
    <div className="w-full flex flex-col items-center py-10 bg-[#FCB53B] mt-10 rounded-2xl">
    <div className="text-center mt-6 ">
  <h1 className="text-2xl font-bold">Our Delicious Menu</h1>
</div>

<div className="max-w-5xl mx-auto px-3 py-6">
  <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-7">
    {items.map((item, index) => (
      <div
        key={index}
        className="
          bg-white
          rounded-xl
          shadow-md
          hover:shadow-lg
          duration-300
          overflow-hidden
          w-full          
          flex flex-col
        "
      >
        {/* Image */}
        <div className="relative">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-28 sm:h-36 lg:h-40 object-cover"
          />
          <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md">
            {item.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-3 flex-1 flex flex-col">
          <h2 className="text-sm sm:text-base font-semibold">{item.name}</h2>
          <p className="text-[10px] sm:text-sm text-gray-600 mt-1 flex-1">
            {item.desc}
          </p>
          <button className="w-full mt-3 bg-[#84994F] text-white py-1.5 text-xs sm:text-sm rounded-md hover:bg-green-700 duration-200">
            Order Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>

    </>
  );
}

export default Product;
