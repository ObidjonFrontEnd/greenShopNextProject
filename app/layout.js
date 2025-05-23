import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from './Context/Context'
import Auth from './components/Auth'
import CostomHeader from './components/header'
import './globals.css'
import Footer from './components/footer'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata = {
	title: 'Green Shop',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider>
					<div className='lg:max-w-[1216px] pt-[25px] pb-[10px] md:px-[50px] 2xl:px-0 mx-auto overflow-x-hidden'>
						<CostomHeader />
						<Auth />

						{children}
						<Footer/>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
