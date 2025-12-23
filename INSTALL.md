# Instrucciones de Instalación - CompliceSalón

## Problema Actual
Actualmente hay un problema con npm que impide la instalación automática de dependencias. Esto es común en sistemas con configuraciones de permisos específicas.

## Soluciones Alternativas

### Opción 1: Usar Yarn (Recomendado)
```bash
# Instalar yarn si no lo tienes
npm install -g yarn

# Instalar dependencias
yarn install

# Ejecutar el proyecto
yarn dev
```

### Opción 2: Usar npm con permisos de administrador
```bash
# En macOS/Linux
sudo npm install

# Ejecutar el proyecto
npm run dev
```

### Opción 3: Limpiar cache de npm
```bash
# Limpiar cache
npm cache clean --force

# Reiniciar npm
rm -rf node_modules package-lock.json
npm install

# Ejecutar el proyecto
npm run dev
```

### Opción 4: Usar npx directamente
```bash
# Ejecutar sin instalación previa
npx next dev
```

## Verificación de Instalación

Una vez que el proyecto esté ejecutándose, deberías ver:
```
Ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

## Estructura del Proyecto

El proyecto ya está completamente configurado con:

- ✅ Next.js con App Router
- ✅ Tailwind CSS configurado
- ✅ Componentes React modernos
- ✅ Animaciones e interactividad
- ✅ Diseño responsivo
- ✅ Sistema de reservas
- ✅ Mapa integrado
- ✅ Formulario de contacto

## Funcionalidades Implementadas

1. **Navegación**: Barra de navegación con scroll suave
2. **Hero Section**: Animaciones y llamada a acción
3. **Servicios**: Lista completa con precios
4. **Sistema de Reservas**: Calendario interactivo, máximo 2 personas por turno
5. **Ubicación**: Mapa de Google Maps integrado
6. **Contacto**: Formulario completo y redes sociales
7. **Footer**: Información completa y enlaces

## Colores del Tema
- Naranja: #FF6B35
- Negro: #1a1a1a
- Gris claro: #f5f5f5

¡El proyecto está listo para usarse!
