// Función para calcular el precio de publicación de landing page
export function calculatePrice(formData) {
  let basePrice = 0;
  let features = [];
  let extras = [];
  let extrasOneTime = 0;
  let monthlyTotal = 0;

  // Precio base según el tipo de publicación
  if (formData.publicationType === 'basic') {
    basePrice = 15;
    features.push('Publicación Estándar - Hosting 1 año');
  } else if (formData.publicationType === 'premium') {
    basePrice = 35;
    features.push('Publicación Premium');
    
    // Costo del dominio según extensión
    if (formData.domainExtension) {
      switch (formData.domainExtension) {
        case '.com':
          basePrice += 12;
          features.push('Dominio .com (primer año)');
          break;
        case '.net':
          basePrice += 10;
          features.push('Dominio .net (primer año)');
          break;
        case '.org':
          basePrice += 8;
          features.push('Dominio .org (primer año)');
          break;
        case '.io':
          basePrice += 25;
          features.push('Dominio .io (primer año)');
          break;
      }
    }
  }

  // Costo de modificaciones adicionales (una sola vez)
  if (formData.modifications && formData.modifications.length > 0) {
    const modificationPrices = {
      'ecommerce': 15,
      'forms': 8,
      'blog': 12,
      'gallery': 6,
      'testimonials': 5
    };

    formData.modifications.forEach(mod => {
      if (modificationPrices[mod]) {
        extrasOneTime += modificationPrices[mod];
        extras.push(`${mod} (+$${modificationPrices[mod]})`);
      }
    });
  }

  // Costo de entrega según tiempo
  if (formData.deliveryTime) {
    switch (formData.deliveryTime) {
      case 'priority':
        extrasOneTime += 10;
        extras.push('Entrega Prioritaria (+$10)');
        break;
      case 'express':
        extrasOneTime += 25;
        extras.push('Entrega Express (+$25)');
        break;
    }
  }

  // Servicios adicionales mensuales
  if (formData.extras && formData.extras.length > 0) {
    const monthlyServices = {
      'analytics': 15,
      'maintenance': 20,
      'support': 12
    };

    formData.extras.forEach(extra => {
      if (monthlyServices[extra]) {
        monthlyTotal += monthlyServices[extra];
      }
    });
  }

  return {
    basePrice: Math.round(basePrice),
    features,
    extras,
    extrasOneTime: Math.round(extrasOneTime),
    monthlyTotal: Math.round(monthlyTotal),
    total: Math.round(basePrice + extrasOneTime)
  };
}

// Función para obtener opciones de configuración
export function getConfigurationOptions(formData) {
  const configurations = [
    {
      name: 'Publicación Básica',
      price: 0,
      features: [
        'Landing page completa',
        'URL de Netlify',
        'Hosting 30 días',
        'SSL básico'
      ]
    },
    {
      name: 'Publicación Premium',
      price: calculatePrice({ ...formData, publicationType: 'premium' }).total,
      features: [
        'Todo lo básico incluido',
        'Dominio personalizado',
        'Hosting premium 1 año',
        'Analytics incluido',
        'Soporte prioritario'
      ]
    }
  ];

  return configurations;
}
