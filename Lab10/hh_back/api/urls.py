from django.urls import path

import api.view as views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:id>/', views.CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:id>/', views.vacancy),
    path('vacancies/top_ten/', views.TopTen.as_view())
]
