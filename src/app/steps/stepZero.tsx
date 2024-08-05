'use client'

import ResponsiveButton from '@/components/responsiveButton'
import { StepProps } from '@/interfaces/componentsInterfaces'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import useStore from '@/store/useStore' // Asegúrate de que la ruta sea correcta
import { Team } from '@/interfaces/team' // Importa la interfaz Team
const StepZero: React.FC<StepProps> = ({ goToStep }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const addTeam = useStore((state) => state.addTeam)

	useEffect(() => {
		if (addTeam) {
			const team1 = {
				id: 'team1',
				name: '',
				players: [],
			}

			const team2 = {
				id: 'team2',
				name: '',
				players: [],
			}

			// Agrega los equipos al store
			addTeam(team1)
			addTeam(team2)
		}
	}, [addTeam])

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl mt-6 mb-2 text-atcgreen font-montserrat">Que bueno tenerte aquí!</h1>
			<div
				className={` ${
					isMobile ? 'w-[85%]' : 'w-[50%]'
				} py-2 px-4 bg-gray-400 my-6 rounded-2xl inline-flex items-center justify-center `}>
				<p className={` text-whity font-montserrat ${isMobile ? 'text-2xl' : 'text-lg'} `}>
					¿Alguna vez soñaste con ver un partido de fútbol en donde se enfrenten tus jugadores favoritos?
					Imaginate poder armar dos equipos de 5 jugadores cada uno, en donde no tengas ninguna limitación...
					posición, presupuesto, contrato, club, edad... tu mente es tu límite.
				</p>
			</div>
			<ResponsiveButton text={'Empecemos'} onClick={() => goToStep(1)} invert={false} invalid={false} />
		</div>
	)
}

export default StepZero
