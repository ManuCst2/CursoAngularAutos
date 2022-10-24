import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarEditarLienaComponent } from "./agregar-editar-liena/agregar-editar-liena.component";
import { ListadoLineasComponent } from "./listado-lineas/listado-lineas.component";

const routes: Routes = [
  {
    path:'',
    component: ListadoLineasComponent
  },
  {
    path: ':id',
    component: AgregarEditarLienaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineasRoutingModule { }
