import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ToggleButton from './modals/ToggleButton';

function ProductOptions({ formData, setFormData, onGetSummary }) {
  const handleToggleChange = (field) => (e) => {
    const currentExtras = formData.extras || [];
    const newExtras = e.target.checked 
      ? [...currentExtras, field]
      : currentExtras.filter(extra => extra !== field);
    
    setFormData({ ...formData, extras: newExtras });
  };

  const handlePreferenceChange = (e) => {
    setFormData({ ...formData, preferences: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-portfolio-text mb-1">
          Opciones Adicionales
        </h2>
        <p className="text-portfolio-text/70 text-sm">
          Personaliza tu producto con extras y preferencias
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ToggleButton
          getData={(formData.extras || []).includes('warranty')}
          handleToggleChange={handleToggleChange}
          data="warranty"
          label="Garantía Extendida"
        />
        <ToggleButton
          getData={(formData.extras || []).includes('support')}
          handleToggleChange={handleToggleChange}
          data="support"
          label="Soporte Premium"
        />
        <ToggleButton
          getData={(formData.extras || []).includes('delivery')}
          handleToggleChange={handleToggleChange}
          data="delivery"
          label="Entrega Express"
        />

        <div>
          <label className="block text-sm font-medium text-portfolio-text">
            Preferencias Especiales
          </label>
          <select
            className="mt-1 block w-full rounded-md bg-portfolio-medium/50 border-portfolio-accent/30 text-portfolio-text focus:border-portfolio-gradient-4 focus:ring-portfolio-gradient-4"
            value={formData.preferences}
            onChange={handlePreferenceChange}
          >
            <option value="">Sin preferencias especiales</option>
            <option value="eco">Versión Eco-friendly</option>
            <option value="performance">Alto Rendimiento</option>
            <option value="compact">Diseño Compacto</option>
          </select>
        </div>
      </div>

      {formData.category &&
        formData.brand &&
        formData.model && (
          <div className="mt-6">
            <button
              type="button"
              onClick={onGetSummary}
              className="w-full py-2.5 px-6 bg-portfolio-gradient-4 text-portfolio-text rounded-md hover:bg-portfolio-gradient-3 flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ver Resumen del Carrito
            </button>
          </div>
        )}
    </div>
  );
}

export default ProductOptions;
