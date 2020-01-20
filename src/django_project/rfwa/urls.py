from django.conf.urls import url
from django.urls import path, re_path
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
    path("add_lab/", views.add_lab, name="add_lab"),
    re_path("delete_lab/(?P<labName>[\w\-]+)/", views.delete_lab, name='delete_lab'),
    path("add_slide/", views.add_slide, name="add_slide"),
    re_path("delete_slide/(?P<slideName>[\w\-]+)/", views.delete_slide, name='delete_slide'),
    path("add_script", views.add_script, name="add_script"),
    re_path("delete_script/(?P<scriptName>[\w\-]+)/", views.delete_script, name='delete_script'),
]