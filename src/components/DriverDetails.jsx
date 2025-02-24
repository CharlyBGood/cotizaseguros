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

      {formData.year &&
        formData.make &&
        formData.model &&
        formData.driverAge && (
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