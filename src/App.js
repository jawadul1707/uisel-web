import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServiceProvide from './components/ServiceProvide';
import TrainingCenter from './components/TrainingCenter';
import WhereWeWork from './components/WhereWeWork';
import Partners from './components/Partners';
import Certification from './components/Certification';
import FAQ from './components/FAQ';
import QuerySection from './components/QuerySection';
import TradesPage from './components/TradesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/trades" element={<TradesPage />} />
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <ServiceProvide />
              <TrainingCenter />
              <WhereWeWork />
              <Partners />
              <Certification />
              <FAQ />
              <QuerySection />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
