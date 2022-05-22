import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login'


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" index element={ <Home /> } />
					<Route path="login" element={ <Login /> } />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
