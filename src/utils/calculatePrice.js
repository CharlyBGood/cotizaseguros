// Función para calcular el precio del producto basado en las selecciones
export function calculatePrice(formData) {
  let basePrice = 0;
  let features = [];
  let extras = [];

  // Precio base según el tipo de producto
  switch (formData.productType) {
    case 'option1':
      basePrice = 299;
      break;
    case 'option2':
      basePrice = 499;
      break;
    default:
      basePrice = 199;
  }

  // Ajustes según categoría
  if (formData.category) {
    switch (formData.category) {
      case 'premium':
        basePrice *= 1.3;
        features.push('Versión Premium');
        break;
      case 'standard':
        basePrice *= 1.1;
        features.push('Versión Standard');
        break;
      case 'basic':
        features.push('Versión Básica');
        break;
    }
  }

  // Características adicionales
  if (formData.extras && formData.extras.length > 0) {
    formData.extras.forEach(extra => {
      switch (extra) {
        case 'warranty':
          basePrice += 50;
          extras.push('Garantía Extendida (+$50)');
          break;
        case 'support':
          basePrice += 30;
          extras.push('Soporte Premium (+$30)');
          break;
        case 'delivery':
          basePrice += 25;
          extras.push('Entrega Express (+$25)');
          break;
      }
    });
  }

  return {
    basePrice: Math.round(basePrice),
    features,
    extras,
    total: Math.round(basePrice)
  };
}

// Función para obtener opciones de configuración
export function getConfigurationOptions(formData) {
  const configurations = [
    {
      name: 'Configuración Básica',
      price: calculatePrice({ ...formData, category: 'basic' }).total,
      features: [
        'Funcionalidades esenciales',
        'Soporte por email',
        'Actualizaciones básicas'
      ]
    },
    {
      name: 'Configuración Standard',
      price: calculatePrice({ ...formData, category: 'standard' }).total,
      features: [
        'Todas las funcionalidades básicas',
        'Soporte prioritario',
        'Actualizaciones regulares',
        'Personalización limitada'
      ]
    },
    {
      name: 'Configuración Premium',
      price: calculatePrice({ ...formData, category: 'premium' }).total,
      features: [
        'Todas las funcionalidades',
        'Soporte 24/7',
        'Actualizaciones inmediatas',
        'Personalización completa',
        'Análisis avanzado'
      ]
    }
  ];

  return configurations;
}
