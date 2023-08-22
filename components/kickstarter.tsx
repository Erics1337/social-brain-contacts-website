import React from 'react'

const KickstarterCampaign: React.FC = () => {
	return (
		<section className='bg-gray-100 py-12'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-wrap -mx-4'>
					<div className='w-full md:w-1/2 px-4 flex flex-col justify-center'>
						<h2 className='text-2xl font-bold mb-4 text-center md:text-left'>
							Support Our Kickstarter Campaign!
						</h2>
						<p className='text-gray-700 mb-6 text-center md:text-left'>
							We're excited to announce our latest project, and we
							need your support to bring it to life. By backing
							our Kickstarter campaign, you can become a part of
							something innovative and exclusive.
						</p>
						<div className='flex justify-center md:justify-start'>
							<a
								href='https://www.kickstarter.com/your-campaign-link'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-primary text-white py-2 px-6 rounded hover:bg-primaryhover'>
								Back Us on Kickstarter
							</a>
						</div>
					</div>
					<div className='w-full md:w-1/2 px-4'>
						<div className='relative' style={{ paddingBottom: '65%' }}>
							<svg
								className='absolute top-0 left-0 w-full h-full'
								viewBox='0 0 3000 1954'
								xmlns='http://www.w3.org/2000/svg'>
								<defs>
									<clipPath id='wave-clip'>
										<path d='M0,0 L3000,0 L3000,1800 C2500,1850 500,1850 0,1800 L0,0' />
									</clipPath>
								</defs>
								<image
									clipPath='url(#wave-clip)'
									href='https://s3-prod.crainsnewyork.com/Kickstarter-GettyImages-1237459986.jpg'
									width='3000'
									height='1954'
									preserveAspectRatio='xMidYMid slice'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default KickstarterCampaign
