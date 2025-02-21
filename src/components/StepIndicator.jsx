import React from 'react';

function StepIndicator({ currentStep }) {
  return (
    <div className="mb-8">
      <div className="flex justify-center space-x-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex items-center ${i !== 3 ? 'w-full' : ''}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= i
                  ? 'bg-blue text-text'
                  : 'bg-gray/50 text-text/50'
              }`}
            >
              {i}
            </div>
            {i !== 3 && (
              <div
                className={`h-1 w-full ${
                  currentStep > i ? 'bg-blue' : 'bg-gray/50'
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