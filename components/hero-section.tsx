import heroImage from 'public/eed2c02a-727d-403d-9ff0-e06e2296891a.webp'

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
	return (
		<section
			className='text-gray-600 body-font bg-cover bg-center py-5'
			style={{
				backgroundImage:
					"url('/eed2c02a-727d-403d-9ff0-e06e2296891a.webp')",
			}}>
			<div className='container mx-auto flex px-5 py-24 my-5 items-center justify-center flex-col'>
				<div className='text-center lg:w-2/3 w-full bg-gray-100 bg-opacity-90 rounded-lg p-6'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Unlock the Power of{' '}
						<span className='text-primaryhover'>
							Social Brain <strong>Contacts</strong>
						</span>
					</h1>
					<p className='mb-8 py-3leading-7 text-lg text-gray-700 font-medium tracking-normal mx-auto'>
						'Social Brain Contacts' is a revolutionary mobile app
						that applies the principles of social brain theory to
						help you manage your contacts and understand your
						relationships. Sort your contacts into different
						categories like intimate relationships, best friends,
						good friends, and more. Built with cutting-edge
						technology, the app provides a seamless and intuitive
						experience.
					</p>

					<div className='flex justify-center'>
						<a href='https://apps.apple.com/us/app/social-brain-contacts/id6452471350'>
							<button className='inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primaryhover rounded text-lg'>
								Download Now
							</button>
						</a>
						<a href='https://www.bbc.com/future/article/20191001-dunbars-number-why-we-can-only-maintain-150-relationships#:~:text=According%20to%20British%20anthropologist%20Robin,studies%20of%20non%2Dhuman%20primates.'>
							<button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
								Learn More
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
