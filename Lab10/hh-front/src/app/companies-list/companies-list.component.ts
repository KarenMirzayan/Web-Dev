import { Component } from '@angular/core';
import { Company } from '../models';
import { HhService } from '../hh.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.css'
})
export class CompaniesListComponent {
  companies!: Company[];
  loaded:boolean = false;

  constructor(private hhService: HhService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.loaded = false;
    this.hhService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
    });
  }

}
