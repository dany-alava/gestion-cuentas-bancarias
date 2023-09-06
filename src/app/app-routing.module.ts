import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasBancariasComponent } from './Componentes/cuentas-bancarias/cuentas-bancarias.component';
import { RegistrarDepositoComponent } from './Componentes/registrar-deposito/registrar-deposito.component';

const routes: Routes = [
  { path: '', component: CuentasBancariasComponent },
  { path: 'registrar-deposito', component: RegistrarDepositoComponent },
  { path: 'registrar-banco', component: CuentasBancariasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
