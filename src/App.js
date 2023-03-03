import './App.css'
import Events from './components/Events/Events'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Sponsors from './components/Sponsors/Sponsors'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Events/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
