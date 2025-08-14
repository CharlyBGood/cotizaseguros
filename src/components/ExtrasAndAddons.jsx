import React from 'react';
import { ShoppingCart, Shield, BarChart3, Headphones } from 'lucide-react';
import ToggleButton from './modals/ToggleButton';

function ExtrasAndAddons({ formData, setFormData, onGetSummary }) {
  const handleToggleChange = (field) => (e) => {
    const currentExtras = formData.extras || [];
    const newExtras = e.target.checked 
      ? [...currentExtras, field]
      : currentExtras.filter(extra => extra !== field);
    
    setFormData({ ...formData, extras: newExtras });
  };

  const additionalServices = [
    {
      id: 'analytics',
      label: 'Analytics Avanzado',
      description: 'Google Analytics + reportes mensuales',
      price: 15,
      icon: BarChart3
    },
    {
      id: 'maintenance',
      label: 'Mantenimiento Mensual',
      description: 'Actualizaciones y backups automáticos',
      price: 20,
      icon: Shield
    },
    {
      id: 'support',
      label: 'Soporte Premium',
      description: 'Soporte prioritario 24/7 por chat y email',
      price: 12,
      icon: Headphones
    }
  ];

  return (
    <div className="space-y-3">
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-semibold text-portfolio-text mb-1">
          Servicios Adicionales
        </h2>
        <p className="text-portfolio-text/70 text-xs">
          Potencia tu landing page con servicios profesionales
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {additionalServices.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="bg-portfolio-dark/30 rounded-lg p-3 border border-portfolio-accent/20"
            >
              <div className="flex items-start space-x-2">
                <div className="flex-shrink-0 mt-0.5">
                  <ToggleButton
                    getData={(formData.extras || []).includes(service.id)}
                    handleToggleChange={handleToggleChange}
                    data={service.id}
                    label=""
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-0.5">
                    <IconComponent className="w-4 h-4 text-portfolio-gradient-4" />
                    <h3 className="text-xs font-semibold text-portfolio-text">
                      {service.label}
                    </h3>
                    <span className="text-xs text-portfolio-gradient-4 font-medium">
                      +${service.price}/mes
                    </span>
                  </div>
                  <p className="text-xs text-portfolio-text/70">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-portfolio-gradient-4/10 rounded-lg p-3 border border-portfolio-gradient-4/30">
        <h3 className="text-xs font-semibold text-portfolio-text mb-1">
          💡 Consejo Profesional
        </h3>
        <p className="text-xs text-portfolio-text/70">
          Los servicios adicionales pueden contratarse o cancelarse en cualquier momento desde tu panel de control.
        </p>
      </div>

      {((formData.publicationType === 'premium' && formData.customDomain) || 
        formData.publicationType === 'basic') && (
        <div className="mt-4">
          <button
            type="button"
            onClick={onGetSummary}
            className="w-full py-2 px-6 bg-portfolio-gradient-4 text-portfolio-text rounded-md hover:bg-portfolio-gradient-3 flex items-center justify-center text-sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ver Resumen de tu Pedido
          </button>
        </div>
      )}
    </div>
  );
}

export default ExtrasAndAddons;
