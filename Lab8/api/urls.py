from django.urls import path, re_path

from api.views import get_categories, get_category, get_products_by_category, get_products, get_product

urlpatterns = [
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category),
    path('products/', get_products),
    path('products/<int:pk>/', get_product),
    path('categories/<int:cat_id>/products/', get_products_by_category)
]
# /api/products - List of all Products
# /api/products/<int:id>/ - Get one Product
# /api/categories/ - List of all Categories
# /api/categories/<int:id>/ - Get one Category
# /api/categories/<int:id>/products/ - List of Products by Category