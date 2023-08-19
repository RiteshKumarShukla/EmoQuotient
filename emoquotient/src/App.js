import './App.css';
import MainAnimation from './components/Background/MainAnimation';
import CardSection from './components/Cards/Card';
import EQSection from './components/EQ/EQ';
import EQSection2 from './components/EQ/EQ2';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OpenVacancies from './components/OpenVacancies/OpenVacancies';
import Self  from './components/SelfImrovement/SelfImprovement';
import Test from './components/Test/Test';
import WorkWithUsSection from './components/Work/WorkWithUs';

function App() {
  return (
    <div className="App">
      <MainAnimation/>
      <Header/>
      <CardSection/>
      <EQSection/>
      <Self/>
      <EQSection2/>
      <Test/>
      <WorkWithUsSection/>
      <OpenVacancies/>
      <Footer/>
    </div>
  );
}

export default App;
