import React, { useState } from 'react';
import ToggleModal from './modals/ToggleModal';

function ProductDetails({ formData, setFormData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleChange = (e) => {
    const isChecked = e.target.checked;
    setFormData({ ...formData, features: isChecked ? 'premium' : '' });
    if (isChecked) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-portfolio-text mb-1">
          Detalles del Producto
        </h2>
        <p className="text-portfolio-text/70 text-sm">
          Especifica las características de tu producto
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-portfolio-text">Categoría</label>
          <select
            className="mt-1 block w-full rounded-md bg-portfolio-medium/50 border-portfolio-accent/30 text-portfolio-text placeholder-portfolio-text/50 focus:border-portfolio-gradient-4 focus:ring-portfolio-gradient-4"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="basic">Básica</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-portfolio-text">Marca</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md bg-portfolio-medium/50 border-portfolio-accent/30 text-portfolio-text placeholder-portfolio-text/50 focus:border-portfolio-gradient-4 focus:ring-portfolio-gradient-4"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            placeholder="Ingresa la marca"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-portfolio-text">Modelo</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md bg-portfolio-medium/50 border-portfolio-accent/30 text-portfolio-text placeholder-portfolio-text/50 focus:border-portfolio-gradient-4 focus:ring-portfolio-gradient-4"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            placeholder="Ingresa el modelo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-portfolio-text">Características Premium</label>
          <input
            type="checkbox"
            className="mt-1 block"
            checked={formData.features === 'premium'}
            onChange={handleToggleChange}
          />
        </div>
      </div>

      {isModalOpen && (
        <ToggleModal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-center font-bold text-portfolio-text">Características Premium</h2>
          <p className="text-portfolio-text/80 mt-4 text-center">
            Al seleccionar características premium, tendrás acceso a <b className='text-portfolio-gradient-4'>funcionalidades avanzadas</b> y soporte prioritario.
          </p>
        </ToggleModal>
      )}
    </div>
  );
}

export default ProductDetails;
