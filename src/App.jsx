import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import StepIndicator from './components/StepIndicator';
import ProductTypeSelection from './components/ProductTypeSelection';
import ProductDetails from './components/ProductDetails';
import ProductOptions from './components/ProductOptions';
import CartSummary from './components/CartSummary';
import { calculatePrice } from './utils/calculatePrice';

function App() {
  const [step, setStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({
    productType: 'option1',
    category: '',
    brand: '',
    model: '',
    features: '',
    preferences: '',
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
    <div className="h-screen bg-portfolio-base flex items-center justify-center p-4">
      <div className="w-full max-w-4xl max-h-full overflow-y-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-portfolio-text">
            Carrito de Compras
          </h1>
          <p className="text-portfolio-text/80 text-sm md:text-base">
            Configura tu producto ideal paso a paso y 
            obtén un resumen personalizado.
          </p>
        </div>

        <div className="bg-portfolio-dark/50 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 border border-portfolio-accent/20">
          <StepIndicator currentStep={step} />

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <ProductTypeSelection
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {step === 2 && (
              <ProductDetails formData={formData} setFormData={setFormData} />
            )}
            {step === 3 && !showSummary && (
              <ProductOptions
                formData={formData}
                setFormData={setFormData}
                onGetSummary={handleGetSummary}
              />
            )}

            {step === 3 && showSummary && (
              <CartSummary
                formData={formData}
                calculatePrice={() => calculatePrice(formData)}
              />
            )}

            <div className="mt-6 flex justify-between">
              {step > 1 && !showSummary && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 border border-portfolio-text/20 rounded-md text-portfolio-text hover:bg-portfolio-dark/80 text-sm"
                >
                  Volver
                </button>
              )}
              {step === 3 && showSummary && (
                <button
                  type="button"
                  onClick={() => setShowSummary(false)}
                  className="px-4 py-2 border border-portfolio-text/20 rounded-md text-portfolio-text hover:bg-portfolio-dark/80 text-sm"
                >
                  Volver a editar
                </button>
              )}
              {step < 3 && (
                <button
                  type="submit"
                  className="ml-auto px-4 py-2 bg-portfolio-gradient-4 text-portfolio-text rounded-md hover:bg-portfolio-gradient-3 flex items-center text-sm"
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