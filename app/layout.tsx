import "./globals.css"
import "react-toastify/dist/ReactToastify.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/react';

import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Social Brain Contacts",
	description: "Promotional website for the contact manager mobile app",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Analytics />
			<body className={`${inter.className} flex flex-col min-h-screen`}>
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
