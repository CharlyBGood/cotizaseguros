import React from 'react';
import { DollarSign, CheckCircle } from 'lucide-react';

function QuoteResult({ formData, getCoverageOptions }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <DollarSign className="w-12 h-12 mx-auto text-yellow mb-4" />
        <h3 className="text-2xl font-bold text-text mb-2">
          Insurance Quote for your {formData.year} {formData.make} {formData.model}
        </h3>
      </div>

      <div className="space-y-4">
        {getCoverageOptions().map((coverage, index) => (
          <div
            key={coverage.name}
            className="border-2 border-text/20 rounded-lg p-6 hover:border-blue transition-colors cursor-pointer bg-primary-alpha"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-text mb-2">
                  {coverage.name}
                </h4>
                <p className="text-text/80">{coverage.description}</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-text/80">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue" />
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center text-text/80">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue" />
                    Easy Claims Process
                  </li>
                  {index > 0 && (
                    <li className="flex items-center text-text/80">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue" />
                      Flexible Payment Options
                    </li>
                  )}
                  {index === 2 && (
                    <li className="flex items-center text-text/80">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue" />
                      Premium Benefits
                    </li>
                  )}
                </ul>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-yellow">
                  ${Math.round(coverage.price).toLocaleString()}
                </p>
                <p className="text-text/60">per year</p>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 w-full py-2 px-4 border-2 border-blue text-text rounded-md hover:bg-blue/20 font-medium transition-colors"
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <div className="bg-primary-alpha rounded-lg p-4 mt-6">
        <p className="text-sm text-text/80">
          * These quotes are estimates based on the information provided. Final
          rates may vary based on additional factors and verification of
          information.
        </p>
      </div>
    </div>
  );
}

export default QuoteResult;