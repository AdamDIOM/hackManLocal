import './App.css';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Sponsor from './components/Sponsor/Sponsor';
import Footer from './components/Footer/Footer';
import Prizes from './components/Prizes/Prizes';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <FAQ />
      <Sponsor />
      <Prizes />
      <Footer />
    </div>
  );
}

export default App;
