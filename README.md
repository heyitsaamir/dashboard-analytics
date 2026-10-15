# Northstar Analytics

Un panel de análisis elegante y adaptable, con modo oscuro, desarrollado como una aplicación web progresiva (PWA) instalable. Northstar presenta indicadores de ingresos, clientes, conversión, adquisición y transacciones mediante un conjunto de datos local determinista, lo que permite realizar demostraciones rápidas y reproducibles sin necesidad de un backend.

## Primeros pasos

Se requiere una versión LTS activa de Node.js (`20.19+`, `22.13+` o `24+`).

```bash
npm install
npm run dev
```

Abre la URL local que muestra Vite. De forma predeterminada, el entorno de desarrollo siempre utiliza los datos de prueba deterministas de `src/data/demoData.ts`; no realiza llamadas a ningún backend ni a API de datos externas. Al reiniciar o recargar la aplicación, se obtienen los mismos indicadores clave de rendimiento (KPI) y los mismos datos de gráficos y transacciones.

## Comandos

| Comando | Propósito |
| --- | --- |
| `npm run dev` | Iniciar Vite con datos de demostración locales y compatibilidad con PWA |
| `npm run test` | Ejecutar una vez la suite de pruebas específicas de Vitest |
| `npm run test:watch` | Ejecutar las pruebas en modo de observación |
| `npm run lint` | Revisar el código fuente de TypeScript y React con ESLint |
| `npm run typecheck` | Ejecutar las comprobaciones de los proyectos de TypeScript sin generar archivos |
| `npm run build` | Comprobar los tipos y generar el paquete de producción |
| `npm run preview` | Servir el paquete de producción localmente |

## Arquitectura

- **Vite + React + TypeScript** proporcionan la estructura base de la aplicación, tipado estricto y un desarrollo local ágil.
- **Recharts** genera visualizaciones adaptables de ingresos y adquisición.
- **Los datos de prueba deterministas** de `src/data/demoData.ts` son la única fuente de datos local para los KPI, los gráficos y las transacciones recientes.
- **La interfaz de usuario basada en componentes** separa la navegación, la cabecera, las tarjetas de métricas, los gráficos y la tabla de actividad en `src/components`.
- **Vitest + Testing Library** cubren los aspectos esenciales del renderizado, el comportamiento de la navegación, la estabilidad de los datos de prueba y el formato de los datos.

## Funcionamiento de la PWA

`vite-plugin-pwa` genera el manifiesto de la aplicación web y el service worker de Workbox. Los recursos de producción se almacenan previamente en caché para permitir el inicio sin conexión, las cachés obsoletas se eliminan automáticamente y el service worker se actualiza en segundo plano. La aplicación incluye metadatos para mostrarse en modo independiente, colores de tema y de fondo, un icono táctil de Apple e iconos PNG/SVG estándar y enmascarables.

Para comprobar localmente la instalación y el funcionamiento sin conexión:

```bash
npm run build
npm run preview
```

Abre la vista previa en un navegador basado en Chromium, utiliza la opción de instalación del navegador y luego prueba la aplicación con la red desactivada en las herramientas de desarrollo (DevTools). La compatibilidad con PWA también está habilitada al ejecutar `npm run dev` para facilitar la inspección durante el desarrollo.
