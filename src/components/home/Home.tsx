// Startsida
// Här ska du förklara för användaren hur man använder appen. Länka till vyerna Tävla och Galleri. (Med React Router-länkar, <Link />.)

// Visa den hamster som vunnit mest. Vi räknar (antal vinster) - (antal förluster). Om det är oavgjort mellan flera hamstrar, ska appen slumpa en av dem. (Backend endpoint /hamsters/cutest.)

// Om det av någon anledning inte går att nå backend-servern så ska du visa ett användarvänligt felmeddelande här. Användaren ska också få möjligheten att försöka igen.
 


const Home = () => {

    return (     
	  <section>
		  <h1> Welcome to Hamster Wars</h1>
		  <p>Are you ready to battle it out?</p>

<h2> Instructions </h2>

<p> You just got summoned to the game and is about to enter the ultimate gladiatorpit!
	But first, you need instructions.
	
	Use the navigationtool to explore the mighty arena! 
</p>

<h3> Good luck! </h3>
	</section>
    )
}



export default Home;