import React, { useState } from 'react';
import Size from './components/sizes/Size';
import './App.css';

const App = () => {
  // hooks
  const [step, setStep] = useState(1);

  const updateStep = () => {
    setStep( step + 1 );
  }

  return (
    <div className="App">
      <Size step={step} onClick={() => updateStep} />
    </div>
  );
}

export default App;
