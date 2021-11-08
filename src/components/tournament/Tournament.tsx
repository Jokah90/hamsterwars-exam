import GetRandom from "./GetRandom";
// Tävla
// När battle-vyn visas ska du slumpa två hamstrar, som visas för användaren. Användaren ska klicka för att rösta på den sötaste. Man ska kunna se bild och namn för varje hamster. När man har röstat ska mer information om hamstern visas, bland annat hur många vinster och förluster den har. (Det kan påverka hur man röstar!)

// När användaren klickar ska båda hamster-objekten uppdateras: vinnaren får +1 vinst och förloraren +1 förlust. Nu ska du visa hur många vinster och förluster respektive hamster har. Användaren ska få möjligheten att starta en ny match, med två slumpade hamstrar.

// VG: Utöver att uppdatera hamster-objekten i databasen, ska du lägga till ett match-objekt i databasen.


const Tournament = () => {



	return ( 
		<div>
	
		<GetRandom />
		</div>
	 );
	}

export default Tournament;