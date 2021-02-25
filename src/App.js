import React, { useState } from 'react';
import Size from './components/sizes/Size';
import './App.css';
import Flavors from './components/flavors/Flavors';

const App = () => {
  // hooks
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep( step + 1 );
  }

  const stepSwitcher = (step) => {
    let currentStep = '';
    switch(step){
      case 1:{ 
        currentStep = <Size nextStep={nextStep} />
        break;
      }
      case 2:{ 
        currentStep = <Flavors nextStep={nextStep} />
        break;
      }
      default: currentStep = <Size step={step} nextStep={nextStep} />;
    }
    return currentStep;
  }

  return (
    <div className="App">
      {stepSwitcher(step)}
    </div>
  );
}

export default App;
