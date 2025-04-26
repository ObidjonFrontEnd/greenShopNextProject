'use client'
import { useEffect, useState } from 'react'
import SearchComponent from './SearchEndAdd'
import Hero from './hero'
import { useTheme } from '@/app/Context/Context'

const Components = () => {

	const {isToken , setIstoken} = useTheme()





	return <div>{isToken ? <SearchComponent /> : <Hero />}</div>
}

export default Components
