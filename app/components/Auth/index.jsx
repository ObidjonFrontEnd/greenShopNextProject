"use client"
import React, { useState } from 'react'
import { Modal, Tabs, Button } from 'antd'
import { useTheme } from '@/app/Context/Context'
import SignIN from './login'
import SignUp from './registr'


const Auth = () => {

	const { isOpenAuth, setIsOpenAuth } = useTheme();
	const [activeTab, setActiveTab] = useState('1')

	const handleTabChange = key => {
		setActiveTab(key)
	}

	const tabItems = [
		{
			label: (
				<span
					style={{
						fontWeight: 500,
						fontSize: '20px',
						lineHeight: '16px',
						color: activeTab === '1' ? '#46A358' : '#3d3d3d',
					}}
				>
					Login
				</span>
			),
			key: '1',
			children: <SignIN />,
		},
		{
			label: (
				<span  style={{
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '16px',
          color: activeTab === '2' ? '#46A358' : '#3d3d3d',
        }}>Register</span>
			),
			key: '2',
			children: <SignUp />,
		},
	]
	return (
		<div className='px-[20px]'>
			<Modal
				open={isOpenAuth}
				onCancel={() => setIsOpenAuth(false)}
				footer={null}
     
			>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Tabs
						activeKey={activeTab}
						onChange={handleTabChange}
						items={tabItems}
						centered
            rootClassName="custom-tabs"
					/>
				</div>
			</Modal>
		</div>
	)
}

export default Auth