import { ClienteService, Cliente } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  form = new FormGroup({});

  model = { email: 'email@gmail.com' };

  fields: FormlyFieldConfig[] =
  [
    { key: 'nome', type: 'input', templateOptions: { type: 'text', label: 'Nome', placeholder: 'Entre nome', required: true, } },
    { key: 'endereco', type: 'input', templateOptions: { type: 'text', label: 'Endereço', placeholder: 'Entre enderco', required: true,}},
    { key: 'cidade', type: 'input', templateOptions: { type: 'text', label: 'Cidade', placeholder: 'Entre cidade', required: true, } },
    { key: 'telefone', type: 'input', templateOptions: { type: 'text', label: 'Telefone', placeholder: 'Entre telefone', required: true,}},
    { key: 'email', type: 'input', templateOptions: { type: 'email', label: 'Email', placeholder: 'Entre email', required: true, } }
  ] ;

  constructor (
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
  }

  onSubmit(model) {
    this.clienteService
      .create( model as Cliente )
      .subscribe(  _ => { console.log(model); } );
  }


}
