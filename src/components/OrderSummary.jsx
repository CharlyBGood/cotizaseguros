import React from 'react';
import { Check, Globe, CreditCard, Clock, Zap } from 'lucide-react';

function OrderSummary({ formData, calculatePrice }) {
  const priceDetails = calculatePrice();
  
  const getDeliveryTime = () => {
    switch (formData.deliveryTime) {
      case 'priority': return '12-24 horas';
      case 'express': return '2-6 horas';
      default: return '24-48 horas';
    }
  };

  return (
    <div className="space-y-3">
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-semibold text-portfolio-text mb-1">
          Resumen de tu Pedido
        </h2>
        <p className="text-portfolio-text/70 text-xs">
          Revisa todos los detalles antes de proceder al pago
        </p>
      </div>

      <div className="bg-portfolio-dark/30 rounded-lg p-3 border border-portfolio-accent/20">
        <h3 className="text-base font-semibold text-portfolio-text mb-2 flex items-center">
          <Globe className="w-4 h-4 mr-2" />
          Tipo de Publicación
        </h3>
        
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-portfolio-text/80">Tipo:</span>
            <span className="text-portfolio-text">
              {formData.publicationType === 'basic' ? 'Publicación Básica' : 'Publicación Premium'}
            </span>
          </div>
          
          {formData.publicationType === 'premium' && formData.customDomain && (
            <div className="flex justify-between text-sm">
              <span className="text-portfolio-text/80">Dominio:</span>
              <span className="text-portfolio-text">
                {formData.customDomain}{formData.domainExtension || '.com'}
              </span>
            </div>
          )}
          
          <div className="flex justify-between text-sm">
            <span className="text-portfolio-text/80">Entrega:</span>
            <span className="text-portfolio-text flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {getDeliveryTime()}
            </span>
          </div>
        </div>
      </div>

      {formData.modifications && formData.modifications.length > 0 && (
        <div className="bg-portfolio-dark/30 rounded-lg p-3 border border-portfolio-accent/20">
          <h3 className="text-base font-semibold text-portfolio-text mb-2">
            Modificaciones Incluidas
          </h3>
          
          <div className="space-y-1">
            {formData.modifications.map((modId, index) => {
              const modNames = {
                'ecommerce': 'E-commerce Básico',
                'forms': 'Formularios Avanzados',
                'blog': 'Sección de Blog',
                'gallery': 'Galería de Imágenes',
                'testimonials': 'Sección de Testimonios'
              };
              return (
                <div key={index} className="flex items-center text-portfolio-text/80">
                  <Check className="w-3 h-3 text-portfolio-gradient-4 mr-2" />
                  {modNames[modId]}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {formData.extras && formData.extras.length > 0 && (
        <div className="bg-portfolio-dark/30 rounded-lg p-3 border border-portfolio-accent/20">
          <h3 className="text-base font-semibold text-portfolio-text mb-2">
            Servicios Adicionales
          </h3>
          
          <div className="space-y-1">
            {formData.extras.map((extraId, index) => {
              const extraNames = {
                'analytics': 'Analytics Avanzado (+$15/mes)',
                'maintenance': 'Mantenimiento Mensual (+$20/mes)',
                'support': 'Soporte Premium (+$12/mes)'
              };
              return (
                <div key={index} className="flex items-center text-portfolio-text/80 text-sm">
                  <Check className="w-3 h-3 text-portfolio-gradient-4 mr-2" />
                  {extraNames[extraId]}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="bg-portfolio-gradient-4/10 rounded-lg p-3 border border-portfolio-gradient-4/30">
        <h3 className="text-base font-semibold text-portfolio-text mb-2 flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Total del Pedido
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-portfolio-text/80">Costo base:</span>
            <span className="text-portfolio-text">${priceDetails.basePrice}</span>
          </div>
          
          {priceDetails.extras.length > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-portfolio-text/80">Extras únicos:</span>
              <span className="text-portfolio-text">+${priceDetails.extrasOneTime}</span>
            </div>
          )}
          
          {priceDetails.monthlyTotal > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-portfolio-text/80">Servicios mensuales:</span>
              <span className="text-portfolio-text">+${priceDetails.monthlyTotal}/mes</span>
            </div>
          )}
          
          <hr className="border-portfolio-accent/30" />
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold text-portfolio-gradient-4">
              ${priceDetails.total}
            </div>
            {priceDetails.monthlyTotal > 0 && (
              <div className="text-sm text-portfolio-text/70">
                + ${priceDetails.monthlyTotal}/mes después
              </div>
            )}
          </div>
          
          {formData.publicationType === 'basic' && (
            <div className="flex items-center text-sm text-portfolio-gradient-4">
              <Zap className="w-4 h-4 mr-1" />
              ¡Gratis!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
