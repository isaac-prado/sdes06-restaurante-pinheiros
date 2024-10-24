import axios, { AxiosInstance } from "axios";


export const customerMock = [
    { name: 'John', credit: 100.50, isActive: true},
    { name: 'Ellen', credit: 100.50, isActive: true},
  ];

export default class CustomerService {
    private apiClient: AxiosInstance;

    constructor() {
        this.apiClient = axios.create({
          baseURL: '...',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    }


    

}