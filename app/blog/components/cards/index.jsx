import CardComponent from './card'

const Cards = async () => {
	const defaultData = {
		title: 'How To Choose Wedding Flowers',
		description:
			'Flowers are an essential element or accessory for every wedding. These are needed for the bridal bouquet, table flowers, entrances, interior décor, and bridesmaids’ posies. However, picking ideal flowers for a wedding is an extremely confusing task for most brides and grooms. In fact, it is natural for them to argue over such subjects too.',
		views: 458,
		comments: 0,
		likes: 0,
	}

	const respons = await fetch(
		'https://green-shop-backend.onrender.com/api/user/blog?access_token=6803bab0f2a99d0247959f21&search='
	)
	const data = await respons.json()



	return (
		<div>
			<div className='cards my-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px]'>
				{
					data?.data?.map((obj)=>{
						return <CardComponent {...obj} key={obj?._id} />
					})
				}
		
			</div>
		</div>
	)
}

export default Cards
