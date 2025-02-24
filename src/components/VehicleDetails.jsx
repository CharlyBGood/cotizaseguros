import React, { useState } from 'react';
import ToggleModal from './modals/ToggleModal';

function VehicleDetails({ formData, setFormData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleChange = (e) => {
    const isChecked = e.target.checked;
    setFormData({ ...formData, mileage: isChecked ? '0' : '' });
    if (isChecked) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text">Año</label>
          <input
            type="number"
            min="1900"
            max="2024"
            required
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text">Marca</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
            value={formData.make}
            onChange={(e) => setFormData({ ...formData, make: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text">Modelo</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text">Sin Rodar</label>
          <input
            type="checkbox"
            className="mt-1 block"
            checked={formData.mileage === '0'}
            onChange={handleToggleChange}
          />
        </div>
      </div>

      {isModalOpen && (
        <ToggleModal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-center font-bold">Información importante</h2>
          <p className="text-text/80 mt-4 text-center">
            Tenés que tener en cuenta que para algunas coberturas vamos a solicitarte el Certificado de <b className='text-yellow'>No Rodamiento</b> o la factura de compra.
          </p>
        </ToggleModal>
      )}
    </div>
  );
}

export default VehicleDetails;