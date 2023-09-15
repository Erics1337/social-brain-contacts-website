import './globals.css'
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Social Brain Contacts',
	description: 'Promototional website for the contact manager mobile app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
