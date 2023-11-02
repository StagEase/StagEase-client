import { Injectable } from '@angular/core';
import { AxiosResponse } from 'axios';
import { AxiosService } from './axiosConfig/axios.service';
import { Area } from '../models/area';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  private apiPath = '/area/';

  constructor(private axios: AxiosService) {}

  list(): Promise<AxiosResponse<Area[]>> {
    return this.axios.axiosInstance.get<Area[]>(this.apiPath + 'list');
  }

  getByNome(nome: string): Promise<AxiosResponse<Area>> {
    return this.axios.axiosInstance.get<Area>(`${this.apiPath}nome/${nome}`);
  }

  getById(id: number): Promise<AxiosResponse<Area>> {
    return this.axios.axiosInstance.get<Area>(`${this.apiPath}/${id}`);
  }

  create(model: Area): Promise<AxiosResponse<Area>> {
    return this.axios.axiosInstance.post<Area>(this.apiPath, model);
  }

  update(id: number, model: Area): Promise<AxiosResponse<Area>> {
    return this.axios.axiosInstance.put<Area>(`${this.apiPath}${id}`, model);
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
