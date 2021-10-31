
import { Link } from 'react-router-dom';

 
const LandingPage = () => {
	return ( 
	<>
		<section className="container">
		<h1>HAMSTER WARS</h1>
		<h3>The legend starts here</h3>
		<Link to="/home">  
		<button>START</button>
		</Link>
		</section>
	</>
	 );
}
 
export default LandingPage;