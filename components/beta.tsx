import Image from 'next/image';
import React from 'react';

const BetaCampaignLaunch: React.FC = () => {
    return (
        <section className='relative py-16 bg-gray-100'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
                        <h1 className='text-4xl sm:text-5xl font-extrabold text-primary mb-4'>
                            Our Beta Campaign is Live!
                        </h1>
                        <p className='text-lg md:text-xl mb-6'>
                            Experience our innovative app and contribute to its development! Download the app now and share your feedback to help us improve and refine our product.
                        </p>
                        <h2 className='text-xl md:text-2xl font-bold mb-4'>
                            How You Can Help:
                        </h2>
                        <ol className='list-decimal list-inside mb-6 text-lg md:text-xl'>
                            <li>Download the app from the <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Apple App Store</a> or <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="text-primary">Android Play Store</a>.</li>
                            <li>After exploring the app, share your experience and suggestions by filling out the <a href="https://docs.google.com/forms/d/16qeAaqXAhBW8aY3aFu87n0FJdpyIZtyKxH_SMqefhDg/edit" target="_blank" rel="noopener noreferrer" className="text-primary">Feedback Form</a>.</li>
                        </ol>
                        <a 
                            href="https://docs.google.com/forms/d/16qeAaqXAhBW8aY3aFu87n0FJdpyIZtyKxH_SMqefhDg/edit" 
                            target="_blank" 
                            rel="noopener noreferrer" 
							className='inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primaryhover rounded text-lg'>
                            Provide Feedback
                        </a>
                    </div>
                    <div className='w-full md:w-1/2 mt-8 md:mt-0 flex justify-center'>
                        <div className='rounded-2xl overflow-hidden'>
                            <Image
                                width={600}
                                height={400}
                                src='https://images.pexels.com/photos/3851464/pexels-photo-3851464.jpeg'
                                alt='Beta Campaign Launch'
                                className='w-full max-w-full'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BetaCampaignLaunch;
