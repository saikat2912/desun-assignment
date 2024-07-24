import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/molecules/navbar/Navbar';
import Header from './components/molecules/header/Header';
import EggList from './components/molecules/EggList/EggList';
import { Dashboard } from './components/organisms/Dashboard/Dashboard';
import EggListDetails from './components/molecules/EggListDetails/EggListDetails';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
          
            <Route path="/eggs" element={<EggList/>} />
            
            <Route path="/egglistdetails" element={<EggListDetails/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;