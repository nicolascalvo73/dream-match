'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaWhatsapp, FaGlobe } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
import useStore from '@/store/useStore'

const Footer = () => {
	const pathname = usePathname()
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const resetStore = useStore((state) => state.reset)

	const handleLogoClick = () => {
		resetStore()
	}

	return (
		<>
			{pathname !== '/' && (
				<div className="bg-atcgreen w-full h-16 fixed bottom-0 flex items-center justify-between p-4">
					<div className={`flex items-center ${!isMobile && 'ml-14'}`}>
						<Link href="/">
							<Image alt="ATC logo" onClick={handleLogoClick} src="/images/icon.png" width={50} height={50} />
						</Link>
						<h2 className="text-whity font-montserrat text-3xl ml-4">ATC Dream Match</h2>
					</div>

					<div className="flex items-center space-x-4">
						<Link
							href="https://github.com/nicolascalvo73/dream-match"
							target="_blank"
							className="flex items-center text-whity">
							<FaGithub size={36} className="mr-2" />
						</Link>

						{!isMobile && (
							<>
								<Link
									href="https://nicocalvo.vercel.app"
									target="_blank"
									className="flex items-center text-whity">
									<FaGlobe size={36} className="mr-2" />
								</Link>
								<Link
									href="https://wa.me/3516283916"
									target="_blank"
									className="flex items-center text-whity">
									<FaWhatsapp size={36} className="mr-14" />
								</Link>
							</>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Footer
