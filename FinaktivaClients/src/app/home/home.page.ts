import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { AddClientModalPage } from '../pages/add-client-modal/add-client-modal.page';
import { EditClientModalPage } from '../pages/edit-client-modal/edit-client-modal.page';
import { ViewClientModalPage } from '../pages/view-client-modal/view-client-modal.page';
import { ClientsService, identificationTypes } from '../shared/services/clients.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Clients: Array<any> = [];
  CClients: number = 0;
  identificationTypes: any = {};
  

  constructor(
    private clientService: ClientsService,
    private alertController: AlertController,
    private toastController: ToastController,
    private modalCtrl: ModalController,
  ) {}
  
  ngOnInit() {
    this.loadData();
  }


  async loadData() {
    this.identificationTypes = identificationTypes;
    this.clientService.getClients().subscribe(
      (data)=>{
        this.Clients = data;
        this.CClients = data.length;
        console.log(this.Clients);
      },
      (error) => {
        console.error(error);
      }
    );    
  }

  async deleteClient(idClient){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      message: '¿Está seguro de eliminar el cliente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
        }, {
          text: 'Sí',
          id: 'confirm-button',
          handler: async() => {
            await this.clientService.deleteClient(idClient).toPromise();
            await this.loadData();

            const toast = await this.toastController.create({
              color: 'success',
              icon: 'checkmark-circle-outline',
              duration: 4000,
              message: 'Cliente eliminado exitosamente!',
              position:'top'
            });
    
            await toast.present();
          }
        }
      ]
    });

    await alert.present();
  }

  async openNewClient(){
    const modal = await this.modalCtrl.create({
      component: AddClientModalPage,
      cssClass: 'modal-min',
      componentProps: {
        //orderType: this.orderType
      }
    });

    modal.onDidDismiss().then(async(client) => {
      if(client.data){
        const toast = await this.toastController.create({
          color: 'success',
          icon: 'checkmark-circle-outline',
          duration: 4000,
          message: 'Cliente creado exitosamente!',
          position:'top'
        });
  
        await this.loadData();
        await toast.present();
      }
    });

    modal.present();
  }

  async openEditClient(idClient){
    const modal = await this.modalCtrl.create({
      component: EditClientModalPage,
      cssClass: 'modal-min',
      componentProps: {
        idClient: idClient
      }
    });

    modal.onDidDismiss().then(async(client) => {
      console.log(client);
      if(client.data){
        const toast = await this.toastController.create({
          color: 'success',
          icon: 'checkmark-circle-outline',
          duration: 4000,
          message: 'Cliente actualizado exitosamente!',
          position:'top'
        });
        await this.loadData();
        await toast.present();
      }
    });

    modal.present();
  }

  async openViewClient(idClient){
    const modal = await this.modalCtrl.create({
      component: ViewClientModalPage,
      cssClass: 'modal-min',
      componentProps: {
        idClient: idClient
      }
    });

    modal.present();
  }

}
