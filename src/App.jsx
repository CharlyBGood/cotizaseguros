import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import StepIndicator from './components/StepIndicator';
import VehicleTypeSelection from './components/VehicleTypeSelection';
import VehicleDetails from './components/VehicleDetails';
import DriverDetails from './components/DriverDetails';
import QuoteResult from './components/QuoteResult';
import { getCoverageOptions } from './utils/calculateQuote';

function App() {
  const [step, setStep] = useState(1);
  const [showQuote, setShowQuote] = useState(false);
  const [formData, setFormData] = useState({
    vehicleType: 'car',
    year: '',
    make: '',
    model: '',
    mileage: '',
    driverAge: '',
    drivingHistory: 'clean'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleGetQuote = () => {
    setShowQuote(true);
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-4xl mx-auto pt-12 px-4 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Cotizá tu Seguro
          </h1>
          <p className="text-text/80">
            Obtené al instante una cotización que se
            adapte a tus necesidades.
          </p>
        </div>

        <div className="bg-primary-alpha backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-blue/20">
          <StepIndicator currentStep={step} />

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <VehicleTypeSelection
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {step === 2 && (
              <VehicleDetails formData={formData} setFormData={setFormData} />
            )}
            {step === 3 && !showQuote && (
              <DriverDetails
                formData={formData}
                setFormData={setFormData}
                onGetQuote={handleGetQuote}
              />
            )}

            {step === 3 && showQuote && (
              <QuoteResult
                formData={formData}
                getCoverageOptions={() => getCoverageOptions(formData)}
              />
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 && !showQuote && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border border-text/20 rounded-md text-text hover:bg-primary-alpha"
                >
                  Volver
                </button>
              )}
              {step === 3 && showQuote && (
                <button
                  type="button"
                  onClick={() => setShowQuote(false)}
                  className="px-6 py-2 border border-text/20 rounded-md text-text hover:bg-primary-alpha"
                >
                  Volver a editar
                </button>
              )}
              {step < 3 && (
                <button
                  type="submit"
                  className="ml-auto px-6 py-2 bg-blue text-primary rounded-md hover:bg-blue/80 flex items-center"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;