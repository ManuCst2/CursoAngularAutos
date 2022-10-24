import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lineas } from 'src/app/models/autos.model';
import { AutosService } from 'src/app/services/autos.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-lineas',
  templateUrl: './listado-lineas.component.html',
  styleUrls: ['./listado-lineas.component.scss']
})
export class ListadoLineasComponent implements OnInit {
  public displayedColumns = ['Id', 'Nombre', 'Modelo', 'Color', 'acciones'];
  public dataSource: any = null;
  
  constructor(private servicio: AutosService,private snackBar: MatSnackBar,private dialog: MatDialog) { }
  lsLineas:Lineas[] = [];

  ngOnInit(): void {
    this.servicio.oLineas().subscribe(res => {
      res.sort(function (a, b) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });
      this.lsLineas = res;
    });
  }
  Eliminar(id: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {
        mensaje: `¿Está segur@ que desea eliminar la linea?`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Si') {
        this.snackBar.open('¡La linea ha sido eliminada con éxito!', 'Ok', {
          duration: 3000
        });
        this.servicio.BorraLinea(id).subscribe(
          result => {
            this.servicio.oLineas().subscribe(res => {
              res.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                  return 1;
                }
                if (a.nombre < b.nombre) {
                  return -1;
                }
                return 0;
              });
              this.lsLineas = res;
            });
          });
      }
    });
  }
}
