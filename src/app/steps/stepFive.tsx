'use client'

import BackButton from '@/components/backButton'
import PlayerSeeker from '@/components/playerSeeker'
import ResponsiveButton from '@/components/responsiveButton'
import { StepProps } from '@/interfaces/componentsInterfaces'
import { useEffect, useState } from 'react'
import { BiEdit, BiPlusMedical, BiTrash } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import useStore from '@/store/useStore'
import { Player } from '@/interfaces/player'

const StepFive: React.FC<StepProps> = ({ goToStep, prevStep }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const [showSearch, setShowSearch] = useState(false)
	const [team1Name, setTeam1Name] = useState<string>('')
	const [team2Name, setTeam2Name] = useState<string>('')
	const [team1Players, setTeam1Players] = useState<Player[]>([])
	const [team2Players, setTeam2Players] = useState<Player[]>([])

	const getTeamName = useStore((state) => state.getTeamName)
	const getTeamPlayers = useStore((state) => state.getTeamPlayers)
	// const team1Players = getTeamPlayers('team1')
	const state = useStore.getState()
	const [aux, setAux] = useState<boolean>(false)

	useEffect(() => {
		// console.log(state)
		const team1NameFromStore = getTeamName('team1')
		const team2NameFromStore = getTeamName('team2')
		// console.log('Team name from store in StepTwo:', teamNameFromStore)
		setTeam1Name(team1NameFromStore)
		setTeam2Name(team2NameFromStore)
		setTeam1Players(getTeamPlayers('team1'))
		setTeam2Players(getTeamPlayers('team2'))
	}, [getTeamName, getTeamPlayers, state])

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center bg-atcgreen">
			<div className="overflow-y-auto flex flex-col md:flex-row md:space-x-8 w-full max-w-4xl">
				<div className="flex-1 p-4">
					<div className="flex items-center justify-between ">
						<h1 className={` ${isMobile ? 'text-3xl' : 'text-5xl'} text-whity font-montserrat`}>
							{team1Name}
						</h1>
						{isMobile && (
							<BiEdit className="ml-2 text-whity cursor-pointer text-4xl" onClick={() => goToStep(1)} />
						)}
					</div>
					{team1Players.map((player) => (
						<div key={player.player_id} className="relative">
							<input
								value={player.player_name}
								readOnly
								type="text"
								className={`text-whity ${
									isMobile ? 'text-xl' : 'text-2xl'
								} bg-atcgreen m-2 border-b-4 border-whity outline-none py-2 px-4 pr-12`}
								placeholder="Nombre del jugador"
							/>
						</div>
					))}
					{!isMobile && (
						<ResponsiveButton invalid={false} text={'Editar'} onClick={() => goToStep(1)} invert={true} />
					)}
				</div>
				<div className={`flex-1 p-4 ${isMobile && 'mb-14'} `}>
					<div className="flex items-center justify-between ">
						<h1 className={` ${isMobile ? 'text-3xl' : 'text-5xl'} text-whity font-montserrat`}>
							{team2Name}
						</h1>
						{isMobile && (
							<BiEdit className="ml-2 text-whity cursor-pointer text-4xl" onClick={() => goToStep(3)} />
						)}
					</div>
					{team2Players.map((player) => (
						<div key={player.player_id} className="relative  ">
							<input
								value={player.player_name}
								readOnly
								type="text"
								className={`text-whity ${
									isMobile ? 'text-xl' : 'text-2xl'
								} bg-atcgreen m-2 border-b-4 border-whity outline-none py-2 px-4 pr-12`}
								placeholder="Nombre del jugador"
							/>
						</div>
					))}
					{!isMobile && (
						<ResponsiveButton invalid={false} text={'Editar'} onClick={() => goToStep(3)} invert={true} />
					)}
				</div>
			</div>
		</div>
	)
}

export default StepFive
