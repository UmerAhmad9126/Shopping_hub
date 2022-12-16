import './App.css';
import Navbar1 from './Components/Navbar1';
import Navbar from './Components/Navbar';
import AllRoute from './Routes/AllRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar1 />
      <AllRoute />
    </div>
  );
}

export default App;
