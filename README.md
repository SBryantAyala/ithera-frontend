# Ithera Frontend

Aplicación web de planificación de viajes colaborativos · ESCOM IPN

Desarrollada por el Equipo 3 — Análisis y Diseño de Sistemas · ESCOM IPN

---

## Stack tecnológico

- **React + TypeScript** — Interfaz de usuario por componentes
- **Tailwind CSS** — Estilos utilitarios y diseño responsive
- **Vite** — Bundler y entorno de desarrollo
- **React Router DOM** — Navegación entre vistas
- **Axios + React Query** — Peticiones HTTP y manejo de estado
- **Socket.io Client** — Actualizaciones en tiempo real

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/SBryantAyala/ithera-frontend.git
cd ithera-frontend

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`

---

## Flujo de trabajo del equipo

```
main          ← código estable y revisado
  └── dev     ← rama principal de integración
        ├── feat/landing        
        ├── feat/itinerary      
        ├── feat/login          
        └── feat/...            
```

### Pasos para contribuir

```bash
# 1. Siempre partir de dev actualizado
git checkout dev
git pull

# 2. Crear tu rama con el nombre de tu pantalla
git checkout -b feat/nombre-pantalla

# 3. Trabajar normalmente y hacer commits
git add .
git commit -m "feat: descripción de lo que hiciste"

# 4. Subir tu rama
git push origin feat/nombre-pantalla

# 5. Abrir un Pull Request a dev en GitHub
```

---

## Estructura del proyecto

```
src/
├── components/      ← Componentes reutilizables (Navbar, Button, Card...)
├── pages/           ← Una carpeta por pantalla
│   ├── Landing/
│   ├── Login/
│   ├── Register/
│   ├── Itinerary/
│   └── ...
├── hooks/           ← Custom hooks
├── services/        ← Llamadas a la API
├── types/           ← Interfaces TypeScript
├── assets/          ← Imágenes, íconos, fuentes
└── styles/          ← Estilos globales
```

---

## Sistema de diseño

| Token | Valor |
|---|---|
| Navbar / Purple Deep | `#1E0A4E` |
| Primary Blue | `#1E6FD9` |
| Green | `#35C56A` |
| Background | `#F4F6F8` |
| Error | `#EF4444` |

Tipografía: **Plus Jakarta Sans** (headings) · **DM Sans** (body)

Guía de paleta completa: [sbryantayala.github.io/GUIA-DE-PALETA-DE-COLORES](https://sbryantayala.github.io/GUIA-DE-PALETA-DE-COLORES)

---

## Equipo Frontend

| Nombre | Rol | Pantallas |
|---|---|---|
| Ayala Baños Bryan | Frontend Lead | Landing (P0), Itinerario (P8) |
| López Toledo Kevin | Frontend Dev | Login, Registro, Búsqueda |
| Juarez Gomez Carlos | Frontend Dev | Perfil, Módulos colaborativos |