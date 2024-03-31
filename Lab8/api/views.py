from itertools import product

from django.shortcuts import render

# Create your views here.
from django.http.response import HttpResponse, JsonResponse

from api.models import Category, Product


def get_categories(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def get_category(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        }, status=404)


def get_products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def get_product(request, pk=None):
    try:
        product = Product.objects.get(id=pk)
        return JsonResponse(product.to_json())
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        }, status=404)


def get_products_by_category(request, cat_id=None):
    try:
        category = Category.objects.get(id=cat_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    products = Product.objects.filter(category_id=cat_id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
