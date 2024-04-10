import { Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyComponent } from './company/company.component';

export const routes: Routes = [
    { path: '', redirectTo: 'companies', pathMatch: 'full'},
    { path: 'companies', component: CompaniesListComponent},
    { path: 'companies/:id', component: CompanyComponent},
    // { path: 'companies/:company_id/vacancies', component: VacanciesListComponent},
    // { path: 'companies/:company_id/vacancies/:vacancy_id', component: VacancyDetailComponent}
];
