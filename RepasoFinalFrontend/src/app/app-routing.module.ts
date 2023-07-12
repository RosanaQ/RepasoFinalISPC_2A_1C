import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { HomeComponent} from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',component:Pagina404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
