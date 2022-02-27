import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { API_URL } from 'src/environments/environment';
import { Client } from '../Interfaces/client.interface';

export const identificationTypes = {
  'CC':'Cédula de Ciudadania',
  'NIT':'Nit'
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getClient(idClient):Observable<Client>{
    return this.http.get<Client>(`${API_URL}/Clients/${idClient}`);
  }

  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(`${API_URL}/Clients`);
  }

  newClient(client: Client):Observable<Client>{
    return this.http.post<Client>(`${API_URL}/Clients`, client);
  }

  updateClient(client: Client):Observable<Client>{
    return this.http.put<Client>(`${API_URL}/Clients/${client.clientId}`, client);
  }

  deleteClient(id: number):Observable<any>{
    return this.http.delete(`${API_URL}/Clients/${id}`);
  }
}
