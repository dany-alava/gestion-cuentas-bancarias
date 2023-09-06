import { Component, Input } from '@angular/core';
import { CuentaBancaria } from '../.././Modelos/cuenta-bancaria.model';
import { CuentaBancariaService } from '../../Servicios/cuentas-bancarias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuentas-bancarias',
  templateUrl: './cuentas-bancarias.component.html',
  styleUrls: ['./cuentas-bancarias.component.scss']
})

export class CuentasBancariasComponent{
  
  cuentas: CuentaBancaria[] = [];
  formularioCuentaBancaria: FormGroup;

  constructor(
    private cuentaBancariaService: CuentaBancariaService,
    private fb: FormBuilder,
  ) {

    this.formularioCuentaBancaria = this.fb.group({
      nombreBanco: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
      tipoCuenta: ['', Validators.required],
      descripcion: ['']
    });
    
  }

  ngOnInit(): void {
  }

  registrarDatos(cuentas: CuentaBancaria) {
    this.cuentaBancariaService.registrarDatos(cuentas);
  }

  onSubmit() {
    if (this.formularioCuentaBancaria.valid) {
      console.log(this.formularioCuentaBancaria.value);
      this.registrarDatos(this.formularioCuentaBancaria.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  appendAlert = (message: any, type: any) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    this.alertPlaceholder?.append(wrapper)
  }

  alertTrigger = document.getElementById('liveAlertBtn')
  if (alertTrigger: { addEventListener: (arg0: string, arg1: () => void) => void; }) {
    alertTrigger.addEventListener('click', () => {
      this.appendAlert('Nice, you triggered this alert message!', 'success')
    })
  }

}
