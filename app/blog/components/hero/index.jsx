import Button from '@mui/material/Button'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className='py-[15px]'>
			<div className='bg-[#f5f5f5] w-full min-h-[200px] flex justify-around items-center px-[25px] md:px-[50px] flex-col sm:flex-row'>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_1.png?alt=media&token=8174091c-24b5-42a0-886d-845bd15cccb9'
					alt='Profile'
					width={100}
					height={50}
				/>

				<Image
					src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_2.png?alt=media&token=d2b8bf6f-7c67-4e93-b026-917f4291d9f6'
					alt='Profile'
					width={100}
					height={50}
					className='sm:mt-[20px]'
				/>

				<Image
					src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_3.png?alt=media&token=7abda4b5-0f9e-4fc1-8353-e32194b925c9'
					alt='Profile'
					width={100}
					height={50}
					className='sm:mt-[50px]'
				/>

				<Image
					src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_4.png?alt=media&token=2a9f4b03-30a0-4c89-b189-7c8835ab42e7'
					alt='Profile'
					width={100}
					height={50}
					className='sm:mt-[20px]'
				/>

				<Image
					src='https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_5.png?alt=media&token=f65d9df1-ea8b-4ebe-9d23-e3e768f0f701'
					alt='Profile'
					width={100}
					height={50}
				/>
			</div>
			<div className='text-center mt-[50px]'>
				<h2 className='md:text-[70px] text-[24px] font-black md:leading-[70px]'>
					Monetize your content with{' '}
					<span className='text-[#49a358]'>GreenShop</span>
				</h2>
				<h3 className='text-[16px] md:text-[25px] my-[20px]'>
					Greenshop - a platform for buying and selling, publishing and
					monetizing all types of flowers: acrticles, notes, video, photos,
					podcasts or songs.
				</h3>
				<Button variant='contained' color='success'>
					Join Greenshop
				</Button>
			</div>
		</div>
	)
}

export default Hero
