const HeroSection = () => {
	return (
		<section
			className='text-gray-600 body-font bg-cover bg-center'
			style={{
				backgroundImage:
					"url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
			}}>
			<div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
				<div className='text-center lg:w-2/3 w-full bg-gray-100 bg-opacity-90 p-6 rounded-lg'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Unlock the Power of Social Brain Contacts
					</h1>
					<p className='mb-8 leading-7 text-lg text-gray-700 font-medium tracking-normal mx-auto'>
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
						<button className='inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primaryhover rounded text-lg'>
							Download Now
						</button>
						<button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
