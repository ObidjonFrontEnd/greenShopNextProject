import React from 'react';
import { Rate } from 'antd';

const Info = async ({ id }) => {
  const response = await fetch(
    `https://green-shop-backend.onrender.com/api/flower/category/house-plants/${id}?access_token=6803bab0f2a99d0247959f21`
  );
  const data = await response.json();
  const product = data?.data;

  return (
    <div className="p-6 flex flex-col gap-4 w-full mx-auto">
      <div className="flex items-center gap-4">
        <img
          src={product?.images?.[0]}
          alt={product?.name}
          className="w-16 h-16 object-cover rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <p className="text-green-600 text-lg font-semibold">${product?.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Rate disabled defaultValue={0} />
        <span className="text-gray-500 text-sm">0 Customer Review</span>
      </div>

      <hr className="border-t border-green-200" />

    

      <div>
        <h2 className="font-semibold mb-2">Size:</h2>
        <div className="flex gap-2">
          {['S', 'M', 'L', 'XL'].map(size => (
            <div
              key={size}
              className="w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer hover:bg-green-100"
            >
              {size}
            </div>
          ))}
        </div>
      </div>
			<div className="flex items-center gap-2">
          <button className="w-[35px] h-[35px] flex items-center justify-center border rounded-full bg-green-500 text-white hover:bg-green-600">
            -
          </button>
          <span>0</span>
          <button className="w-[35px] h-[35px] flex items-center justify-center border rounded-full bg-green-500 text-white hover:bg-green-600">
            +
          </button>
      </div>
      <div className="flex items-center gap-4 mt-4">
      
        <button className="bg-green-600 hover:bg-green-700 font-bold text-white py-2 px-4 rounded-lg">
          BUY NOW
        </button>
        <button className="py-2 px-4 border rounded-lg hover:bg-green-100">
          ADD TO CART
        </button>
        <button className="w-8 h-8 flex items-center justify-center border rounded-full text-green-600 hover:bg-green-100">
          ♡
        </button>
      </div>

      <div className="text-sm text-gray-600 mt-4">
        <p><span className="font-semibold text-gray-700">SKU:</span> {product?._id}</p>
        <p><span className="font-semibold text-gray-700">Categories:</span> {product?.category}</p>
        <p><span className="font-semibold text-gray-700">Tags:</span> Home, Garden, Plants</p>
      </div>
    </div>
  );
};

export default Info;
