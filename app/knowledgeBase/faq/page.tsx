import React from "react"

const FaqSection: React.FC = () => {
	return (
		<div className="p-4 md:p-8 bg-white dark:bg-gray-800">
			<h1 className="text-xl md:text-2xl font-bold mb-6 dark:text-gray-200">
				Frequently Asked Questions
			</h1>

			<div className="space-y-6">
				<div>
					<h2 className="font-semibold dark:text-gray-200">
						1. How do I edit contact information in the app?
					</h2>
					<p className="dark:text-gray-400">
						Social Brain Contacts does not currently support editing contact
						information. Please use your phone's default contact manager to edit
						contact details.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						2. Can I use my account on multiple devices?
					</h2>
					<p className="dark:text-gray-400">
						The app is designed for single-device use per account. When you log
						in, the app syncs the contacts from your device with the database
						and removes any contacts not present on your device.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						3. What should I do if I forget my password?
					</h2>
					<p className="dark:text-gray-400">
						Go to the login screen and click on 'Forgot Password'. Follow the
						instructions sent to your email to reset your password.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						4. How secure is my data with Social Brain Contacts?
					</h2>
					<p className="dark:text-gray-400">
						Your data security is our priority. We store only contact IDs, not
						personal information like phone numbers or emails. Our systems are
						regularly updated for enhanced security.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						5. Can I create custom categories for my contacts?
					</h2>
					<p className="dark:text-gray-400">
						The app utilizes the Social Brain Theory framework with pre-defined
						group limits, hence custom categories are not available.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						6. How can I report a bug or suggest an improvement?
					</h2>
					<p className="dark:text-gray-400">
						To report bugs, please contact the developer, fill out the feedback
						survey on our website, or submit an issue on GitHub if you're
						technically inclined.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						7. Is there a feature to backup my contacts?
					</h2>
					<p className="dark:text-gray-400">
						No contact details other than IDs are stored on the database. The
						contacts that are on your device are the contacts that are shown on
						the app.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						8. Can I export my contacts from the app?
					</h2>
					<p className="dark:text-gray-400">
						Use your default contact management app to manage and export contact
						details.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						9. The app is running slowly. What should I do?
					</h2>
					<p className="dark:text-gray-400">
						Ensure your app is updated to the latest version. If the issue
						persists, try clearing the cache or reinstalling the app.
					</p>
				</div>

				<div>
					<h2 className="font-semibold dark:text-gray-200">
						10. Where can I find more help or support?
					</h2>
					<p className="dark:text-gray-400">
						If your query isn't answered here, please visit our Help Center or
						contact our support team. We also welcome feedback through our beta
						test survey.
					</p>
				</div>
			</div>
		</div>
	)
}

export default FaqSection
