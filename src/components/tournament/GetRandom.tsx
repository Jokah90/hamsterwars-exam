import { useEffect, useState } from "react";
import { Hamster } from "../../models/models";
import styles from "../../styles/getrandom.module.css"

const GetRandom = () => {
	const [competitorOne, setCompetitorOne] = useState<Hamster | null>(null)
    const [competitorTwo, setCompetitorTwo] = useState<Hamster | null>(null)

	useEffect(() => {
		sendRequestOne(setCompetitorOne);
		sendRequestTwo(setCompetitorTwo);

	  }, []);


	  return (
		  
		  <div className={styles.container}>
		  <h2> Battle! </h2>
		  <h3> Matchup:  </h3> 
		

		<section className={styles.wrapper}>

		  { competitorOne === null
		  ? <p> No data </p>
		  : 
				
					  <div className={styles.figther}> 
						  {competitorOne.name}
						  <img src={`/img/${competitorOne.imgName}`} alt="hamster"/>
					  </div>    
			
		  }

		  <span>⚔️</span>

		  { competitorTwo === null
		  ? <p> No data </p>
		  : 
			
					    <div className={styles.figther}> 
						  {competitorTwo.name}  
						  <img src={`/img/${competitorTwo.imgName}`} alt="hamster"/>
					  </div>    
			
		  }
		  </section>
		  </div>
		
	  )
  
}

async function sendRequestOne(setCompetitorOne: any) {
	const firstResponse = await fetch('hamsters/random')
    const competitorOne = await firstResponse.json()
    setCompetitorOne(competitorOne)
}

async function sendRequestTwo(setCompetitorTwo: any) {
	const secondResponse = await fetch('hamsters/random')
    const competitorTwo = await secondResponse.json()
    setCompetitorTwo(competitorTwo)
}





export default GetRandom