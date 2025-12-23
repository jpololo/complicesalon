# CompliceSalón - Barbería Premium

Una web moderna y elegante para CompliceSalón, construida con Next.js, Tailwind CSS y animaciones interactivas.

## Características

- 🎨 Diseño moderno con colores naranja y negro
- 📱 Totalmente responsivo
- ⚡ Animaciones e interactividad con el usuario
- 📅 Sistema de reservas integrado
- 🗺️ Ubicación con mapa integrado
- 💬 Formulario de contacto
- 📋 Lista completa de servicios y precios
- 🔄 Navegación suave entre secciones

## Tecnologías Utilizadas

- **Next.js** - Framework React para producción
- **Tailwind CSS** - Framework CSS utilitario
- **React Hooks** - Para estado e interacciones
- **Google Maps** - Para mostrar ubicación
- **Inter Font** - Tipografía moderna

## Instalación y Ejecución

### Solución Rápida (Recomendada)
Si tienes problemas con npm, usa esta opción:

```bash
npm run dev-npx
```

### Instalación Normal
1. **Instalar dependencias:**
   ```bash
   npm install
   # o si npm falla:
   yarn install
   ```

2. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

### Solución Alternativa (sin instalación)
```bash
npx next dev --turbo
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.js          # Layout principal
│   ├── page.js           # Página principal
│   └── globals.css       # Estilos globales
└── components/
    ├── Navigation.js     # Barra de navegación
    ├── Hero.js          # Sección hero
    ├── Services.js      # Servicios y precios
    ├── Booking.js       # Sistema de reservas
    ├── Location.js      # Ubicación y mapa
    ├── Contact.js       # Formulario de contacto
    └── Footer.js        # Pie de página
```

## Funcionalidades

### Sistema de Reservas
- Selección de servicios
- Calendario interactivo (próximos 7 días)
- Horarios disponibles (9:00 - 19:00)
- Información del cliente
- Validación de formulario
- Confirmación visual

### Servicios y Precios
- Corte Clásico: $25.000
- Corte Moderno: $35.000
- Barba Completa: $20.000
- Corte + Barba: $45.000
- Coloración: $40.000
- Tratamiento Capilar: $30.000

### Ubicación
- Mapa integrado de Google Maps
- Información de contacto completa
- Instrucciones de cómo llegar
- Horarios de atención

### Contacto
- Formulario de contacto
- Información de redes sociales
- WhatsApp y teléfono directo
- Email de contacto

## Colores y Diseño

- **Naranja Principal:** #FF6B35
- **Negro Principal:** #1a1a1a
- **Gris Claro:** #f5f5f5
- **Fondos:** Gradientes dinámicos
- **Animaciones:** Fade-in, slide-in, bounce-in

## Responsive Design

La web está optimizada para:
- 📱 Móviles (320px+)
- 📲 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1280px+)

## Animaciones

- Scroll-triggered animations
- Hover effects
- Loading states
- Success animations
- Smooth scrolling navigation

## Próximas Funcionalidades

- [ ] Integración con API de reservas
- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] Notificaciones por email
- [ ] Integración con WhatsApp Business
- [ ] Galería de fotos

## Contacto

Para consultas sobre el proyecto:
- Instagram: [@complices_salon](https://www.instagram.com/complices_salon?igsh=NmVid2EzenZ1OGIz)
- Email: info@complicesalon.cu

---

Desarrollado con ❤️ para CompliceSalón
