'use client'
import React from 'react'

import { useScrollPosition } from '@/hooks/useScrollPosition'
import Image from 'next/image'

const Header = () => {
	const scrollPosition = useScrollPosition()
	return (
		<header
			className={`sticky top-0 z-50 transition-shadow ${
				scrollPosition > 0
					? 'shadow bg-opacity-70 backdrop-blur-lg backdrop-filter'
					: 'shadow-none'
			}`}>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a href='/' className='flex title-font font-medium items-center mb-4 md:mb-0'>
					<Image
						src='/logo.png'
						alt='Navbar Icon'
						width={50}
						height={50}
					/>
					<span className='ml-3 text-xl'>Social Brain <strong>Contacts</strong></span>
				</a>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<a className='mr-5 hover:bg-gray-200 dark:hover:text-gray-700 p-2 rounded' href='/#contact'>Contact Us</a>
					<a className='mr-5 hover:bg-gray-200 p-2 dark:hover:text-gray-700 rounded' href='/knowledgeBase'>Knowledge Base</a>
				</nav>
				<a
					href='https://apps.apple.com/us/app/social-brain-contacts/id6452471350'
					target='_blank'
					rel='noopener noreferrer'>
					<button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-2 text-gray-700'>
						Install for IOS
						<Image
							src='/appStore.png'
							alt='Navbar Icon'
							width={20}
							height={20}
							className='m-2'
						/>
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-4 h-4 ml-1'
							viewBox='0 0 24 24'>
							<path d='M5 12h14M12 5l7 7-7 7'></path>
						</svg>
					</button>
				</a>
				<a
					href='https://apps.apple.com/us/app/social-brain-contacts/id6452471350'
					target='_blank'
					rel='noopener noreferrer'>
					<button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-2 text-gray-700'>
						Install for Android
						<Image
							src='/playLogo.png'
							alt='Navbar Icon'
							width={20}
							height={20}
							className='m-2'
						/>
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-4 h-4 ml-1'
							viewBox='0 0 24 24'>
							<path d='M5 12h14M12 5l7 7-7 7'></path>
						</svg>
					</button>
				</a>
			</div>
		</header>
	)
}

export default Header
