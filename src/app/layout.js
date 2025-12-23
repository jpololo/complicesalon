import './globals.css'

export const metadata = {
  title: 'Complice Salón - Barbería Premium',
  description: 'Barbería premium en Complice Salón, La Habana. Servicios profesionales de barbería, cortes modernos y estilo único.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
