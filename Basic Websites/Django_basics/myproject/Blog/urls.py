from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('read/<int:id>/', views.read_one, name='read_one'),
    path('update/<int:id>/', views.update_one, name='update_one'),
    path('delete/<int:id>/', views.delete_one, name='delete_one')
]
