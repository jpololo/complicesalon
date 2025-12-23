'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Booking from '../components/Booking'
import Location from '../components/Location'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [selectedService, setSelectedService] = useState('')

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    // Navegar a la sección de reservas
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services onServiceSelect={handleServiceSelect} />
      <Booking selectedService={selectedService} onServiceChange={setSelectedService} />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}
