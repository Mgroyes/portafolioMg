import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TabKey = 'ux' | 'web' | 'apps' | 'consultoria';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent {
  selectedTab: TabKey = 'ux';
  showBenefits = false;

  tabsContent: Record<TabKey, { default: string; benefits: string }> = {
    ux: {
      default: `Soluciones de diseño centradas en el usuario que combinan estética y funcionalidad.
      Desde la estructuración visual hasta la experiencia interactiva, nos encargamos
      de maquetar interfaces responsivas y diseñar productos digitales intuitivos, listos
      para escalar y adaptarse a cualquier dispositivo.`,
      benefits: `Nuestros servicios ayudan a mejorar la experiencia del usuario, aumentar la retención 
      y optimizar la conversión.
      Obtendrás un diseño profesional, coherente con tu marca y alineado con tus objetivos, 
      que no solo se ve bien, sino que también funciona de forma eficiente desde el primer clic. `
    },
    web: {
      default: `Diseño y desarrollo de sitios web personalizados, funcionales y adaptables a cualquier dispositivo. 
Combinamos estética, usabilidad y rendimiento para crear experiencias digitales efectivas. 
Cada proyecto se construye a medida, alineado con los objetivos y la identidad de tu marca.`,
      benefits: `Un diseño web profesional mejora la percepción de tu marca, refuerza la confianza del usuario 
y potencia la conversión. Creamos sitios visualmente atractivos, funcionales y optimizados para 
todos los dispositivos, lo que garantiza una experiencia fluida y efectiva desde cualquier punto 
de contacto digital. Tu proyecto no solo se verá bien, también generará resultados reales.`
    },
    apps: {
      default: `Diseño de interfaces para aplicaciones móviles y web tipo SPA, enfocadas en rendimiento, escalabilidad 
      y una experiencia fluida. Ya sea una app nativa o progresiva, creamos productos funcionales que combinan 
      un diseño atractivo con una arquitectura eficiente. Además, el desarrollo y consumo API REST y gestión bases 
      de datos modernas, asegurando una integración sólida con cualquier tecnología o backend.`,
      benefits: `Obtendrás una aplicación intuitiva, adaptable y pensada para el usuario final. 
Con una estructura sólida y un diseño visual coherente, tu app destacará en usabilidad 
y rendimiento, facilitando la retención, interacción y crecimiento del proyecto.`
    },
    consultoria: {
      default: `Brindamos acompañamiento estratégico en diseño, desarrollo web y experiencia digital. 
Analizo tu proyecto, identificamos oportunidades de mejora y proponemos soluciones 
a medida que se optimizan procesos, diseño y rendimiento digital.`,
      benefits: `Con nuestra asesoría, tomarás decisiones más claras y efectivas para tu proyecto. 
Ahorrarás tiempo, evitarás errores comunes y enfocarás tu inversión 
en lo que realmente genera valor y resultados medibles.`
    }
  };

  selectTab(tab: TabKey): void {
    this.selectedTab = tab;
    this.showBenefits = false;
  }

  toggleBenefits(): void {
    this.showBenefits = !this.showBenefits;
  }

  get currentText(): string {
    const tab = this.tabsContent[this.selectedTab];
    return this.showBenefits ? tab.benefits : tab.default;
  }
}
