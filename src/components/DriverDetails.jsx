import React from 'react';
import { Shield } from 'lucide-react';

function DriverDetails({ formData, setFormData, onGetQuote }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text">
            Driver Age
          </label>
          <input
            type="number"
            min="16"
            max="100"
            required
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
            value={formData.driverAge}
            onChange={(e) =>
              setFormData({ ...formData, driverAge: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text">
            Driving History
          </label>
          <select
            className="mt-1 block w-full rounded-md bg-primary/50 border-text/20 text-text placeholder-text/50 focus:border-blue focus:ring-blue"
            value={formData.drivingHistory}
            onChange={(e) =>
              setFormData({
                ...formData,
                drivingHistory: e.target.value,
              })
            }
          >
            <option value="clean">Clean Record</option>
            <option value="minor">Minor Violations</option>
            <option value="major">Major Violations</option>
          </select>
        </div>
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
              Get Detailed Quote
            </button>
          </div>
        )}
    </div>
  );
}

export default DriverDetails;