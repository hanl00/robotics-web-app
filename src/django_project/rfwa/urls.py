from django.conf.urls import url
from django.urls import path, re_path
from rfwa import views

urlpatterns = [
    path('', views.index, name='index'),
    #url(r'^about/', views.about, name='about'),
    path('lectureslides/', views.lectureslides, name='lectureslides'),
    path('alllabs/', views.alllabs, name='alllabs'),
    path('workspace/', views.workspace, name='workspace'),
    path('register/', views.register, name='register'),
    path('feedback/', views.feedback, name='feedback'),
    path('summary/', views.summary, name='summary'),
    path('manage/', views.manage, name='manage'),
    path("add_lab/", views.add_lab, name="add_lab"),
    re_path("delete_lab/(?P<labName>[\w\-]+)/", views.delete_lab, name='delete_lab'),
    path("add_slide/", views.add_slide, name="add_slide"),
    re_path("delete_slide/(?P<slideName>[\w\-]+)/", views.delete_slide, name='delete_slide'),
    re_path("unzip_lab/(?P<labName>[\w\-]+)/", views.unzip_lab, name='unzip_lab'),
    path("manage_labs/", views.manage_labs, name="manage_labs"),
    path("manage_slides/", views.manage_slides, name="manage_slides"),
    path("manage_feedback/", views.manage_feedback, name="manage_feedback"),
    path("add_feedback/", views.add_feedback, name="add_feedback"),
    re_path("delete_slide/(?P<slideName>[\w\-]+)/", views.delete_slide, name='delete_slide'),
    
]