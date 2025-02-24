import React from 'react';
import { Shield } from 'lucide-react';
import ToggleButton from './modals/ToggleButton';

function DriverDetails({ formData, setFormData, onGetQuote }) {
  const handleToggleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.checked });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ToggleButton
          getData={formData.gnc || false}
          handleToggleChange={handleToggleChange}
          data="gnc"
          label="GNC"
        />
        <ToggleButton
          getData={formData.alarma || false}
          handleToggleChange={handleToggleChange}
          data="alarma"
          label="Alarma"
        />
        <ToggleButton
          getData={formData.rastreoSatelital || false}
          handleToggleChange={handleToggleChange}
          data="rastreoSatelital"
          label="Rastreo Satelital"
        />
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <label className="block text-sm font-medium text-text" htmlFor="usodelvehiculo">
            Uso que le das al vehículo
          </label>
          <input
            type="text"
            id="usodelvehiculo"
            name="usodelvehiculo"
            value={formData.usodelvehiculo}
            onChange={(e) =>
              setFormData({ ...formData, usodelvehiculo: e.target.value })
            }
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
          />
          <label className="block text-sm font-medium text-text" htmlFor="codigopostal">
            Código postal
          </label>
          <input
            type="text"
            id="codigopostal"
            name="codigopostal"
            value={formData.codigopostal}
            onChange={(e) =>
              setFormData({ ...formData, codigopostal: e.target.value })
            }
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
          />
          <label className="block text-sm font-medium text-text" htmlFor="localidad">
            Localidad
          </label>
          <input
            type="text"
            id="localidad"
            name="localidad"
            value={formData.localidad}
            onChange={(e) =>
              setFormData({ ...formData, localidad: e.target.value })
            }
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
          />

        </div>
      </div>

      {formData.usodelvehiculo &&
        formData.codigopostal &&
        formData.localidad && (
          <div className="mt-8">
            <button
              type="button"
              onClick={onGetQuote}
              className="w-full py-3 px-6 bg-blue text-text rounded-md hover:bg-blue/80 flex items-center justify-center"
            >
              <Shield className="w-5 h-5 mr-2" />
              Get Quote
            </button>
          </div>
        )}
    </div>
  );
}

export default DriverDetails;