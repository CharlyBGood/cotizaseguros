import React from 'react';
import { Package, ShoppingBag } from 'lucide-react';

function ProductTypeSelection({ formData, setFormData }) {
  const productTypes = [
    {
      id: 'option1',
      name: 'Opción 1',
      description: 'Producto diseñado para necesidades básicas y eficiencia',
      icon: Package,
      features: ['Funcionalidad esencial', 'Fácil de usar', 'Precio accesible']
    },
    {
      id: 'option2',
      name: 'Opción 2', 
      description: 'Producto avanzado con características premium',
      icon: ShoppingBag,
      features: ['Funcionalidades avanzadas', 'Máxima personalización', 'Soporte premium']
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-portfolio-text mb-1">
          Selecciona tu tipo de producto
        </h2>
        <p className="text-portfolio-text/70 text-sm">
          Elige la opción que mejor se adapte a tus necesidades
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {productTypes.map((type) => {
          const IconComponent = type.icon;
          return (
            <div
              key={type.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                formData.productType === type.id
                  ? 'border-portfolio-gradient-4 bg-portfolio-gradient-4/10'
                  : 'border-portfolio-accent hover:border-portfolio-gradient-2'
              }`}
              onClick={() => setFormData({ ...formData, productType: type.id })}
            >
              <div className="flex items-center mb-3">
                <IconComponent className="w-6 h-6 text-portfolio-gradient-4 mr-2" />
                <h3 className="text-lg font-semibold text-portfolio-text">
                  {type.name}
                </h3>
              </div>
              
              <p className="text-portfolio-text/80 mb-3 text-sm">
                {type.description}
              </p>
              
              <ul className="space-y-1">
                {type.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-xs text-portfolio-text/70">
                    <div className="w-1.5 h-1.5 bg-portfolio-gradient-4 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductTypeSelection;
