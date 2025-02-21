import React from 'react';

function VehicleDetails({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text">Year</label>
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
          <label className="block text-sm font-medium text-text">Make</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
            value={formData.make}
            onChange={(e) => setFormData({ ...formData, make: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text">Model</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text">Mileage</label>
          <input
            type="number"
            required
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
            value={formData.mileage}
            onChange={(e) =>
              setFormData({ ...formData, mileage: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;