import { Component, AfterViewInit } from '@angular/core';
declare var M: any

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements AfterViewInit {
  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
     
   
  }

  encabezado = [
      {
      img:"assets/img/encabezado/D-100.png",
      imgMed:"assets/img/FondoSideNav.png",
      titulo:"D-100",
      sub:"Sistema de Pruebas <br>de Hemoglobina",
      info:"La solución más avanzada <br>para pruebas A1c rápidas y confiables",
      estilo: { 'justify-content': 'left' },
      lado:"caption left-align",
      
    },
     {
    img: "assets/img/encabezado/D-10.png",
    imgMed: "assets/img/encabezado/D-101.png",
    titulo: "D-10",
    sub:"Sistema de Pruebas <br>de Hemoglobina",
    info: "Pruebas completas de hemoglobina <br>en un solo equipo compacto",
    btn: "Cotiza tu equipo",
    estilo: { 'justify-content': 'right' },
    lado: "caption right-align",
  },
  {
    img: "assets/img/encabezado/Evolis.png",
    imgMed: "assets/img/encabezado/Evolis1.png",
    titulo: "EVOLIS",
    info: "Automatización segura y flexible <br> para laboratorios de alto rendimiento",
    btn: "Cotiza tu equipo",
    estilo: { 'justify-content': 'left' },
    lado: "caption left-align",
  },
    {
    img: "assets/img/encabezado/VariantTurbo.png",
    imgMed: "assets/img/encabezado/VARIANTII_TURBO1.png",
    titulo: "VARIANT II <br> TURBO",
    info: "La solución turbo para análisis A1c ",
    btn: "Cotiza tu equipo",
    estilo: { 'justify-content': 'right' },
    lado: "caption right-align",
  },
 
   {
    img: "assets/img/encabezado/VariantNBS.png",
    imgMed: "assets/img/encabezado/VARIANT_nbs1.png",
    titulo: "VARIANT<br> NBS",
    info: "Tamizaje neonatal confiable ",
    btn: "Cotiza tu equipo",
    estilo: { 'justify-content': 'left' },
    lado: "caption left-align",
  }

 
];

  
}
