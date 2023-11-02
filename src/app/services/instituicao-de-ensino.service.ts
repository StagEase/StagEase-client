import { Injectable } from '@angular/core';
import { AxiosService } from './axiosConfig/axios.service';
import { AxiosResponse } from 'axios';
import { InstituicaoDeEnsino } from '../models/instituicao-de-ensino';

@Injectable({
  providedIn: 'root',
})
export class InstituicaoDeEnsinoService {
  private apiPath = '/instituicao/';

  constructor(private axios: AxiosService) {}

  list(): Promise<AxiosResponse<InstituicaoDeEnsino[]>> {
    return this.axios.axiosInstance.get<InstituicaoDeEnsino[]>(
      this.apiPath + 'list'
    );
  }

  getByNome(nome: string): Promise<AxiosResponse<InstituicaoDeEnsino>> {
    return this.axios.axiosInstance.get<InstituicaoDeEnsino>(
      `${this.apiPath}nome/${nome}`
    );
  }

  getById(id: number): Promise<AxiosResponse<InstituicaoDeEnsino>> {
    return this.axios.axiosInstance.get<InstituicaoDeEnsino>(
      `${this.apiPath}/${id}`
    );
  }

  create(
    model: InstituicaoDeEnsino
  ): Promise<AxiosResponse<InstituicaoDeEnsino>> {
    return this.axios.axiosInstance.post<InstituicaoDeEnsino>(
      this.apiPath,
      model
    );
  }

  update(
    id: number,
    model: InstituicaoDeEnsino
  ): Promise<AxiosResponse<InstituicaoDeEnsino>> {
    return this.axios.axiosInstance.put<InstituicaoDeEnsino>(
      `${this.apiPath}${id}`,
      model
    );
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
