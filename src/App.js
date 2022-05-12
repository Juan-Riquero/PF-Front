import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

//Componentes y funciones
import Home from './Pages/Home';
import NavBar from "./Components/NavBar/NavBar";
import { getSneakers } from './Redux/Actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSneakers());
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;