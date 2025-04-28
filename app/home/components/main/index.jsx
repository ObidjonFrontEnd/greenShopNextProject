import Cotegories from './category'
import Product from './products'

const HomeMain = () => {
	return (
		<div className='flex gap-[50px] my-[29px]'>
			
			<Cotegories />
			<Product />
		
		</div>
	)
}

export default HomeMain
