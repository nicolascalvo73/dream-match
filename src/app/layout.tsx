import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Challenge ATC - Nicolas Calvo',
	description: 'Create your Dream Match',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-whity`}>{children}</body>
			<Footer />
		</html>
	)
}
