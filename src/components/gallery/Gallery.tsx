import { useEffect, useState } from 'react'
import { Hamster } from '../../models/models'


const Gallery = () => {
	const [data, setData] = useState<Hamster[] | null>(null)

	useEffect(() => {
		sendRequest(setData)
	}, [])

	return (
		<main className="grid-container">
		{data
		? data.map(hamster => (
			<figure className="hamster-cards"key={hamster.id}>
				{hamster.name}
			<img src={`/img/${hamster.imgName}`} alt={hamster.name} />
			</figure>
		))
		: 'Loading fighters...' }
		</main>
	)
}

async function sendRequest(saveData: any) {
	const response = await fetch('/hamsters')
	const data = await response.json()
	saveData(data)
	console.log(data)

}

export default Gallery