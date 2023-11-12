import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface FeatureCardProps {
	icon: React.ReactNode
	title: string
	description: string
	linkURL: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon,
	title,
	description,
	linkURL,
}) => (
	<div className='flex flex-col justify-between border border-gray-300 p-4 rounded-lg h-full'>
		<div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5 flex-shrink-0'>
			{icon}
		</div>
		<h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
			{title}
		</h2>
		<p className='leading-relaxed text-base flex-grow'>{description}</p>
		{/* <div>
            <a
                href={linkURL}
                className='mt-3 text-primary inline-flex items-center'>
                Learn More
                <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'>
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
            </a>
        </div> */}
	</div>
)

const Features = () => {
	return (
		<section className='text-gray-600 body-font bg-gray-50 py-20'>
			<div className='container px-5 py-12 mx-auto'>
				<div className='text-center mb-20'>
					<h1 className='title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900'>
						Top Features of Social Brain Contacts
					</h1>
					{/* Image Container */}
					<div className='flex mt-6 justify-center'>
						<div className='w-full md:w-1/3 pr-4 mb-6 lg:mb-0'>
							<Image
								src='/letsgo.png'
								alt='Social Brain Theory'
								className='rounded-lg object-cover object-center w-full'
								width={500}
								height={400}
							/>
						</div>
					</div>
					<p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
						Discover how Social Brain Contacts can enhance your
						connection management experience.
					</p>
					<div className='flex mt-6 justify-center'>
						<div className='w-16 h-1 rounded-full bg-primary inline-flex'></div>
					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Feature 1 */}
					<FeatureCard
						icon={
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-10 h-10'
								viewBox='0 0 24 24'>
								<path d='M8 5l4-4l4 4H8z' />
								<path d='M16 19l-4 4l-4-4h8z' />
								<line x1='12' y1='9' x2='12' y2='15' />
							</svg>
						}
						title='Structured Contact Sorting'
						description='Sort your contacts into different categories like intimate relationships, friends, and more, based on social brain theory.'
						linkURL='#'
					/>
					{/* Feature 2 */}
					<FeatureCard
						icon={
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-10 h-10'
								viewBox='0 0 24 24'>
								<path d='M3 12c3 0 3-4 6-4s3 4 6 4s3-4 6-4' />
								<path d='M3 12c0 3 4 3 4 6s-4 3-4 6' />
								<path d='M21 12c0-3-4-3-4-6s4-3 4-6' />
							</svg>
						}
						title='Seamless User Experience'
						description='Enjoy a user-friendly interface designed to provide
            a smooth and intuitive experience in managing your
            social connections.'
						linkURL='#'
					/>
					{/* Feature 3 */}
					<FeatureCard
						icon={
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-10 h-10'
								viewBox='0 0 24 24'>
								<circle cx='6' cy='6' r='3'></circle>
								<circle cx='18' cy='18' r='3'></circle>
								<path d='M6 9c3 1 4 3 6 3s3-2 6-3'></path>
								<path d='M6 15c3-1 4-3 6-3s3 2 6 3'></path>
							</svg>
						}
						title='Enhance Social Understanding'
						description='Gain deeper insights into your relationships and
            social dynamics through the integration of social
            brain theory.'
						linkURL='#'
					/>
				</div>
				<div className='text-center mt-16'>
						<Link href='/knowledgeBase#using-features' className='hover:bg-primaryhover inline-block bg-primary text-white py-2 px-8 rounded-lg text-lg hover:bg-primary-dark transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark'>
							Explore More Features
						</Link>
				</div>
			</div>
		</section>
	)
}

export default Features
