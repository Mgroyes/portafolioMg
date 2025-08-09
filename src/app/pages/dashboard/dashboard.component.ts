import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Tipos seguros para tabs y secciones
type TabKey = 'ux' | 'web' | 'apps' | 'consultoria';
type SectionKey = 'servicios' | 'nosotros' | 'portafolio' | 'testimonios';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Estado de tabs y secciones
  selectedTab: TabKey = 'ux';
  selectedSection: SectionKey = 'servicios';
  showBenefits: boolean = false;

  // Contenido para cada tab
  tabsContent: Record<TabKey, { default: string; benefits: string }> = {
    ux: {
      default: `Soluciones de diseño centradas en el usuario que combinan estética y funcionalidad.
Desde la estructuración visual hasta la experiencia interactiva, nos encargamos
de maquetar interfaces responsivas y diseñar productos digitales intuitivos, listos
para escalar y adaptarse a cualquier dispositivo.`,
      benefits: `Nuestros servicios ayudan a mejorar la experiencia del usuario, aumentar la retención 
y optimizar la conversión. 
Obtendrás un diseño profesional, coherente con tu marca y alineado con tus objetivos, 
que no solo se ve bien, sino que también funciona de forma eficiente desde el primer clic.`
    },
    web: {
      default: `Diseño y desarrollo sitios web personalizados, funcionales y adaptables a cualquier dispositivo. 
Combinamos estética, usabilidad y rendimiento para crear experiencias digitales efectivas. 
Cada proyecto se construye a medida, alineado con los objetivos y la identidad de tu marca.`,
      benefits: `Un diseño web profesional mejora la percepción de tu marca, refuerza la confianza del usuario 
y potencia la conversión. Creamos sitios visualmente atractivos, funcionales y optimizados para 
todos los dispositivos, lo que garantiza una experiencia fluida y efectiva desde cualquier punto 
de contacto digital. Tu proyecto no solo se verá bien, también generará resultados reales.`
    },
    apps: {
      default: `Diseño de interfaces para aplicaciones móviles y web tipo SPA, enfocadas en rendimiento, escalabilidad
y una experiencia fluida. Ya sea una app nativa o progresiva, creo productos funcionales que combinan 
diseño atractivo con arquitectura eficiente, listos para integrarse con cualquier tecnología o backend.`,
      benefits: `Obtendrás una aplicación rápida, adaptable y pensada para el usuario final. 
Con una estructura sólida y un diseño visual coherente, tu app destacará en usabilidad 
y rendimiento, facilitando la retención, interacción y crecimiento del proyecto.`
    },
    consultoria: {
      default: `Brindamos acompañamiento estratégico en diseño, desarrollo web y experiencia digital. 
Analizo tu proyecto, identificamos oportunidades de mejora y proponemmos soluciones 
a medida que se optimizan procesos, diseño y rendimiento digital.`,
      benefits: `Con mi asesoría, tomarás decisiones más claras y efectivas para tu proyecto. 
Ahorrarás tiempo, evitarás errores comunes y enfocarás tu inversión 
en lo que realmente genera valor y resultados medibles.`
    }
  };

  // Cambia de tab
  selectTab(tabKey: TabKey): void {
    this.selectedTab = tabKey;
    this.showBenefits = false;
  }

  // Alterna beneficios
  toggleBenefits(): void {
    this.showBenefits = !this.showBenefits;
  }

  // Cambia de sección (step lateral)
  setSection(section: SectionKey): void {
    this.selectedSection = section;
    this.showBenefits = false;
  }

  // Devuelve el texto actual
  get currentText(): string {
    const tab = this.tabsContent[this.selectedTab];
    return this.showBenefits ? tab.benefits : tab.default;
  }
}
