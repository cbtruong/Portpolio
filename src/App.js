import NavBar from "./components/Home_Page/NavBar/Navbar.js";
import Intro from './components/Home_Page/Intro/Intro.js';
import Skills from './components/Home_Page/Skills/Skills.js';
import Works from './components/Home_Page/Works/Works.js';
import Contact from './components/Home_Page/Contact/Contact.js';
import Footer from './components/Home_Page/Footer/Footer.js';
import About from './components/Home_Page/About/About.js';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Intro/>
			<About/>
			<Skills/>
			<Works/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;
