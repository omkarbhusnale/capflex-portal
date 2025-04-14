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
  import Eligibility from './pages/Eligibility';
  import PersonalLoan from './pages/PersonalLoan';
  */

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apply" element={<ApplyLoan />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/services/personal-loan" element={<PersonalLoan />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
