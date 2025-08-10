import React from 'react';
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
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceProvide/>
      <TrainingCenter/>
      <WhereWeWork/>
      <Partners />
      <Certification />
      <FAQ />
      <QuerySection />
    </div>
  );
}

export default App;
