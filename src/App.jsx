import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import StepIndicator from './components/StepIndicator';
import PublicationTypeSelection from './components/PublicationTypeSelection';
import ServiceConfiguration from './components/ServiceConfiguration';
import ExtrasAndAddons from './components/ExtrasAndAddons';
import OrderSummary from './components/OrderSummary';
import { calculatePrice } from './utils/calculatePrice';

function App() {
  const [step, setStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({
    publicationType: 'basic', // basic | premium
    domainName: '',
    customDomain: '',
    modifications: [],
    deliveryTime: 'standard',
    extras: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleGetSummary = () => {
    setShowSummary(true);
  };

  return (
    <div className="h-screen bg-portfolio-base flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 min-h-0">
        <div className="w-full max-w-4xl h-full flex flex-col">
          <div className="text-center mb-4 flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-1 text-portfolio-text">
              Publicar tu Landing Page
            </h1>
            <p className="text-portfolio-text/80 text-xs md:text-sm">
              Elige cómo quieres publicar tu landing page y personaliza tu experiencia.
            </p>
          </div>

          <div className="bg-portfolio-dark/50 backdrop-blur-sm rounded-xl shadow-lg p-3 md:p-4 border border-portfolio-accent/20 flex-1 flex flex-col min-h-0">
            <StepIndicator currentStep={step} />

            <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
              <form onSubmit={handleSubmit} className="flex flex-col min-h-full">
                <div className="flex-1 pb-4">{step === 1 && (
                  <PublicationTypeSelection
                    formData={formData}
                    setFormData={setFormData}
                  />
                )}

                {step === 2 && (
                  <ServiceConfiguration formData={formData} setFormData={setFormData} />
                )}
                {step === 3 && !showSummary && (
                  <ExtrasAndAddons
                    formData={formData}
                    setFormData={setFormData}
                    onGetSummary={handleGetSummary}
                  />
                )}

                {step === 3 && showSummary && (
                  <OrderSummary
                    formData={formData}
                    calculatePrice={() => calculatePrice(formData)}
                  />
                )}
                </div>

                {/* Espacio para evitar que los botones tapen el contenido */}
                <div className="h-20"></div>

                <div className="mt-4 flex justify-between items-center flex-shrink-0">
                  <div className="flex-1">
                    {step > 1 && !showSummary && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="px-3 py-1.5 border border-portfolio-text/20 rounded-md text-portfolio-text hover:bg-portfolio-dark/80 text-xs transition-colors"
                      >
                        ← Volver
                      </button>
                    )}
                    {step === 3 && showSummary && (
                      <button
                        type="button"
                        onClick={() => setShowSummary(false)}
                        className="px-3 py-1.5 border border-portfolio-text/20 rounded-md text-portfolio-text hover:bg-portfolio-dark/80 text-xs transition-colors"
                      >
                        ← Volver a editar
                      </button>
                    )}
                  </div>
                  
                  <div className="flex-1 flex justify-end gap-2">
                    {step < 3 && (
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-portfolio-gradient-4 text-portfolio-text rounded-md hover:bg-portfolio-gradient-3 flex items-center text-xs transition-colors"
                      >
                        Continuar
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </button>
                    )}
                    {step === 3 && showSummary && (
                      <>
                        <button className="px-3 py-1.5 border border-portfolio-accent text-portfolio-text rounded-md hover:bg-portfolio-dark/50 text-xs transition-colors">
                          Guardar
                        </button>
                        <button className="px-3 py-1.5 bg-portfolio-gradient-4 text-portfolio-text rounded-md hover:bg-portfolio-gradient-3 text-xs transition-colors">
                          {formData.publicationType === 'basic' ? 'Publicar' : 'Pagar'}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;