'use client'
import { auth, provider } from '@/app/config/firebase'
import { useTheme } from '@/app/Context/Context'
import {
	EyeInvisibleOutlined,
	EyeOutlined,
	FacebookOutlined,
	GoogleOutlined,
} from '@ant-design/icons'
import { Form, Input } from 'antd'
import { signInWithPopup } from 'firebase/auth'
import { useState } from 'react'

const SignIN = () => {
	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword(show => !show)
	const { setIstoken } = useTheme()
	const onFinish = async values => {
		const { email, password } = values
		try {
			const response = await fetch(
				`https://green-shop-backend.onrender.com/api/user/sign-in?access_token=6506e8bd6ec24be5de357927`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, password }),
				}
			)
			const data = await response.json()
			if (response.ok || data?.data) {
				localStorage.setItem('token', JSON.stringify(data.data.token))
				localStorage.setItem('name', JSON.stringify(data.data.user.name))
				localStorage.setItem('surname', JSON.stringify(data.data.user.surname))
				localStorage.setItem('email', JSON.stringify(data.data.user.email))
				setIstoken(true)
			}
		} catch (err) {
			console.log(err)
		}
	}

	const authWithGoogle = async () => {
		const result = await signInWithPopup(auth, provider)

		const user = result.user
		const response = await fetch(
			`https://green-shop-backend.onrender.com/api/user/sign-in/google?access_token=6506e8bd6ec24be5de357927`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: user.email,
				}),
			}
		)
		const data = await response.json()
		if (response.ok || data?.data) {
			localStorage.setItem('token', JSON.stringify(data.data.token))
			localStorage.setItem('name', JSON.stringify(data.data.user.name))
			localStorage.setItem('surname', JSON.stringify(data.data.user.surname))
			localStorage.setItem('email', JSON.stringify(data.data.user.email))
			setIstoken(true)
		}
	}
	return (
		<Form
			name='sign-in'
			onFinish={onFinish}
			className='w-[300px] sm:w-[360px] mx-auto px-[10px]'
			layout='vertical'
		>
			<div className='font-inter text-[13px] leading-[16px] mb-[16px] text-[#3d3d3d] mt-[53px]'>
				<h2>Enter your username and password to login.</h2>
			</div>

			<Form.Item
				label='Email'
				name='email'
				rules={[
					{ required: true, message: 'Please input your email!' },
					{ type: 'email', message: 'Invalid email format!' },
				]}
			>
				<Input placeholder='Enter your email' className='h-[40px]' />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password
					placeholder='Enter your password'
					className='h-[40px]'
					iconRender={visible =>
						visible ? (
							<EyeInvisibleOutlined onClick={handleClickShowPassword} />
						) : (
							<EyeOutlined onClick={handleClickShowPassword} />
						)
					}
				/>
			</Form.Item>

			<p className='text-end font-normal text-[#46A358] text-[14px] mb-[20px] leading-[16px] cursor-pointer'>
				Forgot Password?
			</p>

			<Form.Item>
				<button className='h-[45px] w-full bg-[#46A358] font-inter font-bold text-[16px] leading-[16px] text-white rounded-[5px]'>
					Login
				</button>
			</Form.Item>

			<div className='text-[#3d3d3d] text-[13px] leading-[16px] mb-[27px] font-inter flex items-center'>
				<div className='w-full bg-[#EAEAEA] h-[1px]'></div>
				<p className='text-nowrap px-[10px] bg-white'>Or login with</p>
				<div className='w-full bg-[#EAEAEA] h-[1px]'></div>
			</div>

			<div className='end'>
				<div className='mb-[15px] w-full flex flex-col items-center'>
					<button
						type='button'
						className='h-[40px] gap-[10px] flex items-center'
						onClick={authWithGoogle}
					>
						<GoogleOutlined />
						Login with Google
					</button>

					<button
						type='button'
						className='h-[40px] gap-[10px] flex items-center'
					>
						<FacebookOutlined />
						Login with Facebook
					</button>
				</div>
			</div>
		</Form>
	)
}

export default SignIN
