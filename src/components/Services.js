'use client'

import { useEffect, useState } from 'react'

export default function Services({ onServiceSelect }) {
  const [visibleCards, setVisibleCards] = useState([])

  const services = [
    {
      id: 1,
      name: 'Corte Clásico',
      description: 'Corte tradicional con tijera y máquina. Incluye lavado y peinado.',
      price: '$25.000',
      duration: '45 min',
      features: ['Lavado incluido', 'Peinado profesional', 'Consulta de estilo']
    },
    {
      id: 2,
      name: 'Corte Moderno',
      description: 'Corte contemporáneo con técnicas avanzadas y productos premium.',
      price: '$35.000',
      duration: '60 min',
      features: ['Productos premium', 'Técnicas avanzadas', 'Estilo personalizado']
    },
    {
      id: 3,
      name: 'Barba Completa',
      description: 'Afeitado tradicional o moderno, recorte y modelado profesional.',
      price: '$20.000',
      duration: '30 min',
      features: ['Afeitado tradicional', 'Recorte preciso', 'Productos hidratantes']
    },
    {
      id: 4,
      name: 'Corte + Barba',
      description: 'Servicio completo de corte de cabello y arreglo de barba.',
      price: '$45.000',
      duration: '75 min',
      features: ['Corte completo', 'Arreglo de barba', 'Servicio premium']
    },
    {
      id: 5,
      name: 'Coloración',
      description: 'Tinte profesional con productos de alta calidad y asesoramiento.',
      price: '$40.000',
      duration: '90 min',
      features: ['Productos premium', 'Asesoramiento profesional', 'Mantenimiento']
    },
    {
      id: 6,
      name: 'Tratamiento Capilar',
      description: 'Tratamientos especializados para el cuidado del cabello.',
      price: '$30.000',
      duration: '45 min',
      features: ['Diagnóstico capilar', 'Tratamientos especializados', 'Productos terapéuticos']
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.dataset.id
            setVisibleCards(prev => [...new Set([...prev, parseInt(cardId)])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 bg-complice-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-complice-black mb-4">
            Nuestros <span className="text-complice-orange">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra gama completa de servicios profesionales de barbería,
            diseñados para realzar tu estilo único.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-id={service.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                visibleCards.includes(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-r from-complice-orange to-orange-500 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
                <p className="text-orange-100 mb-2">{service.description}</p>
                <div className="flex items-center text-orange-100">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {service.duration}
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-complice-orange mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    // Pasar el servicio seleccionado al componente padre
                    const serviceString = service.name + ' - ' + service.price;
                    onServiceSelect(serviceString);
                  }}
                  className="w-full mt-6 bg-complice-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
