import { Injectable } from '@angular/core';
import { DepositoBancario } from '.././Modelos/deposito-bancario.model';

@Injectable({
  providedIn: 'root',
})

export class DepositoBancarioService {

  private depositos: DepositoBancario[] = [];

  constructor() { }

  // Registrar deposito
  registrarDeposito(deposito: DepositoBancario) {
    deposito.idDeposito = this.depositos.length + 1;
    this.depositos.push(deposito);
  }

  // Obtener datos de depositos
  obtenerDepositos(): DepositoBancario[] {
    return this.depositos;
  }

}
