import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getSneakers } from './Redux/Actions';
import Home from './pages/Home';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSneakers());
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;