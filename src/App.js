import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Body from './components/Body/Body.js';
import Section2 from './components/Section2/Section2.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Section3 from './components/Section3/Section3.js';
import Section4 from './components/Section4/Section4.js';
import Section5 from './components/Section5/Section5.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar></Navbar>}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Body></Body>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Footer></Footer>
    </div>
  );
}

export default App;
