import React from "react"

const TechnicalDocumentation: React.FC = () => {
	return (
		<div className="p-4 md:p-8 bg-white dark:bg-gray-800">
			<h1 className="text-xl md:text-2xl font-bold mb-6 dark:text-gray-200">
				Technical Documentation
			</h1>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					App Architecture
				</h2>
				<p className="dark:text-gray-400">
					'Social Brain Contacts' is a React Native Expo app that organizes
					phone contacts into bins based on Social Brain Theory. The app is
					structured to facilitate easy navigation and efficient management of
					social relationships.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Technologies Used
				</h2>
				<p className="dark:text-gray-400">
					The app is built with TypeScript for type safety and easier debugging.
					It uses Nativewind for Tailwind-like styling, Zustand for state
					management, and the Firebase JS SDK v9 for backend email
					authentication.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Key Features and Libraries
				</h2>
				<p className="dark:text-gray-400">
					Key features include call, text, and email linking with the Expo
					linking library. The app leverages custom and reusable components,
					Formik with yup for form handling, React Native Elements for UI
					elements, and various other libraries for enhanced UX.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Installation and Setup
				</h2>
				<p className="dark:text-gray-400">
					Installation involves cloning the repository, setting up environment
					variables in a '.env' file, and starting the project using commands
					like 'yarn ios', 'yarn android', or 'npx expo start'.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Design Prototype
				</h2>
				<p className="dark:text-gray-400">
					The design prototype of the app can be viewed on Figma. This includes
					detailed design elements and layouts for various screens in the app.
				</p>
				<a
					href="https://www.figma.com/file/UZaw6Vam45Rs8bSPh6yWyU/Social-Brain-Contacts-App-Prototype-Design?type=whiteboard&node-id=0%3A1&t=Z7ppYn1gaq09U1dT-1"
					className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
				>
					View Design Prototype
				</a>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Contributing to the Codebase
				</h2>
				<p className="dark:text-gray-400">
					Developers interested in contributing to the app can find more
					information and guidelines in the GitHub repository.
				</p>
			</section>

			<section>
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Additional Resources
				</h2>
				<p className="dark:text-gray-400">
					For more in-depth technical documentation, visit the Social Brain
					Contacts site on {' '}
					<a
						href="https://socialbrain-contacts.spreading.io"
						className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
					>
						spreading.io
					</a>
					.
				</p>
			</section>
		</div>
	)
}

export default TechnicalDocumentation
