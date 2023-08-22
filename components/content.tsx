/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import InfoCard from './infoCard'

const Content = () => {
	return (
		<section className='text-gray-600 body-font bg-gray-50'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
						About Social Brain Theory
					</h1>
					<p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
          Social Brain Theory suggests that human social networks are organized into layers because of cognitive limitations. These layers correspond to specific categories, commonly referred to as 'Dunbar's Numbers.'
<br/><br/>
The Social Brain Contacts app leverages this theory by enabling you to sort and manage your phone contacts according to these categories. By fitting your contacts into this framework, the app provides a structured way to handle your social connections, making it easier to manage and reducing the mental effort needed to navigate a complex network of relationships.
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
						description="People you can recognize, but don't know personally.
            "
					/>
				</div>
				<a href='https://www.youtube.com/watch?v=zZF6vXMGBOw' target="_blank" rel="noopener noreferrer">
					<button className='flex mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primaryhover rounded text-lg'>
						Learn More
					</button>
				</a>
			</div>
		</section>
	)
}

export default Content
