import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { PetService, Pet } from './pet.service';
import { MessageService } from './../../infra/message.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  dataSource: Array<Pet> = [];
  displayedColumns = ['id', 'lastName', 'firstName'];

  arquivo: any;
  @ViewChild('btnUpload')
  btnUpload: any;
  @ViewChild('img')
  img: any;

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            label: 'First Name'
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'lastName',
          templateOptions: {
            label: 'Last Name'
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.firstName',
          },
        },
      ],
    },
    {
      template: ' <mat-divider><mat-divider/> <div><strong>Address:</strong></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cityName',
          templateOptions: {
            label: 'City',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zip',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    },
    {
      template: ' <mat-divider />',
    },
    {
      type: 'input',
      key: 'otherInput',
      templateOptions: {
        label: 'Other Input',
      },
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      templateOptions: {
        label: 'Other Checkbox',
      },
    },
  ];

  constructor (
    private petService: PetService,
    private messageService: MessageService
  ) { }

  onSubmit(model) {
    console.log('>>>Model');
    console.log(model);
    if (this.form.valid) {
      const pet = model as Pet;
      pet.image = this.arquivo;
      console.log('>>>Pet');
      console.log(pet);
      this.petService
        .create( pet )
        .subscribe(  _ => { console.log(model); this.listAll(); this.form.reset(); });
    } else {
      this.messageService.info('Informe corretamente dados obrigatórios.');
    }
  }

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.petService.listAll().subscribe(
      data => {
        // if ( !this.dataSource === null )
        {
          this.dataSource  = data as Array<Pet>;
          console.log('>>>Read');
          console.log( this.dataSource );
        }
      }
    );
  }
  addNew () {
  }

  startEdit(pet) {
  }

  deleteItem(pet: Pet) {
    this.petService.delete(pet.id)
    .subscribe( _ => this.listAll() );
  }

  upload(files: File[]) {
    console.log('>>> File');
    console.log(files[0]);
    this.arquivo = files[0];
  }



}


/* function download(data){
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  // data são os bytes do arquivo
  // createObjectURL cria um novo objeto URL para permitir o download
  var blob =  new Blob(["\ufeff", data], {
              type: 'application/vnd.ms-excel'})
      , url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = "meu_arquivo.xlsx";
  a.click();
  window.URL.revokeObjectURL(url);
} */
