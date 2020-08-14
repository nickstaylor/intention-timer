import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Timer from '../Timer/Timer'
import Activities from '../Activities/Activities'

function App() {
  const [showTimer, setShowTimer] = useState(false)

  return (
  
    <div className="App">
        <Header />
        <Form />
        <Activities />
      {
        showTimer && <Timer />
      }
    </div>
  );
}

export default App;
