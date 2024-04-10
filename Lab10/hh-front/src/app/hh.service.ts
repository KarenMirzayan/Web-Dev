import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, Vacancy } from './models';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HhService {

  BASE_URL: string = "http://localhost:8000/api"

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  getCompany(id: number): Observable<Company>{
    return this.client.get<Company>(`${this.BASE_URL}/companies/${id}/`)
  }

  getVacancies(id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies/`)
  }

  getVacancy(company_id: number, vacancy_id: number): Observable<Vacancy>{
    return this.client.get<Vacancy>(`${this.BASE_URL}/companies/${company_id}/vacancies/${vacancy_id}/`)
  }
}