import { Component } from '@angular/core';
import { Company, Vacancy } from '../models';
import { HhService } from '../hh.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  company!: Company;
  vacancies!: Vacancy[];
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private hhService: HhService) {}
  
  ngOnInit() {
    this.getCompany();
    this.getVacancies();
  }

  getCompany() {
    this.route.paramMap.subscribe((params) => {
      const companyId = Number(params.get('id'));
      this.loaded = false;
      this.hhService.getCompany(companyId).subscribe((company) => {
        this.company = company;
        this.loaded = true;
      });
    });
  }

  getVacancies() {
    this.route.paramMap.subscribe((params) => {
      const companyId = Number(params.get('id'));
      this.loaded = false;
      this.hhService.getVacancies(companyId).subscribe((vacancies) => {
        this.vacancies = vacancies;
        this.loaded = true;
      });
    });
  }
}
