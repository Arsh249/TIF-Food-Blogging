import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
