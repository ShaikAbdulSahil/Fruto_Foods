import React from 'react';
import star from '../assets/images/star.png';
import tree from '../assets/images/tree.png';
import moringa from '../assets/images/moringa.png';
import raw_banana from '../assets/images/raw_banana.png';
import turmeric from '../assets/images/turmeric.png';
import garlic from '../assets/images/garlic.png';
import ginger from '../assets/images/ginger.png';
import ashwagandha from '../assets/images/ashwagandha.png';
import grains from '../assets/images/grains.png';
import pulses from '../assets/images/pulses.png';
import millets from '../assets/images/millets.png';

const Products = () => {
  const productList = [
    { name: 'Moringa Powder', image: moringa },
    { name: 'Raw Banana Powder', image: raw_banana },
    { name: 'Turmeric Powder', image: turmeric },
    { name: 'Garlic Powder', image: garlic },
    { name: 'Ginger Powder', image: ginger },
    { name: 'Ashwagandha Powder', image: ashwagandha },
    { name: 'Grains', image: grains },
    { name: 'Pulses', image: pulses },
    { name: 'Millets', image: millets },
  ];

  return (
    <div id="products" className=" py-16  bg-[#C4EBB3BF]">

      <div className="container mx-auto z-10">
        <div className="flex  items-center ml-8 text-6xl font-medium mb-6">
          <img src={star} alt="Star Icon" className=" inline-block " />

          <h2 className="text-6xl ml-1 leading-none">
            <span className="border-b-4 border-[#7B2D26]">
              Our Prod</span>
            ucts
          </h2>
        </div>
        <p className="ml-14 mt-8 mx-auto text-2xl  text-gray-800 mb-12">"We bring you a wide range of natural powders made from fresh harvests — including fruit, vegetable, and herbal powders, each processed with utmost care to promise authentic taste, rich nutrition, and uncompromised quality."</p>
        <div className='mx-10  relative overflow-hidden'>
          <div className='mt-20'>
            <img src={tree} alt="Tree Background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              {productList.map((product, index) => (
                <div key={index} className=" rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 border">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                  <div className="p-4   text-center  font-semibold text-lg group-hover:bg-green-800 transition-colors">
                    <h3>{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;