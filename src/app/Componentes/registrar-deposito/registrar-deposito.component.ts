import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositoBancario } from '../.././Modelos/deposito-bancario.model';
import { DepositoBancarioService } from '../../Servicios/deposito-bancario.service';
import { CuentaBancaria } from 'src/app/Modelos/cuenta-bancaria.model';
import { CuentaBancariaService } from 'src/app/Servicios/cuentas-bancarias.service';

@Component({
  selector: 'app-registrar-deposito',
  templateUrl: './registrar-deposito.component.html',
  styleUrls: ['./registrar-deposito.component.scss']
})
export class RegistrarDepositoComponent {

  depositos: DepositoBancario[] = [];
  cuentas: CuentaBancaria[] = [];
  depositForm: FormGroup;
  dateNow: Date = new Date();

  constructor(
    private depositoBancarioService: DepositoBancarioService,
    private cuentaBancariaService: CuentaBancariaService,
    private fb: FormBuilder
  ) {

    this.depositForm = this.fb.group({
      banco: ['', Validators.required],
      papeleta: ['', Validators.required],
      valor: ['', Validators.required],
      fecha: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.obtenerCuentas();
    this.imprimirCuentas();
    this.obtenerDepositos();
  }

  obtenerCuentas()  {
    this.cuentas = this.cuentaBancariaService.obtenerCuentas();
  }

  imprimirCuentas() {
    console.log(this.cuentas);
  }

  obtenerDepositos() {
    this.depositos = this.depositoBancarioService.obtenerDepositos();
  }

  registrarDeposito(deposito: DepositoBancario) {
    this.depositoBancarioService.registrarDeposito(deposito);
  }

  onSubmit() {
    if (this.depositForm.valid) {
      console.log(this.depositForm.value);
      this.registrarDeposito(this.depositForm.value);
      this.obtenerDepositos();
    }
    else {
      console.log('Formulario inválido');
    }
  }

}
