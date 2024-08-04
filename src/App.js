// src/App.js
import React from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';

function App() {
  return (
    <div className="App mx-auto max-w-4xl max-h-screen">
      <Header />
      <MainContainer />
      <ContactButton />
      <Footer />
    </div>
  );
}

export default App;
