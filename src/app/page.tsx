'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
	const [showImage, setShowImage] = useState(false)
	const [showText, setShowText] = useState(false)
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const imageTimer = setTimeout(() => setShowImage(true), 300)
		const textTimer = setTimeout(() => setShowText(true), 1300)
		const helperTimer = setTimeout(() => setShowButton(true), 1500)
		return () => {
			clearTimeout(imageTimer)
			clearTimeout(textTimer)
			clearTimeout(helperTimer)
		}
	}, [])

	return (
		<main className="flex flex-col items-center justify-center w-full min-h-screen bg-whity text-atcgreen font-montserrat">
			<div className="flex-col items-center justify-center">
				<div
					className={`transition-opacity duration-1000 ease-in ${
						showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
					}`}>
					<Link href={'/createTeams'}>
						<Image alt="ATC logo" src="/images/LOGO_SIN_CLAIM.svg" width={350} height={350} />
					</Link>
				</div>
				<h1
					className={`text-3xl mt-6 mb-2 ml-2 transition-opacity duration-1000 ease-in ${
						showText ? 'opacity-100' : 'opacity-0'
					}`}>
					El partido de tus sueños.
				</h1>
				<p
					className={`text-xl ml-2 text-gray-400 transition-opacity duration-1000 ease-in ${
						showButton ? 'opacity-100' : 'opacity-0'
					}`}>
					Haz click en la imagen para empezar.
				</p>
			</div>
		</main>
	)
}
