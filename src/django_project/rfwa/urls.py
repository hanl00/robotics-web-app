from django.conf.urls import url
from django.urls import path
from rfwa import views

urlpatterns = [
    path('', views.index, name='index'),
    #url(r'^about/', views.about, name='about'),
    path('lectureslides/', views.lectureslides, name='lectureslides'),
    path('alllabs/', views.alllabs, name='alllabs'),
    path('devpage/', views.devpage, name='devpage'),
    path('register/', views.register, name='register'),
    path('feedback/', views.feedback, name='feedback'),
    path('sandbox/', views.sandbox, name='sandbox'),
    path('summary/', views.summary, name='summary'),
    path('manage/', views.manage, name='manage'),
    path("add_project/", views.add_project, name="add_project"),
]