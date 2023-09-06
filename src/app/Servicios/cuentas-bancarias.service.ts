import { Injectable } from '@angular/core';
import { CuentaBancaria } from '.././Modelos/cuenta-bancaria.model';

@Injectable({
  providedIn: 'root',
})

export class CuentaBancariaService {

  private cuentas: CuentaBancaria[] = [];

  constructor() {}

  // Registrar datos de la cuenta
  registrarDatos(cuenta: CuentaBancaria) {
    cuenta.idCuenta = this.cuentas.length + 1;
    this.cuentas.push(cuenta);
  }

  // Obtener datos de la cuenta
  obtenerCuentas(): CuentaBancaria[] {
    return this.cuentas;
  }

}

