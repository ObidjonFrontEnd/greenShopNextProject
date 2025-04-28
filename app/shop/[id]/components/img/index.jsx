'use client'
import CloseIcon from '@mui/icons-material/Close' // X tugmasi uchun
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { useEffect, useState } from 'react'

const ProductImg = ({ id }) => {
	const [images, setImages] = useState([])
	const [selectedImage, setSelectedImage] = useState('')
	const [isPreviewOpen, setIsPreviewOpen] = useState(false) // Modal ochiq-yo'qmi

	const fetchData = async () => {
		const response = await fetch(
			`https://green-shop-backend.onrender.com/api/flower/category/house-plants/${id}?access_token=6803bab0f2a99d0247959f21`
		)
		const data = await response.json()
		const fetchedImages = data?.data?.detailed_images || []
		setImages(fetchedImages)
		if (fetchedImages.length > 0) {
			setSelectedImage(fetchedImages[0])
		}
	}

	useEffect(() => {
		fetchData()
	}, [id])

	return (
		<>
			<div className='flex gap-4 flex-col-reverse md:flex-row  w-full'>
				<div className='flex gap-4 flex-row md:flex-col mx-auto'>
					{images.map((img, idx) => (
						<img
							key={idx}
							src={img}
							alt={`Thumbnail ${idx + 1}`}
							className={`w-20 h-20 object-cover cursor-pointer border-2 ${
								selectedImage === img
									? 'border-green-500'
									: 'border-transparent'
							}`}
							onClick={() => setSelectedImage(img)}
						/>
					))}
				</div>

				<div className='flex   mx-auto justify-center items-center'>
					{selectedImage ? (
						<div className='h-[300px] w-[300px] relative mx-auto group'>
							<div className='relative h-full w-full'>
								<img
									src={selectedImage}
									alt='Selected'
									className='h-full w-full object-cover'
								/>
								{/* Hoverda ko‘rinadigan qora fon va ko‘z ikonkasi */}
								<div
									onClick={() => setIsPreviewOpen(true)}
									className='absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 z-10 flex justify-center items-center gap-2 cursor-pointer'
								>
									<RemoveRedEyeOutlinedIcon className='group-hover:opacity-100 duration-300 opacity-0 text-white' />
									<h2 className='group-hover:opacity-100 duration-300 text-[18px] font-bold opacity-0 text-white'>
										Preview
									</h2>
								</div>
							</div>
						</div>
					) : (
						<p>No image available</p>
					)}
				</div>
			</div>

			{isPreviewOpen && (
				<div className='fixed inset-0 bg-black/75 flex flex-col items-center justify-center z-[9999] px-4 py-8 '>
					{/* Close tugmasi rasm ustida emas */}
					<button
						onClick={() => setIsPreviewOpen(false)}
						className='text-white bg-black/50 hover:bg-black/70 p-2 rounded-full mb-4 absolute sm:top-[25px] right-[15px] top-[50px] sm:right-[100px] xl:right-[400px]'
					>
						<CloseIcon />
					</button>

					<img
						src={selectedImage}
						alt='Preview Full'
						className='max-h-[80vh] w-full object-contain'
					/>
				</div>
			)}
		</>
	)
}

export default ProductImg
