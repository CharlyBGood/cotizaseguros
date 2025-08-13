import React from 'react';

function StepIndicator({ currentStep }) {
  const steps = [
    { number: 1, name: 'Tipo' },
    { number: 2, name: 'Detalles' },
    { number: 3, name: 'Opciones' }
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-center items-center space-x-3">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm ${
                  currentStep >= step.number
                    ? 'bg-portfolio-gradient-4 border-portfolio-gradient-4 text-portfolio-text'
                    : 'bg-portfolio-medium border-portfolio-accent text-portfolio-text/50'
                }`}
              >
                {step.number}
              </div>
              <span className={`text-xs mt-1 ${
                currentStep >= step.number 
                  ? 'text-portfolio-text' 
                  : 'text-portfolio-text/50'
              }`}>
                {step.name}
              </span>
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`h-0.5 w-12 mx-3 ${
                  currentStep > step.number 
                    ? 'bg-portfolio-gradient-4' 
                    : 'bg-portfolio-accent/30'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepIndicator;