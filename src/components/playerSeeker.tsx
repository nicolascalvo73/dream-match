'use client'

import { Player } from '@/interfaces/player'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { IoMdFootball } from 'react-icons/io'
import { TfiReload } from 'react-icons/tfi'
import { useMediaQuery } from 'react-responsive'
import useStore from '@/store/useStore'
interface PlayerSeekerProps {
	onClose: () => void
	team: string
}

const PlayerSeeker: React.FC<PlayerSeekerProps> = ({ onClose, team }) => {
	const apiKey = process.env.NEXT_PUBLIC_API_KEY_APIFOOTBALL
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const [spinner, setSpinner] = useState(false)
	const [input, setInput] = useState(true)
	const [list, setList] = useState(false)
	const [notFound, setNotFound] = useState(false)
	const [repeated, setRepeated] = useState(false)
	const [player, setPlayer] = useState('')
	const [players, setPlayers] = useState<Player[]>([])

	const getPlayer = async () => {
		setInput(false)
		setSpinner(true)
		try {
			const response = await axios.get(
				`https://apiv3.apifootball.com/?action=get_players&player_name=${player}&APIkey=${apiKey}`
			)
			const players = response.data
			if (Array.isArray(players)) {
				const sortedPlayers = players.sort((a, b) => b.player_goals - a.player_goals)
				const topPlayers = sortedPlayers.slice(0, 10)
				setPlayers(topPlayers)
				setList(true)
				// console.log(topPlayers)
			} else {
				setNotFound(true)
			}
		} catch (error) {
			setNotFound(true)
			// console.log(error)
		} finally {
			setSpinner(false)
		}
	}
	const addPlayer = useStore((state) => state.addPlayerToTeam)
	const canAddPlayer = useStore((state) => state.canAddPlayer)
	const selectPlayer = async (player: Player) => {
		const isPlayerRepeated = !(await canAddPlayer(player.player_id))
		if (isPlayerRepeated) {
			setList(false)
			setRepeated(true)
			return
		}

		addPlayer(player, team)
		setList(false)
		onClose()
	}

	const handleOuterClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	return (
		<div
			onClick={() => {
				onClose()
			}}
			className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
			{input && (
				<div
					onClick={handleOuterClick}
					className={`bg-white p-6 rounded-lg shadow-lg w-full flex items-center ${
						isMobile ? 'max-w-sm' : 'max-w-lg'
					}`}>
					<input
						onChange={(e) => setPlayer(e.target.value)}
						type="text"
						value={player}
						className={`text-atcgreen text-2xl bg-whity border-b-4 border-atcgreen outline-none py-2 px-4 flex-grow ${
							isMobile ? 'w-full' : ''
						}`}
						placeholder="Nombre del jugador"
					/>
					<button onClick={getPlayer} className="text-atcgreen text-2xl hover:text-darkgreen ml-4">
						<FaArrowRight />
					</button>
				</div>
			)}
			{spinner && (
				<div className="flex flex-col items-center justify-center">
					<IoMdFootball className="text-whity text-9xl animate-bounce" />
				</div>
			)}
			{list && (
				<div
					onClick={handleOuterClick}
					className={`bg-atcgreen  p-6 rounded-2xl shadow-lg w-full max-h-[500px] overflow-y-auto flex flex-col items-center ${
						isMobile ? 'max-w-sm' : 'max-w-lg'
					}`}>
					<h2 className="text-lg m-6 text-whity font-montserrat">Haz click en el jugador que elijas</h2>
					<div
						className="overflow-y-auto w-full scrollbar-hide"
						style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
						{players.map((player) => (
							<div
								onClick={() => selectPlayer(player)}
								key={player.player_id}
								className=" cursor-pointer justify-between flex items-center bg-whity m-2 rounded-xl w-[98%] h-[75px]">
								{player.player_image ? (
									<Image
										src={player.player_image}
										alt="foto del jugador"
										width={75}
										height={75}
										className="object-cover rounded-xl"
									/>
								) : (
									<FaCircleUser className="text-atcgreen text-5xl m-4" />
								)}
								<h2 className="text-2xl m-2 text-atcgreen font-montserrat">{player.player_name}</h2>
								<div className="bg-atcgreen w-16 h-16 m-2 rounded-xl flex items-center justify-center">
									<h2 className="text-4xl text-whity font-montserrat font-bold">{player.player_number}</h2>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			{repeated && (
				<div
					onClick={handleOuterClick}
					className={`bg-white p-6 rounded-lg shadow-lg w-full flex items-center ${
						isMobile ? 'max-w-sm' : 'max-w-lg'
					}`}>
					<h2
						className={`text-atcgreen text-md bg-whity border-b-4 border-atcgreen outline-none py-2 px-4 flex-grow ${
							isMobile ? 'w-full' : ''
						}`}>
						Este jugador ya esta en un equipo
					</h2>

					<button
						onClick={() => {
							setList(true)
							setRepeated(false)
							setInput(false)
							setPlayer('')
						}}
						className="text-atcgreen text-2xl hover:text-darkgreen ml-4">
						<TfiReload className="font-bold" />
					</button>
				</div>
			)}
			{notFound && (
				<div
					onClick={handleOuterClick}
					className={`bg-white p-6 rounded-lg shadow-lg w-full flex items-center ${
						isMobile ? 'max-w-sm' : 'max-w-lg'
					}`}>
					<h2
						className={`text-atcgreen text-md bg-whity border-b-4 border-atcgreen outline-none py-2 px-4 flex-grow ${
							isMobile ? 'w-full' : ''
						}`}>
						No encontramos al jugador intentalo de nuevo
					</h2>

					<button
						onClick={() => {
							setList(false)
							setNotFound(false)
							setInput(true)
							setPlayer('')
						}}
						className="text-atcgreen text-2xl hover:text-darkgreen ml-4">
						<TfiReload className="font-bold" />
					</button>
				</div>
			)}
		</div>
	)
}

export default PlayerSeeker
