import Image from 'next/image'
import React from 'react'
import { FaUserPlus } from 'react-icons/fa'

interface PlayerThumbnailProps {
	imageUrl?: string
	playerName?: string
}

const PlayerThumbnail: React.FC<PlayerThumbnailProps> = ({ imageUrl, playerName }) => {
	return (
		<div className="bg-whity relative w-[75px] h-[75px] border border-gray-300 rounded-full overflow-hidden flex items-center justify-center transition-colors duration-300 hover:bg-atcgreen">
			{!imageUrl ? (
				<FaUserPlus className="text-5xl text-atcgreen transition-colors duration-300 hover:text-whity" />
			) : (
				<div className="relative w-full h-full">
					<Image src={imageUrl} alt="Player" layout="fill" className="object-cover" />
					{playerName && (
						<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 tooltip">
							{playerName}
						</span>
					)}
				</div>
			)}
		</div>
	)
}

export default PlayerThumbnail
