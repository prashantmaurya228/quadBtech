import './App.css';
import Allshows from './components/Allshows';
import { Routes, Route } from 'react-router-dom';
import Summary from './components/Summary';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Allshows />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;
