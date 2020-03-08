from django.conf.urls import url
from django.urls import path, re_path
from rfwa import views

urlpatterns = [

    # all users
    path('home/', views.index, name='index'),
    path('lectureslides/', views.lectureslides, name='lectureslides'),
    path('alllabs/', views.alllabs, name='alllabs'),
    path('workspace/', views.workspace, name='workspace'),
    path('register/', views.register, name='register'),
    path('feedback/', views.feedback, name='feedback'),
    path('summary/<str:username>/', views.summary, name='summary'),

    # admin only
    path('manage/', views.manage, name='manage'),

    # labs
    path("manage_labs/", views.manage_labs, name="manage_labs"),
    path("add_lab/", views.add_lab, name="add_lab"),
    path("update_lab/<slug:labName>/", views.update_lab, name='update_lab'),
    path("unzip_lab/<slug:labName>/", views.unzip_lab, name='unzip_lab'),
    path("delete_lab/<slug:labName>/", views.delete_lab, name='delete_lab'),
    path("download_lab/<slug:labName>/", views.download_lab, name='download_lab'),

    # slides
    path("manage_slides/", views.manage_slides, name="manage_slides"),
    path("add_slide/", views.add_slide, name="add_slide"),
    path("delete_slide/<slug:slideName>/",
         views.delete_slide, name='delete_slide'),

    # feedbacks
    path("manage_feedbacks/", views.manage_feedbacks, name="manage_feedbacks"),
    path("add_feedback/", views.add_feedback, name="add_feedback"),
    path("update_feedback/<slug:slugName>/",
         views.update_feedback, name='update_feedback'),
    path("delete_feedback/<slug:slugName>/",
         views.delete_feedback, name='delete_feedback'),

    # display users
    path("view_users/", views.view_users, name="view_users"),

]
