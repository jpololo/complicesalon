'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-complice-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-complice-orange cursor-pointer" onClick={() => scrollToSection('hero')}>
              Complice Salón
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-complice-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-complice-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="text-white hover:text-complice-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Reservas
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-white hover:text-complice-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Ubicación
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-complice-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-complice-orange p-2 rounded-md transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-complice-black/95 backdrop-blur-md">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-complice-orange block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-complice-orange block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-white hover:text-complice-orange block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Reservas
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-white hover:text-complice-orange block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-complice-orange block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
