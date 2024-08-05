import { FaArrowLeft } from 'react-icons/fa'

interface BackButtonProps {
	onClick: () => void
	invert: boolean
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, invert }) => {
	return (
		<button
			className={`${
				invert ? 'text-atcgreen bg-whity' : 'bg-atcgreen text-whity  hover:text-atcgreen'
			} text-2xl hover:bg-gray-100 hover:text-atcgreen px-6 py-2 rounded absolute top-4 left-4
			`}
			onClick={onClick}>
			<FaArrowLeft />
		</button>
	)
}

export default BackButton
