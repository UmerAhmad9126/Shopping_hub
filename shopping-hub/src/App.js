import './App.css';
import Navbar1 from './Components/Navbar1';
import Navbar from './Components/Navbar';
import AllRoute from './Routes/AllRoute';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar1 />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
