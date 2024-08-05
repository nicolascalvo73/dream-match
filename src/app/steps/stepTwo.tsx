'use client'

import BackButton from '@/components/backButton'
import PlayerSeeker from '@/components/playerSeeker'
import ResponsiveButton from '@/components/responsiveButton'
import { StepProps } from '@/interfaces/componentsInterfaces'
import { useEffect, useState } from 'react'
import { BiPlusMedical, BiTrash } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import useStore from '@/store/useStore'
import { Player } from '@/interfaces/player'

const StepTwo: React.FC<StepProps> = ({ goToStep, prevStep }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const [showSearch, setShowSearch] = useState(false)
	const [teamName, setTeamName] = useState<string>('')
	const [teamPlayers, setTeamPlayers] = useState<Player[]>([])

	const getTeamName = useStore((state) => state.getTeamName)
	const getTeamPlayers = useStore((state) => state.getTeamPlayers)
	const team1Players = getTeamPlayers('team1')
	const state = useStore.getState()
	const [aux, setAux] = useState<boolean>(false)

	const handleRemovePlayer = (playerId: string) => {
		useStore.getState().removePlayer(playerId)
	}

	useEffect(() => {
		// console.log(state)
		const teamNameFromStore = getTeamName('team1')
		// console.log('Team name from store in StepTwo:', teamNameFromStore)
		setTeamName(teamNameFromStore)
		setTeamPlayers(getTeamPlayers('team1'))
	}, [getTeamName, getTeamPlayers, state])

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center bg-whity">
			<BackButton onClick={prevStep} invert={false} />
			{showSearch && <PlayerSeeker onClose={() => setShowSearch(false)} team={'team1'} />}
			<h1 className="text-5xl m-6 text-atcgreen font-montserrat">{teamName}</h1>
			{teamPlayers.map((player) => (
				<div key={player.player_id} className="relative">
					<input
						value={player.player_name}
						readOnly
						type="text"
						className={`text-atcgreen ${
							isMobile ? 'text-2xl' : 'text-2xl'
						} bg-whity m-2 border-b-4 border-atcgreen outline-none py-2 px-4 pr-12`}
						placeholder="Nombre del jugador"
					/>
					<BiTrash
						onClick={() => {
							setAux(!aux)
							handleRemovePlayer(player.player_id)
						}}
						size={30}
						className="absolute right-6 top-1/2 transform -translate-y-1/2 text-atcgreen cursor-pointer"
					/>
				</div>
			))}

			{teamPlayers.length < 5 && (
				<div className="relative">
					<input
						onClick={() => setShowSearch(true)}
						readOnly
						type="text"
						className={`text-whity ${
							isMobile ? 'text-2xl' : 'text-2xl'
						}  bg-whity m-6 border-b-4 border-atcgreen outline-none py-2 px-4 pr-12 placeholder-atcgreen`}
						placeholder="Elije un jugador"
					/>
					<BiPlusMedical
						onClick={() => setShowSearch(true)}
						size={30}
						className="absolute right-6 top-1/2 transform -translate-y-1/2 text-atcgreen"
					/>
				</div>
			)}
			{teamPlayers.length === 5 && (
				<ResponsiveButton
					invalid={teamName === ''}
					text={'Siguiente'}
					onClick={() => goToStep(3)}
					invert={false}
				/>
			)}
		</div>
	)
}

export default StepTwo
