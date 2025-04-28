import React from 'react'

const Discount = async () => {
	const respons = await fetch('https://green-shop-backend.onrender.com/api/features/discount?access_token=6803bab0f2a99d0247959f21')
	const data = await respons.json()


	return (
		<div className=''>
			{
				<div className='min-h-[470px] w-full bg-gradient-to-b text-center from-[#46A3581A] to-[#46A35808] px-[22px] py-[18px]'>
					<h2 className='font-inter text-[40px] leading-[55px] text-[#46A358] '>
						{data?.data?.title}
					</h2>
					<p className='font-bold text-[23px] text-center mb-[15px] leading-[16px] mt-[12px] font-[#3D3D3D]'>
						UP TO {data?.data?.discoount_up_to}% OFF
					</p>
					<img src={`${data?.data?.poster_image_url}`} alt='img' />
				</div>
			}
		</div>
	)
}

export default Discount
