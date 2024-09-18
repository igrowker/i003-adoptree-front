import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import './App.css';


const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
