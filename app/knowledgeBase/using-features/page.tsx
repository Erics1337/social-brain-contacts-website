import React from "react"

const UsingFeatures: React.FC = () => {
	return (
		<div className="p-4 md:p-8 dark:text-white">
			<h1 className="text-xl md:text-2xl font-bold mb-4">
				Using App Features
			</h1>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
					Communicate with Your Contacts
				</h2>
				<p className="mb-2 dark:text-gray-300">
					Social Brain Contacts makes it easy to stay in touch. Directly text,
					call, or email your contacts through the app with just a few taps.
				</p>
				<ul className="list-disc pl-5 dark:text-gray-300">
					<li>
						To call, simply tap the phone icon next to the contact's name.
					</li>
					<li>Use the message icon to send a quick text.</li>
					<li>Email by selecting the email address of your contact.</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
					Categorize Your Relationships
				</h2>
				<p className="dark:text-gray-300">
					Spend time thinking about how you categorize your relationships.
					Efficient categorization helps in managing your contacts better and
					makes the app more effective for you.
				</p>
				<ul className="list-disc pl-5 dark:text-gray-300">
					<li>
						Create groups for family, friends, work, etc., for easy access.
					</li>
					<li>Use tags to note important details about your contacts.</li>
				</ul>
			</section>

			{/* Add more sections as needed */}
		</div>
	)
}

export default UsingFeatures
