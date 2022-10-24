import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcas } from 'src/app/models/autos.model';
import { AutosService } from 'src/app/services/autos.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-marcas',
  templateUrl: './listado-marcas.component.html',
  styleUrls: ['./listado-marcas.component.scss']
})
export class ListadoMarcasComponent implements OnInit {
  public displayedColumns = ['Id', 'Nombre', 'Clase', 'acciones'];
  public dataSource: any = null;

  constructor(private servicio: AutosService,private snackBar: MatSnackBar,private dialog: MatDialog) { }
  lsMarcas:Marcas[]=[];

  ngOnInit(): void {
    this.servicio.oMarcas().subscribe(res => {
      res.sort(function (a, b) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });
      this.lsMarcas = res;
    });
  }
  Eliminar(id: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {
        mensaje: `¿Está segur@ que desea eliminar la marca?`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Si') {
        this.snackBar.open('¡La marca ha sido eliminada con éxito!', 'Ok', {
          duration: 3000
        });
        this.servicio.BorraMarca(id).subscribe(
          result => {
            this.servicio.oMarcas().subscribe(res => {
              res.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                  return 1;
                }
                if (a.nombre < b.nombre) {
                  return -1;
                }
                return 0;
              });
              this.lsMarcas = res;
            });
          });
      }
    });
  }
}
