import {
	Header,
	Footer,
	About,
	Skills,
	Testimonials,
	Work,
} from './containers';

import './App.scss';

const App = () => {
	return (
		<div id="app" className="app">
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default App;
