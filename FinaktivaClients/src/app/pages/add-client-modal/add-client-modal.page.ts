import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClientsService, identificationTypes } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.page.html',
  styleUrls: ['./add-client-modal.page.scss'],
})
export class AddClientModalPage implements OnInit {
  @Input() idClient: number;
  ClientForm: FormGroup;
  IdentificationTypes 

  constructor(
    private fb: FormBuilder,
    private clientService: ClientsService,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    this.IdentificationTypes = Object.entries(identificationTypes).map((type) => {return {'r':type[0], 'd': type[1]}});
    this.ClientForm = this.fb.group({
      //clientId: [1,[Validators.required]],
      fullName: [null,[Validators.required]],
      identificationType: [null,[Validators.required]],
      identification: [null,[Validators.required]],
      socialReasoning: [null,[]],
      providers: [null,[]],
      lastYearSales: [null,[]],
    });
  }

  saveClient(event){
    this.clientService.newClient(this.ClientForm.value).subscribe(
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
