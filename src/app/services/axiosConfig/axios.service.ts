import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  constructor() {}

  setBaseURL(baseURL: string) {
    this.axiosInstance.defaults.baseURL = baseURL;
  }
}
