import { Component, signal, AfterViewInit } from '@angular/core';
declare var M:any

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
     var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  }
  protected readonly title = signal('PubliSalud');
}
