import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
		
		

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormComponent } from './ecommerce/form/form.component';
import { FormEditComponent } from './ecommerce/form-edit/form-edit.component';
import { SuscripcionComponent } from './ecommerce/suscripcion/suscripcion.component';
import { SuscripcionAdminComponent } from './ecommerce/suscripcion-admin/suscripcion-admin.component';
import { FormDoctorComponent } from './medicos/form-doctor/form-doctor.component';
import { FormEditDoctorComponent } from './medicos/form-edit-doctor/form-edit-doctor.component';
import { MedicoDetailComponent } from './medicos/medico-detail/medico-detail.component';
import { MedicosAdminComponent } from './medicos/medicos-admin/medicos-admin.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PagoComponent } from './ecommerce/pago/pago.component';
import { PagoAdminComponent } from './ecommerce/pago-admin/pago-admin.component';
import { PagoClienteComponent } from './ecommerce/pago-cliente/pago-cliente.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    FormComponent,
    FormEditComponent,
    SuscripcionComponent,
    SuscripcionAdminComponent,
    FormDoctorComponent,
    FormEditDoctorComponent,
    MedicoDetailComponent,
    MedicosAdminComponent,
    ContactoComponent,
    CuentaComponent,
    HomeComponent,
    LoginComponent,
    MedicoComponent,
    NosotrosComponent,
    PacienteComponent,
    RegistroComponent,
    PagoComponent,
    PagoAdminComponent,
    PagoClienteComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
