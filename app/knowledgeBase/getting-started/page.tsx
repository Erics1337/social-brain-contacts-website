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
				<ul className="list-disc pl-5">
					<li>Download the App from your app store.</li>
					<li>Open the app and select 'Sign Up'. Enter your details.</li>
					<li>Check your email for a verification link and click on it.</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">
					Step 2: Navigating the Dashboard
				</h2>
				<ul className="list-disc pl-5">
					<li>
						View your recent contacts and quick actions on the Home Screen.
					</li>
					<li>Use the bottom menu to navigate through the app.</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">
					Step 3: Adding a New Contact
				</h2>
				<ul className="list-disc pl-5">
					<li>Tap on 'Add Contact' and fill in the necessary details.</li>
					<li>Add custom fields for unique information.</li>
					<li>Save the contact once all details are entered.</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">
					Step 4: Editing and Managing Contacts
				</h2>
				<ul className="list-disc pl-5">
					<li>Edit or delete contacts easily from your contact list.</li>
					<li>Organize contacts using groups or tags.</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">Unique Features</h2>
				<ul className="list-disc pl-5">
					<li>Utilize the intelligent search feature for quick access.</li>
					<li>Your contacts are synchronized in real-time across devices.</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-2">
					Best Practices for Contact Management
				</h2>
				<ul className="list-disc pl-5">
					<li>Regularly update and back up your contacts.</li>
					<li>Review your privacy settings periodically.</li>
				</ul>
			</section>

			<section>
				<h2 className="text-lg font-semibold mb-2">Need More Help?</h2>
				<p>
					Check out our FAQs section or contact our support team for more
					assistance.
				</p>
			</section>
		</div>
	)
}

export default GettingStarted
