import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarEditarMarcaComponent } from "./agregar-editar-marca/agregar-editar-marca.component";
import { ListadoMarcasComponent } from "./listado-marcas/listado-marcas.component";

const routes: Routes = [
  {
    path:'',
    component: ListadoMarcasComponent
  },
  {
    path: ':id',
    component: AgregarEditarMarcaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
