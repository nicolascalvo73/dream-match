'use client'
import Field from '@/components/field'
import PlayerThumbnail from '@/components/playerThumbnail'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const CreateTeams = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const [step, setStep] = useState(1)

	return (
		<>
			{/* <Field />
			<PlayerThumbnail
				imageUrl={'https://apiv3.apifootball.com/badges/players/9898_k-benzema.jpg'}
				playerName={'K. Benzema'}
			/> */}
		</>
	)
}

export default CreateTeams
