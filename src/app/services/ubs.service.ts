import { Injectable } from '@angular/core';
import { AxiosService } from './axiosConfig/axios.service';
import { AxiosResponse } from 'axios';
import { Ubs } from '../models/ubs';

@Injectable({
  providedIn: 'root',
})
export class UbsService {
  private apiPath = '/instituicao/';

  constructor(private axios: AxiosService) {}

  list(): Promise<AxiosResponse<Ubs[]>> {
    return this.axios.axiosInstance.get<Ubs[]>(this.apiPath + 'list');
  }

  getByNome(nome: string): Promise<AxiosResponse<Ubs>> {
    return this.axios.axiosInstance.get<Ubs>(`${this.apiPath}nome/${nome}`);
  }

  getById(id: number): Promise<AxiosResponse<Ubs>> {
    return this.axios.axiosInstance.get<Ubs>(`${this.apiPath}/${id}`);
  }

  create(model: Ubs): Promise<AxiosResponse<Ubs>> {
    return this.axios.axiosInstance.post<Ubs>(this.apiPath, model);
  }

  update(id: number, model: Ubs): Promise<AxiosResponse<Ubs>> {
    return this.axios.axiosInstance.put<Ubs>(`${this.apiPath}${id}`, model);
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
