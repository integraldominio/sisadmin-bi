import { MessageService } from './../../infra/message.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ClienteService, Cliente } from './cliente.service';
import { FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit, AfterViewInit {

  // form
  form = new FormGroup({});
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  model = {};

  // table
  displayedColumns = ['id', 'nome', 'telefone', 'email', 'actions'];
  dataSource: Array<Cliente> = [];

  fields: FormlyFieldConfig[] =
  [
    { key: 'nome', type: 'input', templateOptions: { type: 'text', label: 'Nome', placeholder: 'Entre nome', required: true, } },
    { key: 'endereco', type: 'input', templateOptions: { type: 'text', label: 'Endereço', placeholder: 'Entre enderco', required: true,}},
    { key: 'cidade', type: 'input', templateOptions: { type: 'text', label: 'Cidade', placeholder: 'Entre cidade', required: true, } },
    { key: 'telefone', type: 'input', templateOptions: { type: 'text', label: 'Telefone', placeholder: 'Entre telefone', required: true,}},
    { key: 'email', type: 'input', templateOptions: { type: 'email', label: 'Email', placeholder: 'Entre email', required: true, } }
  ] ;

  constructor (
    private clienteService: ClienteService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.listAll();
  }

  ngAfterViewInit() {
  }

  onSubmit(model) {
    if (this.form.valid) {
      this.clienteService
        .create( model as Cliente )
        .subscribe(  _ => { console.log(model); this.listAll(); });
    } else {
      this.messageService.info('Informe corretamente dados obrigatórios.');
    }
  }

  listAll() {
    this.clienteService.listAll().subscribe(
      data => {
        this.dataSource  = data as Array<Cliente>;
        console.log( this.dataSource );
      }
    );
  }

  addNew () {
  }

  startEdit(cliente) {
  }

  deleteItem(cliente: Cliente) {
    this.clienteService.delete(cliente.id)
    .subscribe( _ => this.listAll() );
  }




}
