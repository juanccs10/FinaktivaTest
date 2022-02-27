import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Client } from 'src/app/shared/Interfaces/client.interface';
import { ClientsService, identificationTypes } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-edit-client-modal',
  templateUrl: './edit-client-modal.page.html',
  styleUrls: ['./edit-client-modal.page.scss'],
})
export class EditClientModalPage implements OnInit {
  @Input() idClient: number;
  ClientForm: FormGroup;
  IdentificationTypes 

  Client: Client;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientsService,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    this.IdentificationTypes = Object.entries(identificationTypes).map((type) => {return {'r':type[0], 'd': type[1]}});
    this.ClientForm = this.fb.group({
      clientId: [this.idClient,[Validators.required]],
      fullName: [null,[Validators.required]],
      identificationType: [null,[Validators.required]],
      identification: [null,[Validators.required]],
      socialReasoning: [null,[]],
      providers: [null,[]],
      lastYearSales: [null,[]],
    });

    this.clientService.getClient(this.idClient).subscribe(
      (client: Client) =>{
        this.ClientForm.setValue(client);
      },(error)=>{
        console.log(error);
      }
    );
  }

  saveClient(event){
    this.clientService.updateClient(this.ClientForm.value).subscribe(
      async (data)=>{
        await this.closeModal(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  async closeModal(data?) {
    await this.modalController.dismiss(data);
  }

  get clientId(){return this.ClientForm.get('clientId');}
  get fullName(){return this.ClientForm.get('fullName');}
  get identificationType(){return this.ClientForm.get('identificationType');}
  get identification(){return this.ClientForm.get('identification');}
  get socialReasoning(){return this.ClientForm.get('socialReasoning');}
  get providers(){return this.ClientForm.get('providers');}
  get lastYearSales(){return this.ClientForm.get('lastYearSales');}
}
