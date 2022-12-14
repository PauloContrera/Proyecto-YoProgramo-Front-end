import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.scss']
})
export class NuevaEducacionComponent implements OnInit {

  nombre: string = '';
  lugar: string = '';
  desde: string = ''; 
  hasta: string = '';
  texto: string = ''; 
  img: string = ''; 

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    Loading.standard('Cargando...');
    
    const educacion = new Educacion(
                                  this.nombre,
                                  this.lugar,
                                  this.desde,
                                  this.hasta,
                                  this.texto,
                                  this.img,
                                  );
    this.educacionS.crear(educacion).subscribe(
      data => {
        Notify.success('¡Operación exitosa!');

        this.router.navigate(['']);
        Loading.remove();

      }, err => {
        Notify.failure('¡Ups! Algo salió mal');
        this.router.navigate(['']);
        Loading.remove();

      }
    )
  }


}
