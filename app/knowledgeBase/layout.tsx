"use client"

import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function KnowledgeBaseLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [version, setVersion] = useState("1.0.0")
	const versions = ["1.0.0"] // Add more versions as they become available

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// @ts-ignore
		setVersion(e.target.value)
	}

	return (
		<div className="flex flex-col md:flex-row dark:bg-gray-800 dark:text-white">
			{/* Mobile Dropdown */}
			<div className="md:hidden p-4 bg-gray-100 dark:bg-gray-700">
				<Link
					href="/knowledgeBase"
					className="text-2xl font-bold mb-4 block hover:text-blue-600 dark:hover:text-blue-300"
				>
					Knowledge Base
				</Link>

				<div className="mb-4">
					<label htmlFor="version-select" className="mr-2">
						Version:
					</label>
					<select
						id="version-select"
						onChange={handleChange}
						value={version}
						className="bg-white dark:bg-gray-800"
					>
						{versions.map((v) => (
							<option key={v} value={v} className="bg-white dark:bg-gray-800">
								{v}
							</option>
						))}
					</select>
				</div>
				<ul className="space-y-2">
					{" "}
					<li>
						<Link href="/knowledgeBase/getting-started">Getting Started</Link>
					</li>
					<li>
						<Link href="/knowledgeBase/using-features">Using Features</Link>
					</li>
					<li>
						<Link href="/knowledgeBase/troubleshooting">Troubleshooting</Link>
					</li>
					<li>
						<Link href="/knowledgeBase/faq">FAQ</Link>
					</li>
					<li>
						<Link href="/knowledgeBase/dev">
							Technical Documentation for Devs
						</Link>
					</li>
				</ul>
			</div>

			{/* Sidebar for larger screens */}
			<aside className="hidden md:block bg-gray-100 dark:bg-gray-700 p-4 md:w-64">
				<Link
					href="/knowledgeBase"
					className="text-2xl font-bold mb-4 block hover:text-blue-600 dark:hover:text-blue-300"
				>
					Knowledge Base
				</Link>

				<div className="mb-4">
					<label htmlFor="version-select" className="mr-2">
						Version:
					</label>
					<select
						id="version-select"
						onChange={handleChange}
						value={version}
						className="bg-white dark:bg-gray-800"
					>
						{versions.map((v) => (
							<option key={v} value={v} className="bg-white dark:bg-gray-800">
								{v}
							</option>
						))}
					</select>
				</div>

				<ul className="space-y-2">
					<li>
						<Link href="/knowledgeBase/getting-started">Getting Started</Link>
					</li>
					<li>
						<Link href="/knowledgeBase/using-features">Using Features</Link>
					</li>
					<li>
						<Link href="/knowledgeBase/troubleshooting">Troubleshooting</Link>
					</li>
					<li>
						<Link href="/knowledgeBase/faq">FAQ</Link>
					</li>
					<li>
						<Link href="/knowledgeBase/dev">
							Technical Documentation for Devs
						</Link>
					</li>
				</ul>
			</aside>

			{/* Content Area */}
			<main className="flex-grow p-8 bg-white dark:bg-gray-900">
				{children}
			</main>
		</div>
	)
}
