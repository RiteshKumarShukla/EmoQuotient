import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OpenVacancies from './components/OpenVacancies/OpenVacancies';

function App() {
  return (
    <div className="App">
      <Header/>
      <OpenVacancies/>
      <Footer/>
    </div>
  );
}

export default App;
