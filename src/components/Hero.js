'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-complice-black via-gray-900 to-complice-black">
        <div className="absolute inset-0 bg-gradient-to-r from-complice-orange/10 to-transparent animate-pulse"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-complice-orange rounded-full animate-bounce-in" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-complice-orange rounded-full animate-bounce-in" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-complice-orange rounded-full animate-bounce-in" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-complice-orange rounded-full animate-bounce-in" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6">
            <span className="block">Complice</span>
            <span className="block text-complice-orange">Salón</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Estilo único, experiencia premium.
            <br />
            Donde la tradición se encuentra con la innovación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
              className="bg-complice-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Reservar Turno
            </button>
            <button
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-complice-orange text-complice-orange hover:bg-complice-orange hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ver Servicios
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-complice-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
