import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistroComponent
  },
  {
    path:'marcas',
    loadChildren:()=>
    import('./marcas/marcas.module')
    .then(m=>m.MarcasModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path:'lineas',
    loadChildren:()=>
    import('./lineas/lineas.module')
    .then(m=>m.LineasModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path:'', redirectTo:'login',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
