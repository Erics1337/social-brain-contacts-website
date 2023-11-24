import React from "react"

const Troubleshooting: React.FC = () => {
	return (
		<div className="p-4 md:p-8">
			<h1 className="text-xl md:text-2xl font-bold mb-6 dark:text-gray-200">
				Troubleshooting Guide
			</h1>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Reporting Bugs
				</h2>
				<p className="mb-2 dark:text-gray-300">
					Encountered a glitch? Help us improve by reporting bugs through the
					app's feedback section or our support email.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Suggesting Improvements
				</h2>
				<p className="mb-2 dark:text-gray-300">
					Have ideas for new features or enhancements? We'd love to hear them!
					Use the in-app suggestion box or contact us directly.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Common Issues on Multi-Platform Apps
				</h2>
				<ul className="list-disc pl-5 dark:text-gray-300">
					<li>
						Syncing Problems: Ensure you're logged in with the same account
						across all devices.
					</li>
					<li>
						App Crashes: Try clearing the app's cache or reinstalling the app.
					</li>
					<li>
						Performance Issues: Make sure your device’s software is up-to-date
						and that you're using the latest version of the app.
					</li>
				</ul>
			</section>

			{/* Additional troubleshooting tips can be added here */}

			<section>
				<h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
					Need More Help?
				</h2>
				<p className="dark:text-gray-300">
					If your issue isn't listed here, don't hesitate to reach out to our
					customer support team for assistance.
				</p>
			</section>
		</div>
	)
}

export default Troubleshooting
