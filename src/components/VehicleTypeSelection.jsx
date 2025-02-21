import React from 'react';
import { Car, Bike } from 'lucide-react';

function VehicleTypeSelection({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${formData.vehicleType === 'car'
              ? 'border-blue bg-blue/20'
              : 'border-text/20 hover:border-blue/50'
            }`}
          onClick={() => setFormData({ ...formData, vehicleType: 'car' })}
        >
          <Car className="w-12 h-12 mb-4 text-yellow" />
          <h3 className="text-lg font-semibold text-text">Auto</h3>
          <p className="text-text/80">Covertura integral para tu auto</p>
        </div>

        <div
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${formData.vehicleType === 'motorcycle'
              ? 'border-blue bg-blue/20'
              : 'border-text/20 hover:border-blue/50'
            }`}
          onClick={() => setFormData({ ...formData, vehicleType: 'motorcycle' })}
        >
          <Bike className="w-12 h-12 mb-4 text-yellow" />
          <h3 className="text-lg font-semibold text-text">Moto</h3>
          <p className="text-text/80">Cobertura especializada para tu moto</p>
        </div>
      </div>
    </div>
  );
}

export default VehicleTypeSelection;