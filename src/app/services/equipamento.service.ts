import { Injectable } from '@angular/core';
import { AxiosService } from './axiosConfig/axios.service';
import { AxiosResponse } from 'axios';
import { Equipamento } from '../models/equipamento';

@Injectable({
  providedIn: 'root',
})
export class UbsService {
  private apiPath = '/instituicao/';

  constructor(private axios: AxiosService) {}

  list(): Promise<AxiosResponse<Equipamento[]>> {
    return this.axios.axiosInstance.get<Equipamento[]>(this.apiPath + 'list');
  }

  getByNome(nome: string): Promise<AxiosResponse<Equipamento>> {
    return this.axios.axiosInstance.get<Equipamento>(
      `${this.apiPath}nome/${nome}`
    );
  }

  getById(id: number): Promise<AxiosResponse<Equipamento>> {
    return this.axios.axiosInstance.get<Equipamento>(`${this.apiPath}/${id}`);
  }

  create(model: Equipamento): Promise<AxiosResponse<Equipamento>> {
    return this.axios.axiosInstance.post<Equipamento>(this.apiPath, model);
  }

  update(id: number, model: Equipamento): Promise<AxiosResponse<Equipamento>> {
    return this.axios.axiosInstance.put<Equipamento>(
      `${this.apiPath}${id}`,
      model
    );
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
