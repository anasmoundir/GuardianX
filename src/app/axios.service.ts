import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  request(arg0: string, arg1: string, arg2: {}) {
    throw new Error('Method not implemented.');
  }

  constructor() {

      axios.defaults.baseURL = 'http://localhost:8080/api/v1/auth';
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.interceptors.request.use(config => {
      config.headers['Access-Control-Allow-Origin'] = '*';
      config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
      config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
      return config;
    });
  }
// request(method: string, url: string, data: any): Promise<any> {
//   return axios({
//     method: method,
//     url: url,
//     data:data
//   });

  login(credentials: { username: string, password: string }): Promise<any> {
    return axios.post('/login', credentials);
  }

  register(data: any): Promise<any> {
    return axios.post('/register', data);
  }
}

