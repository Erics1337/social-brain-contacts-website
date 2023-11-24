"use client"
import React from "react"
import Link from "next/link"

const KnowledgeBase = () => {
	return (
		<div className="p-4 md:p-8">
			<h1 className="text-2xl font-bold mb-4">Welcome to the KnowledgeBase</h1>

			<p className="mb-6">
				Find helpful articles, guides, and frequently asked questions to get the
				most out of our app.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="p-4 border rounded-md hover:shadow-lg transition-shadow">
					<h2 className="text-xl font-semibold mb-2">Getting Started</h2>
					<p>
						Learn the basics of how to use the app, set up your account, and
						start managing your contacts effectively.
					</p>
					<Link
						href="/knowledgeBase/getting-started"
						className="text-blue-600 hover:underline"
					>
						Read More
					</Link>
				</div>

				<div className="p-4 border rounded-md hover:shadow-lg transition-shadow">
					<h2 className="text-xl font-semibold mb-2">Using Features</h2>
					<p>
						Discover how to make the most of the app's features including
						contact grouping, communication, and more.
					</p>
					<Link
						href="/knowledgeBase/using-features"
						className="text-blue-600 hover:underline"
					>
						Read More
					</Link>
				</div>

				<div className="p-4 border rounded-md hover:shadow-lg transition-shadow">
					<h2 className="text-xl font-semibold mb-2">Troubleshooting</h2>
					<p>
						Get help with common issues and find solutions to ensure a smooth
						experience with the app.
					</p>
					<Link
						href="/knowledgeBase/troubleshooting"
						className="text-blue-600 hover:underline"
					>
						Read More
					</Link>
				</div>

				<div className="p-4 border rounded-md hover:shadow-lg transition-shadow">
					<h2 className="text-xl font-semibold mb-2">FAQs</h2>
					<p>
						Find answers to frequently asked questions and useful tips for using
						the app.
					</p>
					<Link
						href="/knowledgeBase/faq"
						className="text-blue-600 hover:underline"
					>
						Read More
					</Link>
				</div>

				{/* Add more sections as needed */}
			</div>
		</div>
	)
}

export default KnowledgeBase
