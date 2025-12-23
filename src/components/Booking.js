'use client'

import { useState } from 'react'

export default function Booking({ selectedService, onServiceChange }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Estado para el calendario
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const services = [
    'Corte Clásico - $25.000',
    'Corte Moderno - $35.000',
    'Barba Completa - $20.000',
    'Corte + Barba - $45.000',
    'Coloración - $40.000',
    'Tratamiento Capilar - $30.000'
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ]

  // Funciones para el calendario
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
  }

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
    const today = new Date()
    const currentDate = new Date(currentYear, currentMonth, 1)

    const days = []

    // Días del mes anterior para completar la primera semana
    const prevMonthDays = getDaysInMonth(currentMonth - 1, currentYear)
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        month: currentMonth - 1,
        year: currentYear,
        isCurrentMonth: false,
        isAvailable: false,
        isToday: false,
        dateString: ''
      })
    }

    // Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const isToday = date.toDateString() === today.toDateString()
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate())

      days.push({
        day,
        month: currentMonth,
        year: currentYear,
        isCurrentMonth: true,
        isAvailable: !isPast,
        isToday,
        dateString: date.toISOString().split('T')[0]
      })
    }

    // Días del mes siguiente para completar la última semana
    const remainingCells = 42 - days.length // 6 semanas * 7 días = 42 celdas
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        month: currentMonth + 1,
        year: currentYear,
        isCurrentMonth: false,
        isAvailable: false,
        isToday: false,
        dateString: ''
      })
    }

    return days
  }

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    }
  }

  const calendarDays = generateCalendarDays()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)

      // Reset form
      setSelectedDate('')
      setSelectedTime('')
      onServiceChange('') // Limpiar el servicio seleccionado
      setClientName('')
      setClientPhone('')

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    }, 2000)
  }

  return (
    <section id="booking" className="py-20 bg-complice-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Reserva tu <span className="text-complice-orange">Turno</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Agenda tu cita con nuestros barberos profesionales.
            Cada turno tiene una duración máxima de 1 hora.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {showSuccess && (
            <div className="mb-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg animate-slide-in">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ¡Reserva confirmada! Te esperamos en Complice Salón.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                Selecciona tu Servicio
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <label key={index} className="relative">
                    <input
                      type="radio"
                      name="service"
                      value={service}
                      checked={selectedService === service}
                      onChange={(e) => onServiceChange(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedService === service
                        ? 'border-complice-orange bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <span className={`font-medium ${
                        selectedService === service ? 'text-complice-orange' : 'text-gray-700'
                      }`}>
                        {service}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Selection - Calendario */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                Selecciona la Fecha
              </label>

              {/* Calendario */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                {/* Header del calendario */}
                <div className="flex justify-between items-center mb-4">
                  <button
                    type="button"
                    onClick={() => navigateMonth('prev')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {monthNames[currentMonth]} {currentYear}
                  </h3>

                  <button
                    type="button"
                    onClick={() => navigateMonth('next')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Días de la semana */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Días del calendario */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => day.isAvailable && setSelectedDate(day.dateString)}
                      disabled={!day.isAvailable}
                      className={`p-3 text-center text-sm rounded-lg transition-all duration-200 ${
                        day.isCurrentMonth
                          ? day.isAvailable
                            ? selectedDate === day.dateString
                              ? 'bg-complice-orange text-white hover:bg-orange-600'
                              : day.isToday
                                ? 'bg-orange-100 text-complice-orange border-2 border-complice-orange'
                                : 'hover:bg-gray-100 text-gray-700'
                            : 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      {day.day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                Selecciona la Hora (Formato 12 horas)
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 border-2 rounded-lg text-center transition-all duration-200 ${
                      selectedTime === time
                        ? 'border-complice-orange bg-orange-50 text-complice-orange'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-complice-orange focus:outline-none transition-colors duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-complice-orange focus:outline-none transition-colors duration-200"
                  placeholder="+569 1234 5678"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting || !selectedDate || !selectedTime || !selectedService || !clientName || !clientPhone}
                className={`px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform ${
                  isSubmitting || !selectedDate || !selectedTime || !selectedService || !clientName || !clientPhone
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-complice-orange hover:bg-orange-600 hover:scale-105 shadow-lg hover:shadow-xl text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </div>
                ) : (
                  'Confirmar Reserva'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
