from django.conf.urls import url
from django.urls import path
from rfwa import views

urlpatterns = [
    path('', views.index, name='index'),
    #url(r'^about/', views.about, name='about'),
    #url(r'^lectureslides/', views.lectureslides, name='lectureslides'),
]