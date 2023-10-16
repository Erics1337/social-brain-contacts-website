/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import InfoCard from './infoCard'

const Content = () => {
	return (
		<section className='body-font bg-gray-100 py-20 text-gray-900'>
			<div className='container px-5 mx-auto'>
				<div className='text-center mb-20'>
					<h1 className='sm:text-5xl text-4xl font-bold mb-6'>
						About Social Brain Theory
					</h1>
					<p className='leading-relaxed lg:w-2/3 mx-auto text-lg'>
						Social Brain Theory suggests that human social networks
						are organized into layers due to cognitive limitations.
						These layers correspond to specific categories, commonly
						referred to as 'Dunbar's Numbers.'
						<br />
						<br />
						The Social Brain Contacts app leverages this theory by
						enabling you to sort and manage your phone contacts
						according to these categories. By fitting your contacts
						into this framework, the app provides a structured way
						to handle your social connections, making it easier to
						manage and reducing the mental effort needed to navigate
						a complex network of relationships.
					</p>
				</div>
				<div className='flex flex-wrap -m-4'>
					<InfoCard
						number={5}
						title='Close Intimates'
						description='These are your closest friends and family, often people you can rely on in times of great personal crisis.'
					/>
					<InfoCard
						number={15}
						title='Best Friends'
						description='These are close friends that you spend time with and care deeply about.'
					/>
					<InfoCard
						number={50}
						title='Good Friends'
						description='People you would invite to a personal event like a wedding or a special birthday party.'
					/>
					<InfoCard
						number={150}
						title='Casual Friends'
						description="These are people you'd greet and spend time with socially if you ran into them, but wouldn't necessarily go out of your way to meet up with."
					/>
					<InfoCard
						number={500}
						title='Acquaintances'
						description="People you know but don't have a strong emotional connection with."
					/>
					<InfoCard
						number={1500}
						title='Recognizable Faces'
						description="People you can recognize, but don't know personally."
					/>
				</div>
				<div className='text-center mt-16'>
					<a
						href='https://www.youtube.com/watch?v=zZF6vXMGBOw'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-block bg-primary text-white py-2 px-8 rounded-lg text-lg hover:bg-primary-dark transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark'>
						Learn More
					</a>
				</div>
			</div>
		</section>
	)
}

export default Content
