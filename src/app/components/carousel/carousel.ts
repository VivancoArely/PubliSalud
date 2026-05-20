import { Component, AfterViewInit } from '@angular/core';
declare var InfiniteScrollCarousel: any;
declare var M:any;

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements AfterViewInit {
  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);

    this.initSlider();
  }

  private initSlider(): void {
    const DEFAULT_SPEED = 2;

    const slider = document.querySelector('.slider') as HTMLElement;
    if (!slider) return;

    const wrapper = document.querySelector('.slider-track') as HTMLElement;
    if (!wrapper) return;

    // duplicar contenido para efecto infinito
    wrapper.innerHTML += wrapper.innerHTML;

    let speed = DEFAULT_SPEED;
    let position = 0;

    slider.addEventListener('mouseenter', () => {
      speed = DEFAULT_SPEED / 2;
    });

    slider.addEventListener('mouseleave', () => {
      speed = DEFAULT_SPEED;
    });

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= wrapper.scrollWidth / 2) {
        position = 0;
      }

      wrapper.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  

    
  }
}
