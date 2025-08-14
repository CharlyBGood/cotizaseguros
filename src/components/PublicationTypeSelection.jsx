import React from 'react';
import { Globe, Zap, Crown, CheckCircle } from 'lucide-react';

function PublicationTypeSelection({ formData, setFormData }) {
  const publicationTypes = [
    {
      id: 'basic',
      name: 'Publicación Estándar',
      price: 'Desde $15',
      description: 'Solución accesible con hosting profesional por 1 año',
      icon: Globe,
      features: [
        'Landing page completa',
        'URL personalizada de SinapsiaLab',
        'Hosting profesional por 1 año',
        'Certificado SSL incluido',
        'Soporte técnico especializado'
      ],
      recommended: false
    },
    {
      id: 'premium',
      name: 'Publicación Premium', 
      price: 'Desde $35',
      description: 'Dominio personalizado y funcionalidades avanzadas',
      icon: Crown,
      features: [
        'Todo lo de la versión estándar',
        'Dominio personalizado (.com, .net, etc)',
        'Hosting premium por 1 año',
        'Analytics avanzado incluido',
        'Soporte prioritario',
        'Modificaciones adicionales disponibles'
      ],
      recommended: true
    }
  ];

  return (
    <div className="space-y-3">
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-semibold text-portfolio-text mb-1">
          Publica tu Landing Page con SinapsiaLab
        </h2>
        <p className="text-portfolio-text/70 text-xs">
          Soluciones digitales a medida. Elige la opción que impulse tu negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {publicationTypes.map((type) => {
          const IconComponent = type.icon;
          return (
            <div
              key={type.id}
              className={`border-2 rounded-lg p-3 cursor-pointer transition-all hover-lift relative ${
                formData.publicationType === type.id
                  ? 'border-portfolio-gradient-4 bg-portfolio-gradient-4/10'
                  : 'border-portfolio-accent hover:border-portfolio-gradient-2'
              }`}
              onClick={() => setFormData({ ...formData, publicationType: type.id })}
            >
              {type.recommended && (
                <div className="absolute -top-1 left-3 bg-portfolio-gradient-4 text-portfolio-text px-2 py-0.5 rounded text-xs font-medium">
                  Recomendado
                </div>
              )}
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <IconComponent className="w-5 h-5 text-portfolio-gradient-4 mr-2" />
                  <h3 className="text-base font-semibold text-portfolio-text">
                    {type.name}
                  </h3>
                </div>
                <div className="text-portfolio-gradient-4 font-bold text-sm">
                  {type.price}
                </div>
              </div>
              
              <p className="text-portfolio-text/80 mb-2 text-xs">
                {type.description}
              </p>
              
              <ul className="space-y-0.5">
                {type.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center text-xs text-portfolio-text/70">
                    <CheckCircle className="w-2.5 h-2.5 text-portfolio-gradient-4 mr-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {type.features.length > 3 && (
                  <li className="text-xs text-portfolio-text/50 ml-4">
                    +{type.features.length - 3} más...
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>

      {formData.publicationType === 'basic' && (
        <div className="bg-portfolio-medium/30 rounded-lg p-3 border border-portfolio-accent/20">
          <div className="flex items-center mb-1">
            <Zap className="w-3 h-3 text-portfolio-gradient-4 mr-2" />
            <span className="text-xs font-medium text-portfolio-text">Hosting Profesional</span>
          </div>
          <p className="text-xs text-portfolio-text/70">
            Tu landing page estará lista con hosting profesional por 1 año completo, con la calidad y confiabilidad de SinapsiaLab.
          </p>
        </div>
      )}
    </div>
  );
}

export default PublicationTypeSelection;
