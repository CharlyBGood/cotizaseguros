import React from 'react';
import { Check, ShoppingBag, CreditCard } from 'lucide-react';

function CartSummary({ formData, calculatePrice }) {
  const priceDetails = calculatePrice();
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-portfolio-text mb-2">
          Resumen del Carrito
        </h2>
        <p className="text-portfolio-text/70">
          Revisa tu selección antes de finalizar
        </p>
      </div>

      <div className="bg-portfolio-dark/30 rounded-lg p-6 border border-portfolio-accent/20">
        <h3 className="text-lg font-semibold text-portfolio-text mb-4 flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2" />
          Detalles del Producto
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-portfolio-text/80">Tipo:</span>
            <span className="text-portfolio-text">
              {formData.productType === 'option1' ? 'Opción 1' : 'Opción 2'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-portfolio-text/80">Categoría:</span>
            <span className="text-portfolio-text capitalize">{formData.category}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-portfolio-text/80">Marca:</span>
            <span className="text-portfolio-text">{formData.brand}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-portfolio-text/80">Modelo:</span>
            <span className="text-portfolio-text">{formData.model}</span>
          </div>
          
          {formData.features && (
            <div className="flex justify-between">
              <span className="text-portfolio-text/80">Características:</span>
              <span className="text-portfolio-text">Premium</span>
            </div>
          )}
          
          {formData.preferences && (
            <div className="flex justify-between">
              <span className="text-portfolio-text/80">Preferencias:</span>
              <span className="text-portfolio-text">{formData.preferences}</span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-portfolio-dark/30 rounded-lg p-6 border border-portfolio-accent/20">
        <h3 className="text-lg font-semibold text-portfolio-text mb-4">
          Extras Seleccionados
        </h3>
        
        {priceDetails.extras.length > 0 ? (
          <div className="space-y-2">
            {priceDetails.extras.map((extra, index) => (
              <div key={index} className="flex items-center text-portfolio-text/80">
                <Check className="w-4 h-4 text-portfolio-gradient-4 mr-2" />
                {extra}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-portfolio-text/60">No se seleccionaron extras</p>
        )}
      </div>

      <div className="bg-portfolio-gradient-4/10 rounded-lg p-6 border border-portfolio-gradient-4/30">
        <h3 className="text-lg font-semibold text-portfolio-text mb-4 flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Total a Pagar
        </h3>
        
        <div className="text-3xl font-bold text-portfolio-gradient-4">
          ${priceDetails.total}
        </div>
        
        <div className="mt-4 space-y-2 text-sm text-portfolio-text/70">
          {priceDetails.features.map((feature, index) => (
            <div key={index}>• {feature}</div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 py-3 px-6 bg-portfolio-gradient-4 text-portfolio-text rounded-md hover:bg-portfolio-gradient-3 flex items-center justify-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Proceder al Pago
        </button>
        
        <button className="flex-1 py-3 px-6 border border-portfolio-accent text-portfolio-text rounded-md hover:bg-portfolio-dark/50">
          Guardar Carrito
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
