import { create } from 'zustand'
import { Team } from '@/interfaces/team'
import { Player } from '@/interfaces/player'

interface TeamState {
	teams: Team[]
	reset: () => void
	addTeam: (team: Team) => void
	addPlayerToTeam: (player: Player, teamId: string) => void
	removePlayer: (playerId: string) => void
	canAddPlayer: (playerId: string) => boolean
	canAddTeam: () => boolean
	updateTeamName: (teamId: string, name: string) => void
	getTeamName: (teamId: string) => string
	getTeamPlayers: (teamId: string) => Player[]
}

const useStore = create<TeamState>((set, get) => ({
	teams: [
		{ id: 'team1', name: '', players: [] },
		{ id: 'team2', name: '', players: [] },
	],
	reset: () =>
		set({
			teams: [
				{ id: 'team1', name: '', players: [] },
				{ id: 'team2', name: '', players: [] },
			],
		}),
	addTeam: (team) => {
		if (get().teams.length < 2) {
			set((state) => ({ teams: [...state.teams, team] }))
		} else {
			// console.log('No se pueden agregar más de 2 equipos')
		}
	},

	addPlayerToTeam: (player, teamId) => {
		const { teams } = get()
		const team = teams.find((team) => team.id === teamId)

		if (!team) {
			// console.log('El equipo no existe')
			return
		}

		// Verifica si el jugador ya está en el store
		const playerAlreadyInTeam = teams.some((team) =>
			team.players.some((p) => p.player_id === player.player_id)
		)
		if (playerAlreadyInTeam) {
			// console.log('El jugador ya está en un equipo')
			return
		}

		// Verifica si el equipo ya tiene 5 jugadores
		if (team.players.length >= 5) {
			// console.log('El equipo ya tiene 5 jugadores')
			return
		}

		// Actualiza el estado
		set((state) => {
			const updatedTeams = state.teams.map((team) => {
				if (team.id === teamId) {
					return { ...team, players: [...team.players, player] }
				}
				return team
			})

			return {
				teams: updatedTeams,
			}
		})
	},

	removePlayer: (playerId) => {
		set((state) => ({
			teams: state.teams.map((team) => ({
				...team,
				players: team.players.filter((player) => player.player_id !== playerId),
			})),
		}))
	},

	canAddPlayer: (playerId) => {
		const { teams } = get()
		return !teams.some((team) => team.players.some((p) => p.player_id === playerId))
	},

	canAddTeam: () => {
		return get().teams.length < 2
	},

	updateTeamName: (teamId: string, name: string) => {
		// console.log('Updating team name:', teamId, name)
		set((state) => ({
			teams: state.teams.map((team) => (team.id === teamId ? { ...team, name: name } : team)),
		}))
	},

	getTeamName: (teamId: string) => {
		const team = get().teams.find((team) => team.id === teamId)
		return team ? team.name : ''
	},

	getTeamPlayers: (teamId: string) => {
		const team = get().teams.find((team) => team.id === teamId)
		return team ? team.players : []
	},
}))

export default useStore
