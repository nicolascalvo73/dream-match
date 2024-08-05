'use client'

import { useMediaQuery } from 'react-responsive'

interface ResponsiveButtonProps {
	text: string
	onClick: () => void
	invert: boolean
	invalid: boolean
}

const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({ invalid, text, onClick, invert }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

	return (
		<button
			className={`${
				invert
					? 'text-atcgreen bg-whity hover:bg-gray-300 hover:text-whity'
					: 'bg-atcgreen text-whity hover:bg-gray-300 hover:text-atcgreen'
			} text-2xl px-6 py-2 rounded 
				${isMobile ? 'w-[85%] mb-20 absolute bottom-0 left-1/2 transform -translate-x-1/2' : 'w-auto'}
			${invalid ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
			`}
			onClick={!invalid ? onClick : undefined}
			disabled={invalid}>
			{text}
		</button>
	)
}

export default ResponsiveButton
