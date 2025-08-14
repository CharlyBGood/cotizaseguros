import React, { useState } from 'react';
import { Search, Globe, Clock } from 'lucide-react';
import ToggleModal from './modals/ToggleModal';

function ServiceConfiguration({ formData, setFormData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [domainAvailable, setDomainAvailable] = useState(null);

  const handleDomainCheck = () => {
    // Simulación de verificación de dominio
    if (formData.customDomain) {
      setDomainAvailable(Math.random() > 0.5);
      setIsModalOpen(true);
    }
  };

  const modifications = [
    { id: 'ecommerce', name: 'E-commerce Básico', price: 15 },
    { id: 'forms', name: 'Formularios Avanzados', price: 8 },
    { id: 'blog', name: 'Sección de Blog', price: 12 },
    { id: 'gallery', name: 'Galería de Imágenes', price: 6 },
    { id: 'testimonials', name: 'Sección de Testimonios', price: 5 }
  ];

  const handleModificationToggle = (modId) => {
    const currentMods = formData.modifications || [];
    const newMods = currentMods.includes(modId)
      ? currentMods.filter(m => m !== modId)
      : [...currentMods, modId];
    setFormData({ ...formData, modifications: newMods });
  };

  return (
    <div className="space-y-3">
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-semibold text-portfolio-text mb-1">
          Configuración del Servicio
        </h2>
        <p className="text-portfolio-text/70 text-xs">
          {formData.publicationType === 'premium' 
            ? 'Personaliza tu dominio y agrega modificaciones'
            : 'Confirma los detalles de tu publicación básica'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {formData.publicationType === 'premium' && (
          <div className="bg-portfolio-dark/30 rounded-lg p-3 border border-portfolio-accent/20">
            <h3 className="text-base font-semibold text-portfolio-text mb-2 flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Dominio Personalizado
            </h3>
            
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="tu-empresa"
                className="flex-1 rounded-md bg-portfolio-medium/50 border-portfolio-accent/30 text-portfolio-text placeholder-portfolio-text/50 focus:border-portfolio-gradient-4 focus:ring-portfolio-gradient-4 text-sm py-1.5"
                value={formData.customDomain}
                onChange={(e) => setFormData({ ...formData, customDomain: e.target.value })}
              />
              <select
                className="rounded-md bg-portfolio-medium/50 border-portfolio-accent/30 text-portfolio-text focus:border-portfolio-gradient-4 focus:ring-portfolio-gradient-4 text-sm py-1.5"
                value={formData.domainExtension || '.com'}
                onChange={(e) => setFormData({ ...formData, domainExtension: e.target.value })}
              >
                <option value=".com">.com (+$12/año)</option>
                <option value=".net">.net (+$10/año)</option>
                <option value=".org">.org (+$8/año)</option>
                <option value=".io">.io (+$25/año)</option>
              </select>
              <button
                type="button"
                onClick={handleDomainCheck}
                className="px-3 py-1.5 bg-portfolio-gradient-4 text-portfolio-text rounded-md hover:bg-portfolio-gradient-3 flex items-center text-sm"
              >
                <Search className="w-3 h-3" />
              </button>
            </div>
            
            <p className="text-xs text-portfolio-text/60">
              Ejemplo: {formData.customDomain || 'tu-empresa'}{formData.domainExtension || '.com'}
            </p>
          </div>
        )}

        <div className="bg-portfolio-dark/30 rounded-lg p-4 border border-portfolio-accent/20">
          <h3 className="text-lg font-semibold text-portfolio-text mb-3">
            Modificaciones Adicionales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {modifications.map((mod) => (
              <label key={mod.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(formData.modifications || []).includes(mod.id)}
                  onChange={() => handleModificationToggle(mod.id)}
                  className="rounded border-portfolio-accent text-portfolio-gradient-4 focus:ring-portfolio-gradient-4"
                />
                <span className="flex-1 text-sm text-portfolio-text">
                  {mod.name}
                </span>
                <span className="text-xs text-portfolio-gradient-4 font-medium">
                  +${mod.price}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-portfolio-dark/30 rounded-lg p-4 border border-portfolio-accent/20">
          <h3 className="text-lg font-semibold text-portfolio-text mb-3 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Tiempo de Entrega
          </h3>
          
          <div className="space-y-2">
            {[
              { id: 'standard', name: 'Estándar (24-48 horas)', price: 0 },
              { id: 'priority', name: 'Prioritario (12-24 horas)', price: 10 },
              { id: 'express', name: 'Express (2-6 horas)', price: 25 }
            ].map((delivery) => (
              <label key={delivery.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryTime"
                  value={delivery.id}
                  checked={formData.deliveryTime === delivery.id}
                  onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                  className="text-portfolio-gradient-4 focus:ring-portfolio-gradient-4"
                />
                <span className="flex-1 text-sm text-portfolio-text">
                  {delivery.name}
                </span>
                {delivery.price > 0 && (
                  <span className="text-xs text-portfolio-gradient-4 font-medium">
                    +${delivery.price}
                  </span>
                )}
              </label>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ToggleModal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-center font-bold text-portfolio-text">
            {domainAvailable ? '✅ Dominio Disponible' : '❌ Dominio No Disponible'}
          </h2>
          <p className="text-portfolio-text/80 mt-4 text-center">
            {domainAvailable 
              ? `El dominio ${formData.customDomain}${formData.domainExtension || '.com'} está disponible y se puede registrar.`
              : `El dominio ${formData.customDomain}${formData.domainExtension || '.com'} no está disponible. Prueba con otro nombre.`
            }
          </p>
        </ToggleModal>
      )}
    </div>
  );
}

export default ServiceConfiguration;
