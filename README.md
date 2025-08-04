# HairBook 💈

Una aplicación móvil para reservar servicios de peluquería y barbería, desarrollada con React Native y TypeScript.

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (v16 o superior)
- npm, yarn o pnpm
- Expo CLI
- Expo Go app en tu dispositivo móvil (opcional)
- Android Studio / Xcode (para simuladores, opcional)

### Pasos para ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Daniel-740/HairBook.git
   cd HairBook
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Instalar Expo CLI (si no lo tienes)**
   ```bash
   npm install -g @expo/cli
   ```

4. **Ejecutar el proyecto**
   ```bash
   npm start
   # o
   npx expo start
   ```

5. **Opciones de visualización:**
   - **Dispositivo físico:** Escanea el QR con Expo Go
   - **Simulador iOS:** Presiona `i` en la terminal
   - **Simulador Android:** Presiona `a` en la terminal
   - **Web:** Presiona `w` en la terminal

## ✨ Funcionalidades Implementadas

### 🔐 Autenticación
- [x] Login con validación de credenciales
- [x] Gestión de estado de usuario con Context API
- [x] Persistencia de sesión con AsyncStorage

### 🏠 Pantalla Principal
- [x] Lista de salones disponibles
- [x] Sistema de búsqueda por nombre y ubicación
- [x] Filtros por tipo de servicio
- [x] Reserva rápida desde tarjetas de salón

### 📄 Detalles del Salón
- [x] Información completa del salón
- [x] Servicios incluidos y valoraciones
- [x] Sistema de reservas con validaciones
- [x] Navegación fluida entre pantallas

### 👤 Perfil de Usuario
- [x] Información personal
- [x] Visualización de créditos disponibles
- [x] Acceso a reservas activas
- [x] Función de cerrar sesión

### 📅 Gestión de Reservas
- [x] Lista de reservas activas
- [x] Visualización de detalles de cada reserva
- [x] Eliminación de reservas con confirmación
- [x] Devolución automática de créditos
- [x] Navegación a detalles del salón reservado

### 💳 Sistema de Créditos
- [x] Visualización en tiempo real
- [x] Descuento automático al reservar
- [x] Validación de créditos suficientes
- [x] Reembolso al cancelar reservas

### 🎨 Interfaz de Usuario
- [x] Diseño con NativeWind
- [x] Navegación con Stack Navigator
- [x] Menú inferior personalizado
- [x] Estados de carga y error
- [x] Confirmaciones y feedback visual

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Expo** - Plataforma de desarrollo
- **React Native** - Framework principal
- **TypeScript** - Tipado estático
- **React Navigation** - Navegación entre pantallas
- **NativeWind** - Styling con Tailwind CSS
- **React Native Heroicons** - Iconografía

### Estado y Almacenamiento
- **React Context API** - Gestión de estado global
- **AsyncStorage** - Persistencia local de datos
- **React Hooks** - Lógica de componentes

### Desarrollo
- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **Metro** - Bundler de React Native

## 📱 Pantallas Principales

1. **Login** - Autenticación de usuario
2. **Home** - Lista y búsqueda de salones
3. **Details** - Información detallada del salón
4. **Profile** - Datos del usuario y opciones
5. **Reservations** - Gestión de citas activas
6. **Credits** - Información de créditos

## 🏗️ Arquitectura

```
src/
├── components/          # Componentes reutilizables
├── screens/            # Pantallas principales
├── navigation/         # Configuración de navegación
├── hooks/             # Custom hooks
├── context/           # Context providers
├── services/          # Lógica de negocio
├── helpers/           # Funciones utilitarias
├── interfaces/        # Tipos TypeScript
├── constants/         # Constantes de la app
└── mocks/            # Datos de prueba
```

## 🎯 Características Destacadas

- **Tipado fuerte** con TypeScript en toda la aplicación
- **Arquitectura limpia** con separación de responsabilidades
- **Reutilización de código** con helpers y hooks personalizados
- **UX intuitiva** con confirmaciones y feedback visual
- **Gestión robusta de errores** con validaciones completas
- **Optimización de rendimiento** con componentes eficientes

## 👨‍💻 Desarrollado por

**Daniel Pineda**  
[GitHub](https://github.com/Daniel-740) | [Email](mailto:daniel740code@gmail.com)

---

*Desarrollado como prueba técnica - HairBook v1.0.0*
