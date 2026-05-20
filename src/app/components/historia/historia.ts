import { Component } from '@angular/core';

@Component({
  selector: 'app-historia',
  standalone: false,
  templateUrl: './historia.html',
  styleUrl: './historia.scss',
})
export class Historia {
  bullet: string = 'Una empresa líder en la distribución de <span class="verde">productos de calidad</span> y servicio.';

}
