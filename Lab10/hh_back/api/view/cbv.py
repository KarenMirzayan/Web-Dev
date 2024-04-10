import json

from rest_framework.response import Response

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework.views import APIView


class CompanyList(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class CompanyDetail(APIView):
    def get_object(self, id=None):
        try:
            company = Company.objects.get(id=id)
            return company
        except Company.DoesNotExist as e:
            return Response({'error': str(e)}, status=400)

    def get(self, request, id=None):
        serializer = CompanySerializer(self.get_object(id))
        return Response(serializer.data)

    def put(self, request, id=None):
        company = self.get_object(id=id)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, id=None):
        company = self.get_object(id=id)
        company.delete()
        return Response({"deleted": True})


class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class VacancyDetail(APIView):
    def get_object(self, id=None):
        try:
            vacancy = Vacancy.objects.get(id=id)
            return vacancy
        except Vacancy.DoesNotExist as e:
            return Response({'error': str(e)}, status=400)

    def get(self, request, id=None):
        vacancy = self.get_object(id=id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id=None):
        vacancy = self.get_object(id=id)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, id=None):
        vacancy = self.get_object(id=id)
        vacancy.delete()
        return Response({'deleted': True})


class CompanyListVacancies(APIView):
    def get_object(self, id=None):
        try:
            company = Company.objects.get(id=id)
            return company
        except Company.DoesNotExist as e:
            return Response({'error': str(e)}, status=400)

    def get(self, request, id=None):
        company = self.get_object(id)
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class TopTen(APIView):
    def get(self, request):
        top_ten_vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(top_ten_vacancies, many=True)
        return Response(serializer.data)
