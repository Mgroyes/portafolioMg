# 🎨 PortafolioMg – Landing Page Interactiva con Angular 17

PortafolioMg es una landing page moderna, responsiva y profesional desarrollada con Angular 17.  
Está construida con componentes standalone, una arquitectura modular clara y buenas prácticas de diseño UI/UX. Esta aplicación es ideal como presentación personal, empresarial o portafolio de servicios.

---

## 🚀 Tecnologías utilizadas

- Angular 17 (con componentes standalone)
- TypeScript
- Taildwind
- HTML + CSS
- Angular Router
- SPA (Single Page Application)

---

## 📦 Funcionalidades implementadas

✅ Landing page de bienvenida con CTA atractivo  
✅ Navegación tipo SPA entre secciones sin recargas  
✅ Secciones activas: Servicios, Nosotros, Portafolio, Testimonios  
✅ Diseño completamente responsive  
✅ Modularización por carpetas y componentes  
✅ Navegación con `routerLink` y lógica dinámica (`selectedSection`, `selectedTab`)  
✅ Código limpio, bien estructurado y mantenible

---

## 📁 Estructura del proyecto

```bash
src/
└── app/
    ├── pages/
    │   └── dashboard/
    │       ├── dashboard.component.ts
    │       ├── dashboard.routes.ts
    │       ├── servicios/
    │       ├── nosotros/
    │       ├── portafolio/
    │       └── testimonios/
    └── app.routes.ts

---

HomeComponent: Pantalla inicial con branding y llamado a la acción.

DashboardComponent: Componente SPA con navegación dinámica por secciones.

Rutas organizadas: dashboard.routes.ts maneja rutas internas específicas.

---

## 🛠️ Instalación y ejecución

Clona este repositorio:
git clone https://github.com/Mgroyes/PortafolioMg.git
cd PortafolioMg

---

npm install
ng serve
http://localhost:4200


