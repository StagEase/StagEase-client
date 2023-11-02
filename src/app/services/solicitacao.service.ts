import { Injectable } from '@angular/core';
import { AxiosService } from './axiosConfig/axios.service';
import { AxiosResponse } from 'axios';
import { Solicitacao } from '../models/solicitacao';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoService {
  private apiPath = '/solicitacao/';

  constructor(private axios: AxiosService) {}

  list(): Promise<AxiosResponse<Solicitacao[]>> {
    return this.axios.axiosInstance.get<Solicitacao[]>(this.apiPath + 'list');
  }

  getById(id: number): Promise<AxiosResponse<Solicitacao>> {
    return this.axios.axiosInstance.get<Solicitacao>(`${this.apiPath}/${id}`);
  }

  create(model: Solicitacao): Promise<AxiosResponse<Solicitacao>> {
    return this.axios.axiosInstance.post<Solicitacao>(this.apiPath, model);
  }

  update(id: number, model: Solicitacao): Promise<AxiosResponse<Solicitacao>> {
    return this.axios.axiosInstance.put<Solicitacao>(
      `${this.apiPath}${id}`,
      model
    );
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
