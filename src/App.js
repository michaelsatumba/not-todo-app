import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<div className="h-screen bg-blue-900 ">
			{/* Header */}
			<Header />
			{/* Main */}
			<Main />
			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
