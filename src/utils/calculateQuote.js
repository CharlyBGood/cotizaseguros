export function calculateQuote(formData) {
  const basePrice = formData.vehicleType === 'car' ? 1000 : 800;
  const yearFactor = (2024 - parseInt(formData.year)) * 50;
  const ageFactor = parseInt(formData.driverAge) < 25 ? 300 : 0;
  const historyFactor = formData.drivingHistory === 'clean' ? 0 : 400;
  
  return basePrice + yearFactor + ageFactor + historyFactor;
}

export function getCoverageOptions(formData) {
  const basePrice = calculateQuote(formData);
  return [
    {
      name: 'Basic Coverage',
      description: 'Liability coverage for property damage and bodily injury',
      price: basePrice
    },
    {
      name: 'Standard Coverage',
      description: 'Basic coverage plus collision and comprehensive',
      price: basePrice * 1.3
    },
    {
      name: 'Premium Coverage',
      description: 'Standard coverage plus roadside assistance and rental car coverage',
      price: basePrice * 1.5
    }
  ];
}