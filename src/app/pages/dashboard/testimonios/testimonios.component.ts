import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonio {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
})
export class TestimoniosComponent {
  testimonios: Testimonio[] = [
    {
      name: 'Miguel Rodríguez',
      role: 'Diseñador/Desarrollador',
      avatar: 'assets/imgs/avatar1.png',
      text: `Creo en el diseño que resuelve, en el desarrollo que funciona y en la comunicación clara desde el primer contacto.
      Cada proyecto que tomo lo asumo con compromiso, responsabilidad y enfoque en resultados. Mi objetivo no es solo entregar un producto, sino ayudarte a construir algo que realmente funcione para ti y tus usuarios.`
    },
    {
      name: 'Saray Restrepo',
      role: 'Product Manager / Triidy',
      avatar: 'assets/imgs/avatar2.png',
      text: `Sus diseños y procesos convierten lo funcional en productos agradables para los usuarios, pasando de lo complejo a lo intuitivo, colaborando siempre con la mejor actitud ante los retos que se afrontan.`
    },
     {
      name: 'Mateo Lopez',
      role: 'Diseñador 3D / INJ Portugal',
      avatar: 'assets/imgs/avatar-3.png',
      text: `A lo largo de más de 10 años hemos participado juntos en varios proyectos, siempre dentro de un proceso creativo constante. Trabajar juntos ha sido muy enriquecedor: su trabajo dedicado, organizado y con una gran capacidad para trabajar en equipo. Su compromiso y su forma meticulosa de abordar cada tarea hacen que el trabajo fluya y que los resultados siempre superen las expectativas. Además, su disposición para aportar ideas y colaborar hace que cada proyecto sea no solo productivo, sino también inspirador.`
    }
    
  ];

  currentIndex = 0;

  get current() {
    return this.testimonios[this.currentIndex];
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonios.length) % this.testimonios.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonios.length;
  }

  
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prev();
    } else if (event.key === 'ArrowRight') {
      this.next();
    }
  }
}
