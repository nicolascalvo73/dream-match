'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaWhatsapp, FaGlobe } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'

const Footer = () => {
	const pathname = usePathname()
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

	return (
		<>
			{pathname !== '/' && (
				<main className="bg-atcgreen w-full h-16 fixed bottom-0 flex items-center justify-between p-4">
					{/* Logo and text */}
					<div className="flex items-center">
						<Image alt="ATC logo" src="/images/icon.png" width={50} height={50} />
						<h2 className="text-whity font-montserrat text-3xl ml-4">ATC Dream Match</h2>
					</div>

					<div className="flex items-center space-x-4">
						{!isMobile && (
							<>
								<span className="text-whity font-montserrat text-xs ml-4">Crafted with 🤍 Nico</span>
								<Link
									href="https://github.com/your-profile"
									target="_blank"
									className="flex items-center text-whity">
									<FaGithub size={36} className="mr-2" />
								</Link>

								<Link
									href="https://nicocalvo.vercel.app"
									target="_blank"
									className="flex items-center text-whity">
									<FaGlobe size={36} className="mr-2" />
								</Link>
							</>
						)}
						<Link href="https://wa.me/3516283916" target="_blank" className="flex items-center text-whity">
							<FaWhatsapp size={36} className="mr-2" />
						</Link>
					</div>
				</main>
			)}
		</>
	)
}

export default Footer
