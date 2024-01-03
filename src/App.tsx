import { Outlet } from 'react-router-dom';
import './App.css';

//Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <h1>HELLO</h1>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
