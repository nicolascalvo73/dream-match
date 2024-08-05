'use client'
import { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import StepOne from '../steps/stepOne'
import StepTwo from '../steps/stepTwo'
import StepZero from '../steps/stepZero'
import StepThree from '../steps/stepThree'
import StepFour from '../steps/stepFour'
import StepFive from '../steps/stepFive'

const CreateTeams = () => {
	const [step, setStep] = useState(-1)

	const nextStep = () => {
		setStep(step + 1)
	}

	const prevStep = () => {
		setStep(step - 1)
	}

	const goToStep = (stepNumber: number) => {
		setStep(stepNumber)
	}

	useEffect(() => {
		setTimeout(() => {
			setStep(0)
		}, 800)
	}, [])

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<TransitionGroup className="absolute inset-0">
				<CSSTransition key={step} classNames="slide" timeout={500}>
					<div className="w-full h-full">
						{step === 0 && <StepZero goToStep={goToStep} prevStep={prevStep} />}
						{step === 1 && <StepOne goToStep={goToStep} prevStep={prevStep} />}
						{step === 2 && <StepTwo goToStep={goToStep} prevStep={prevStep} />}
						{step === 3 && <StepThree goToStep={goToStep} prevStep={prevStep} />}
						{step === 4 && <StepFour goToStep={goToStep} prevStep={prevStep} />}
						{step === 5 && <StepFive goToStep={goToStep} prevStep={prevStep} />}
					</div>
				</CSSTransition>
			</TransitionGroup>
		</div>
	)
}

export default CreateTeams
