import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Client } from 'src/app/shared/Interfaces/client.interface';
import { ClientsService, identificationTypes } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-view-client-modal',
  templateUrl: './view-client-modal.page.html',
  styleUrls: ['./view-client-modal.page.scss'],
})
export class ViewClientModalPage implements OnInit {
  @Input() idClient: number;
  IdentificationTypes 

  Client: Client;

  constructor(
    private clientService: ClientsService,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    this.IdentificationTypes = identificationTypes;
    this.clientService.getClient(this.idClient).subscribe(
      (client: Client) =>{
        this.Client = client;
        console.log(client)
      },(error)=>{
        console.log(error);
      }
    );
  }


  async closeModal() {
    await this.modalController.dismiss();
  }


}
