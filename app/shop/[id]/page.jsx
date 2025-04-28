import Link from 'next/link'
import React from 'react'
import ProductImg from './components/img'
import Info from './components/info'



const Product = ({ params }) => {
	const {id} = params;

	
	return (
		<div className='mb-[50px]'>
				<div className="flex items-center gap-[5px] py-[15px] px-[15px]">
					<Link href={'/home'} className='text-gray-400'>Home</Link> <h2>/</h2>
					<h2>Shop</h2>
				</div>
				<div className="flex gap-[25px] flex-col md:flex-row px-[15px]">
					<div className="w-full md:w-[40%]">
						<ProductImg id={id} />
					</div>
					<div className="w-full md:w-[60%]">
						<Info id={id}/>
					</div>
				</div>
		</div>
	)
}

export default Product