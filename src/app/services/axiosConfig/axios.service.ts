import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.response.use(
      (response) => {
        // Loga o token recebido no console
        console.log('Token recebido:', response.headers['authorization']);

        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
