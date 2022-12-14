import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { TokenService } from 'src/app/service/token.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Confirm, Loading, Notify } from 'notiflix';
import * as AOS from 'aos';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private experienciaS: ExperienciaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }


  cargarExperiencia(): void {
    this.experienciaS.lista().subscribe(data => {
      this.experiencia = data;
    })
  }

  delete(id ? : number) {
    Loading.standard('Cargando...');

    Confirm.show(
      '¡Advertencia!',
      'Desea borrar este componente',
      'Si',
      'No',
      () => {
        if (id != undefined) {
          this.experienciaS.borrar(id).subscribe(

            data => {
              this.cargarExperiencia();
              Notify.success('¡Operación exitosa!');
              Loading.remove();

            }, err => {
              Notify.failure('¡Ups! Algo salió mal');
              Loading.remove();

            }
          )
        }
      },
      () => {
        Loading.remove();

      }, {},
    );

  }
}
