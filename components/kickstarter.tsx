import Image from 'next/image';
import React from 'react';

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
					<div className='w-full md:w-1/2 px-4 flex justify-center'>
						<div className='rounded-2xl overflow-hidden max-w-md'>
							<Image
								width={345}
								height={240}
								src='https://s3-prod.crainsnewyork.com/Kickstarter-GettyImages-1237459986.jpg'
								alt='Kickstarter Campaign'
								className='w-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default KickstarterCampaign;
