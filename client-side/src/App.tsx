import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Page imports
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

/*
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ApplyLoan from './pages/ApplyLoan';
import PersonalLoan from './pages/PersonalLoan';
*/

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Calculartor from './pages/Calculartor';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />

            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apply" element={<ApplyLoan />} /> 
            
            <Route path="/services/personal-loan" element={<PersonalLoan />} />
            */}

            <Route path="/eligibility" element={<Calculartor />} />
            <Route path="/resources/eligibility-calculator" element={<Calculartor />} />
            <Route path="/resources/emi-calculator" element={<Calculartor />} />

            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/resources/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
