import { Injectable } from '@angular/core';
import { AxiosService } from './axiosConfig/axios.service';
import { AxiosResponse } from 'axios';
import { Supervisor } from '../models/supervisor';

@Injectable({
  providedIn: 'root',
})
export class SupervisorService {
  private apiPath = '/supervisor/';

  constructor(private axios: AxiosService) {}

  list(): Promise<AxiosResponse<Supervisor[]>> {
    return this.axios.axiosInstance.get<Supervisor[]>(this.apiPath + 'list');
  }

  getById(id: number): Promise<AxiosResponse<Supervisor>> {
    return this.axios.axiosInstance.get<Supervisor>(`${this.apiPath}/${id}`);
  }

  getByNome(nome: string): Promise<AxiosResponse<Supervisor>> {
    return this.axios.axiosInstance.get<Supervisor>(
      `${this.apiPath}nome/${nome}`
    );
  }

  getByMatricula(matricula: string): Promise<AxiosResponse<Supervisor>> {
    return this.axios.axiosInstance.get<Supervisor>(
      `${this.apiPath}matricula/${matricula}`
    );
  }

  create(model: Supervisor): Promise<AxiosResponse<Supervisor>> {
    return this.axios.axiosInstance.post<Supervisor>(this.apiPath, model);
  }

  update(id: number, model: Supervisor): Promise<AxiosResponse<Supervisor>> {
    return this.axios.axiosInstance.put<Supervisor>(
      `${this.apiPath}${id}`,
      model
    );
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
