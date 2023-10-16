import Image from 'next/image'
import React from 'react'

const OpenSource = () => {
	return (
		<section className='bg-white text-gray-600 body-font'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
					<div
						className='relative w-full'
						style={{ paddingBottom: '100%' }}>
						<Image
							className='object-cover object-center rounded'
							layout='fill'
							alt='open source'
							src='https://github.githubassets.com/images/modules/open_graph/github-octocat.png'
						/>
					</div>
				</div>
				<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Contribute to Social Brain Contacts
					</h1>
					<p className='mb-8 leading-relaxed text-lg'>
						Join us in building an amazing app to manage social
						connections based on social brain theory. Your
						contributions, big or small, can make a huge difference!
					</p>
					<div className='flex justify-center'>
						<a
							href='https://github.com/Erics1337/social-brain-contacts'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primaryhover rounded text-lg'>
							Contribute on GitHub
						</a>
						<a
							href='https://github.com/Erics1337/social-brain-contacts/issues'
							target='_blank'
							rel='noopener noreferrer'
							className='ml-4 inline-flex text-gray-600 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
							Report Issues
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OpenSource
