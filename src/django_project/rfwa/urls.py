from django.urls import path
from rfwa import views

urlpatterns = [
    path('', views.index, name='index'),
]