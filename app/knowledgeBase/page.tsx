import React from 'react'

const KnowledgeBase: React.FC = () => {
	return (
		<div className='flex'>
			{/* Navigation Sidebar */}
			<aside className='w-64 bg-gray-100 p-4'>
				<h2 className='text-2xl font-bold mb-4'>Knowledge Base</h2>
				<ul>
					<li>
						<a href='#getting-started' className='text-primary'>
							Getting Started
						</a>
					</li>
					<li>
						<a href='#using-features' className='text-primary'>
							Using Features
						</a>
					</li>
					<li>
						<a href='#troubleshooting' className='text-primary'>
							Troubleshooting
						</a>
					</li>
					<li>
						<a href='#faq' className='text-primary'>
							FAQ
						</a>
					</li>
				</ul>
			</aside>

			{/* Content Area */}
			<main className='flex-grow p-8'>
				<section id='getting-started'>
					<h3 className='text-xl font-semibold mb-2'>
						Getting Started
					</h3>
					<p>Instructions on how to get started with the app...</p>
				</section>

				<section id='using-features'>
					<h3 className='text-xl font-semibold mb-2'>
						Using Features
					</h3>
					<p>
						Guide to using the different features within the app...
					</p>
				</section>

				<section id='troubleshooting'>
					<h3 className='text-xl font-semibold mb-2'>
						Troubleshooting
					</h3>
					<p>Steps to resolve common issues and problems...</p>
				</section>

				<section id='faq'>
					<h3 className='text-xl font-semibold mb-2'>
						Frequently Asked Questions
					</h3>
					<p>
						Answers to frequently asked questions about the app...
					</p>
				</section>
			</main>
		</div>
	)
}

export default KnowledgeBase
