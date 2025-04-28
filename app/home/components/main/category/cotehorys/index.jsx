import Skeleton from '@mui/material/Skeleton'
import React from 'react'



const Cotegory = async () => {

	const respons = await fetch('https://green-shop-backend.onrender.com/api/flower/category?access_token=6803bab0f2a99d0247959f21')
	const data = await respons.json()


	return (
		<div className='w-full'>
			<div className='title text-[#3D3D3D] font-bold text-[18px] leading-[16px]'>
				Categories
			</div>
			<div className='pl-[12px]  mt-[14px]'>
				{
					data?.data?.map(({ title, count, _id }) => {
						return (
							<div
								className='flex justify-between group font-bold duration-[0.3s] w-full text-[15px] leading-[40px]'
								key={_id}
							>
								<p className='group-hover:text-[#46A358] duration-[0.3s]'>
									{title}
								</p>
								<p className='group-hover:text-[#46A358] duration-[0.3s]'>
									({count})
								</p>
							</div>
						)
					})
				}
			</div>
		</div>

	
	)
}

export default Cotegory
