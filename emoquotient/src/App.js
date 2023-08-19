import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OpenVacancies from './components/OpenVacancies/OpenVacancies';
import Test from './components/Test/Test';
import WorkWithUsSection from './components/Work/WorkWithUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Test/>
      <WorkWithUsSection/>
      <OpenVacancies/>
      <Footer/>
    </div>
  );
}

export default App;
