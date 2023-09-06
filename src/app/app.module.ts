import { NgModule, BootstrapOptions } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentasBancariasComponent } from './Componentes/cuentas-bancarias/cuentas-bancarias.component';
import { CuentaBancariaService } from './Servicios/cuentas-bancarias.service';
import { RegistrarDepositoComponent } from './Componentes/registrar-deposito/registrar-deposito.component';
import { DepositoBancarioService } from './Servicios/deposito-bancario.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CuentasBancariasComponent,
    RegistrarDepositoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CuentaBancariaService, DepositoBancarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
