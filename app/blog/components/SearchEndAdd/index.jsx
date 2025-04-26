import SearchIcon from '@mui/icons-material/Search'

const SearchComponent = () => {
	return (
		<div className='text-center'>
			<h2 className='text-[30px] font-bold my-[30px]'>My Feed</h2>
			<div className='border-[#d9d9d9] border-[1px] overflow-hidden rounded-[4px] w-[60%] mx-auto flex h-[40px] items-center'>
				<input type='text' className='border-0 h-full outline w-full px-[15px]' />
				<button className='h-[40px] w-[40px] border-[#d9d9d9] border-[1px] bg-[#00000018] hover:bg-[#00000010] duration-[0.3s] active:bg-[#00000008]'>
					<SearchIcon />
				</button>
			</div>
		</div>
	)
}

export default SearchComponent
