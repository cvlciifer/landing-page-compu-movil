# Landing Page - Ingeniería en Informática UTEM

Landing page moderna y responsiva para la carrera de Ingeniería en Informática de la Universidad Tecnológica Metropolitana (UTEM).

**Proyecto de Curso - Computación Móvil**  
**Fecha de entrega:** 09 de diciembre de 2025

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una landing page diseñada para presentar la propuesta de valor de la carrera, captar estudiantes potenciales y facilitar el proceso de selección universitaria. El sitio está optimizado especialmente para dispositivos móviles.

## Tecnologías Utilizadas

- **[Astro](https://astro.build)** - Framework de frontend moderno
- **[Tailwind CSS](https://tailwindcss.com)** - Sistema de estilos utilitario
- **TypeScript** - Tipado estático para JavaScript

## Características

- Diseño moderno y atractivo
- Totalmente responsivo (móvil, tablet, escritorio)
- Modo claro/oscuro
- Optimización de rendimiento e imágenes
- Componentes reutilizables
- SEO optimizado
- Orientado a dispositivos móviles

## Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Páginas del sitio
│   └── config.ts        # Configuración del sitio
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
└── package.json
```

## Instalación y Configuración

### Prerrequisitos

- Node.js 18.0 o superior
- npm o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL-del-repositorio]
   cd landing-page-compu-movil
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Configurar el proyecto**
   
   Edita el archivo `src/config.ts` con la información de tu carrera.

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   pnpm run dev
   ```

   El sitio estará disponible en `http://localhost:4321`

## Comandos Disponibles

| Comando                | Acción                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Instala las dependencias                    |
| `npm run dev`          | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`        | Construye el sitio para producción en `./dist/` |
| `npm run preview`      | Previsualiza la build localmente            |

## Secciones Implementadas

### Hero Principal
- Título y subtítulo con propuesta de valor
- Call-to-action (CTA) destacado
- Imagen representativa de la carrera

### Características
- Listado de mínimo 3 características principales
- Cada una incluye título, descripción e ícono

### Sobre Nosotros
- Información del equipo de desarrollo
- Roles de cada miembro

### Contacto
- Enlaces a canales oficiales de la Universidad
- Correo electrónico
- Redes sociales
- WhatsApp

### Footer
- Información básica de la carrera
- Datos de contacto de UTEM

## Responsividad

El sitio está optimizado para:
- Móviles (< 768px)
- Tablets (768px - 1024px)
- Escritorio (> 1024px)

## Despliegue

### Deploy en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F[tu-usuario]%2F[tu-repo])

### Deploy en Netlify

1. Haz push de tu código a GitHub
2. Conecta tu repositorio en [Netlify](https://netlify.com)
3. Configura el comando de build: `npm run build`
4. Configura el directorio de publicación: `dist`

## Notas del Proyecto

- El proyecto cumple con todos los requerimientos funcionales y técnicos especificados
- Se implementaron buenas prácticas de estructura y componentes en Astro
- Tailwind CSS se utilizó para crear un diseño responsivo sin CSS tradicional
- Los componentes son reutilizables y tienen nombres descriptivos
- El código está organizado, documentado y evita duplicación innecesaria

## Licencia

Este proyecto fue desarrollado como parte del curso de Computación Móvil de la UTEM.

---

**Universidad Tecnológica Metropolitana (UTEM)**  
**Carrera:** Ingeniería en Informática  
**Curso:** Computación Móvil  
**Año:** 2025
