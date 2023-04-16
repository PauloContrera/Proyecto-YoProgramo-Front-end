import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as AOS from 'aos';
import { SwiperModule } from 'swiper/angular';
// import Swiper core and required modules
// import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation  } from "swiper";
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper';
import { Habilidades } from './habilidadesmodelo';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel]);

// install Swiper modules
// SwiperCore.use([EffectCoverflow, Pagination,Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidades[] = [
    { id: 1, nombre: 'Programación', img: 'programacion.jpg' },
    { id: 2, nombre: 'Diseño gráfico', img: 'diseno.jpg' },
    { id: 3, nombre: 'Marketing digital', img: 'marketing.jpg' },
    { id: 4, nombre: 'Inglés', img: 'ingles.jpg' }
  ];
  


  constructor() { }


  ngOnInit(): void {
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
  

  
  
}