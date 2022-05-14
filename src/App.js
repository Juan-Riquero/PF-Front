import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

//Componentes y funciones
import Home from './pages/Home';
import NavBar from "./Components/NavBar/NavBar";
import { getSneakers } from './Redux/Actions';
import Detail from "./pages/Detail";
import FormUser from './pages/FormUser/index.jsx'

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
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path='/create-user' element={<FormUser />} />
      </Routes>
    </div>
  );
}

export default App;