import React from "react"

const GettingStarted: React.FC = () => {
	return (
		<div className="p-4 md:p-8">
			<h1 className="text-xl md:text-2xl font-bold mb-4">
				Getting Started with Social Brain Contacts
			</h1>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">
					Step 1: Creating Your Account
				</h2>
				<ul className="list-disc pl-5 dark:text-gray-300">
					<li>Download the App from your app store.</li>
					<li>Open the app and select 'Sign Up'. Enter your details.</li>
					<li>
						Your email will be used to verify your account in the case you
						forget your password.
					</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">
					Step 2: Navigating the Dashboard
				</h2>
				<ul className="list-disc pl-5 dark:text-gray-300">
					<li>View your grouped contacts from the main screen.</li>
					<li>
						Open the side menu and click the "Sort Contacts" button to navigate
						to the sorting screen.
					</li>
					<li>
						Use the tabs on the bottom of the sort screen to either show all
						contacts or filter by contacts that have yet to be assigned a group.
					</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">Step 3: Sorting Contacts</h2>
				<ul className="list-disc pl-5 dark:text-gray-300">
					<li>
						To assign contact to a group, long press on the contact card to open
						a menu with the group options.{" "}
					</li>
					<li>
						Select a group option and the contact will be assigned to the group.
					</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">
					Step 4: Editing and Managing Contacts
				</h2>
				<ul className="list-disc pl-5 dark:text-gray-300">
					<li>
						You can long press a contact card from anywhere in the app to bring
						up the groups menu.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="text-lg font-semibold mb-2">Need More Help?</h2>
				<p className=" dark:text-gray-300">
					Check out our FAQs section or contact our support team for more
					assistance.
				</p>
			</section>
		</div>
	)
}

export default GettingStarted
