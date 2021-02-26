import React, { useState } from 'react';
import Size from './components/sizes/Size';
import './App.css';

const App = () => {
  // hooks
  const [step, setStep] = useState(1);
  const [size, setSize] = useState('');

  const nextStep = (size) => {
    setStep( step + 1 );
  }

  const clickedItem = (item) => {
    setSize(item);
  }

  const stepSwitcher = (step) => {
    let currentStep = '';
    switch(step){
      case 1:{
        currentStep = <Size
                        nextStep={nextStep}
                        clickedItem={clickedItem}
                        clickedSize={size}
                        />
        break;
      }
      default: currentStep = <Size
        nextStep={nextStep}
        clickedItem={clickedItem}
        clickedSize={size}
        />
        break;
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
