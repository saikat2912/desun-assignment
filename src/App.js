import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes,Navigate } from 'react-router-dom';
import Navbar from './components/molecules/navbar/Navbar';
import { Container, Box } from '@mui/material';
import EggList from './components/molecules/EggList/EggList';
import { Dashboard } from './components/organisms/Dashboard/Dashboard';
import EggListDetails from './components/molecules/EggListDetails/EggListDetails';
import { Navigation } from './components/molecules/header/Header';
const App = () => {
  return (
   

    <Router>
      <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 240, backgroundColor: '#1F515B', height: '100vh' }}>
        <Navbar />
      </Box>
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#EFF5F2'}}>
        < Navigation/>
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          
            <Route path="/eggs" element={<EggList/>} />
            
            <Route path="/egglistdetails" element={<EggListDetails/>} />
          </Routes>
        </div>
      </Box>
    </Box>
      
     
    </Router>
  );
};

export default App;