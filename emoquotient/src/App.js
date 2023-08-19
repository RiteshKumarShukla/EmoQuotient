import './App.css';
import EQSection from './components/EQ/EQ';
import EQSection2 from './components/EQ/EQ2';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OpenVacancies from './components/OpenVacancies/OpenVacancies';
import Test from './components/Test/Test';
import WorkWithUsSection from './components/Work/WorkWithUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <EQSection/>
      <EQSection2/>
      <Test/>
      <WorkWithUsSection/>
      <OpenVacancies/>
      <Footer/>
    </div>
  );
}

export default App;
