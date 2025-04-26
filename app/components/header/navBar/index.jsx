'use client'; 
import Link from 'next/link'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge, { badgeClasses } from '@mui/material/Badge'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useTheme } from '@/app/Context/Context'


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    	top: -13px;
		right: 3px;
  }
`;


const Navigation = () => {
  const { isOpenAuth, setIsOpenAuth } = useTheme();

  
  return (
    <div className='flex px-[15px] md:px-[0] justify-between items-center md:border-b-[#46A35880] pb-[18px] md:border-b-[0.3px]'>
			<div className='logo'>
				<Link href='/home'>
					<img src='/logo.png' alt='Logo' />
				</Link>
			</div>

			<ul className='hidden md:flex items-center text-[#3D3D3D] font-inter font-normal gap-[24px]  lg:gap-[50px] text-[16px] '>
				<li>
					<IconButton>
						<Link href='/home' className='text-[16px]'>
							Home
						</Link>
					</IconButton>
				</li>
				<li>
					<IconButton>
						<Link href='/blog' className='text-[16px]'>
							Blog
						</Link>
					</IconButton>
				</li>
			</ul>

			<div className='flex gap-[30px] items-center'>
				<IconButton>
					<SearchIcon sx={{ fontSize: 30 }} />
				</IconButton>

				<IconButton>
					<ShoppingCartIcon sx={{ fontSize: 30 }} />
					<CartBadge badgeContent={1} color='error' overlap='circular' />
				</IconButton>

				<div className='hidden md:block'>
				
						<Button
							variant='contained'
							color='primary'
							className='gap-[10px] rounded-[6px] '
							sx={{bgcolor:"#46A358"}}
              onClick={()=>{setIsOpenAuth(true)}}
						>
							<LoginIcon /> login
						</Button>
	
				</div>

				<div className='md:hidden'>
					<MenuIcon sx={{ fontSize: 30 }} className=''  />
				</div>
			</div>
		</div>
  )
}

export default Navigation
