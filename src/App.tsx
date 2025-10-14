import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Solutions />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
