import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

//Componentes y funciones
<<<<<<< HEAD
import { getSneakers } from './Redux/Actions';
import Home from './pages/Home';
import NavBar from './Components/NavBar/NavBar';
import Detail from './pages/Detail';
import FormUser from './pages/FormUser';
=======
import NavBar from "./Components/NavBar/NavBar";
import Home from './Pages/Home';
import Detail from "./Pages/Detail";
import FormUser from './Pages/FormUser/index.jsx'
import { getSneakers } from './Redux/Actions';
>>>>>>> 7d336c439a49944c529db828529891b46e6d1cd3

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSneakers());
		// eslint-disable-next-line
	}, []);

<<<<<<< HEAD
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/create-user' element={<FormUser />} />
			</Routes>
		</div>
	);
=======
  useEffect(() => {
    dispatch(getSneakers());
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/create-user' element={<FormUser />} />
      </Routes>
    </div>
  );
>>>>>>> 7d336c439a49944c529db828529891b46e6d1cd3
}

export default App;
