import React from 'react'

interface InfoCardProps {
	number: number
	title: string
	description: string
}

const InfoCard: React.FC<InfoCardProps> = ({ number, title, description }) => {
	return (
		<div className='xl:w-1/3 md:w-1/2 p-4'>
			<div className='border border-gray-200 p-6 rounded-lg'>
				<div className='inline-flex items-center justify-center mb-4'>
					<div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary'>
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-6 h-6'
							viewBox='0 0 24 24'>
							<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
							<circle cx='12' cy='7' r='4'></circle>
						</svg>
					</div>
					<h1 className='ml-2 font-bold text-xl'>{number}</h1>
				</div>
				<h2 className='text-lg font-medium title-font mb-2'>
					{title}
				</h2>
				<p className='leading-relaxed text-base'>{description}</p>
			</div>
		</div>
	)
}

export default InfoCard
