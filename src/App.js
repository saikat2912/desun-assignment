import logo from './logo.svg';
import './App.css';
import Navbar from './components/molecules/navbar/Navbar';
import Header from './components/molecules/header/Header';

import { Dashboard } from './components/organisms/Dashboard/Dashboard';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <Dashboard/>
    </div>
  );
};

export default App;