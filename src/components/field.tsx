const Field = () => {
	return (
		<>
			<div className="max-w-[680px]  border-b-0 min-h-80 w-full h-[40vh] bg-gradient-to-r from-green-600 via-green-700 to-green-600 border-4 border-gray-400 flex items-start justify-center">
				<div className="w-52 h-32 bg-gradient-to-r from-green-600 via-green-700 to-green-600 border-4 border-gray-400 mt-0" />
			</div>
			<div className="max-w-[680px]  w-full h-[40vh] min-h-80 bg-gradient-to-r from-green-600 via-green-700 to-green-600 border-4 border-gray-400 flex items-end justify-center">
				<div
					className="w-52 h-32  bg-gradient-to-r from-green-600 via-green-700 to-green-600 border-4 border-gray-400"
					style={{ marginTop: '-4px' }}
				/>
			</div>
		</>
	)
}

export default Field
