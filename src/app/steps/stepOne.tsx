'use client'

import BackButton from '@/components/backButton'
import ResponsiveButton from '@/components/responsiveButton'
import { StepProps } from '@/interfaces/componentsInterfaces'
import { ChangeEvent, useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
import useStore from '@/store/useStore'

const StepOne: React.FC<StepProps> = ({ goToStep, prevStep }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const updateTeamName = useStore((state) => state.updateTeamName)
	const getTeamName = useStore((state) => state.getTeamName)
	const [teamName, setTeamName] = useState<string>('')

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newName = event.target.value
		setTeamName(newName)
		// console.log('Updated team name locally:', newName)
	}

	const handleNextStep = () => {
		updateTeamName('team1', teamName)
		// console.log('Updated team name in store:', teamName)
		goToStep(2)
	}

	useEffect(() => {
		const name = getTeamName('team1')
		setTeamName(name)
	}, [getTeamName])

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center bg-atcgreen">
			<BackButton onClick={prevStep} invert={true} />
			<div className="relative">
				<input
					value={teamName}
					onChange={handleNameChange}
					type="text"
					className={`text-whity ${
						isMobile ? 'text-2xl' : 'text-3xl'
					}  bg-atcgreen m-6 border-b-4 border-white outline-none py-2 px-4 pr-12 placeholder-whity`}
					placeholder="Nombre del equipo"
				/>
				<FaPen size={30} className="absolute right-6 top-1/2 transform -translate-y-1/2 text-whity" />
			</div>
			<ResponsiveButton invalid={teamName === ''} text={'Siguiente'} onClick={handleNextStep} invert={true} />
		</div>
	)
}

export default StepOne
