'use client';
import { Box } from '@mui/material';
import Link from 'next/link'
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Cards = () => {
  const [tabValue, setTabValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://green-shop-backend.onrender.com/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7&sort=most-expensive&type=all-plants&range_min=0&range_max=1000'
      );
      const data = await response.json();
      setProducts(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при загрузке товаров', error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  const defaultSkeletonArray = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div>
      <Box>
        <CustomTabPanel value={tabValue} index={0}>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
            {loading
              ? defaultSkeletonArray.map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-[300px] bg-gray-200 animate-pulse rounded"
                  ></div>
                ))
              : products.map(({ title, price, discount, discount_price, main_image, _id }) => (
                  <div
                    key={_id}
                    className="lg:max-w-[258px] px-[4px] pt-[31px] bg-[#FBFBFB]"

                  >
                    <div className="photo max-w-[250px] h-[250px] mx-auto">
                      <img
                        src={main_image}
                        className="w-full h-full object-cover"
                        alt={title}
                      />
                    </div>
                   <Link href={`/shop/${_id}`}> 
                   <h2 className="mt-[12px] mb-[6px] font-inter text-[20px] font-bold leading-[16px] text-[#3D3D3D]">
                      {title}
                    </h2>
                    </Link>

                    {discount ? (
                      <p className="text-[#46A358] font-bold font-inter text-[18px] leading-[16px]">
                        ${discount_price}{' '}
                        <span className="line-through font-medium text-[16px] text-[#a5a5a5]">
                          ${price}
                        </span>
                      </p>
                    ) : (
                      <p>${price}</p>
                    )}
                  </div>
                ))}
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={1}>
         <h2>2</h2>
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={2}>
        <h2>3</h2>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default Cards;
