from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from rfwa import forms
from .forms import SignUpForm, LabForm, SlideForm, FeedbackForm
from .models import Lab, Slide, Feedback
import subprocess
import os
import zipfile
from django.contrib.auth.models import User
import time
import signal
import shutil
from django.contrib.auth.decorators import login_required

# Create your views here.

from django.http import HttpResponse

## GENERAL FEATURES 

def index(request):
    # Construct a dictionary to pass to the template engine as its context.
    # Note the key boldmessage is the same as {{ boldmessage }} in the template!
    # context_dict = {'boldmessage': 'Crunchy, creamy, cookie, candy, cupcake!'}
    # Return a rendered response to send to the client.
    # We make use of the shortcut function to make our lives easier.
    # Note that the first parameter is the template we wish to use.
    return render(request, 'rfwa/home.html')

def register(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('login')
    else:
        form = SignUpForm()
    return render(request, 'rfwa/register.html', {'form': form})
   
@login_required
def lectureslides(request):
    slides = Slide.objects.order_by('name')
    return render(request, 'rfwa/lectureslides.html', {'slides':slides})

def feedback(request):
    user = User.objects.get(username=request.user.username)
    try:
        feedbacks = Feedback.objects.filter(assignedStudent_username=user)
    except Feedback.DoesNotExist:
        feedback = None
    except ValueError:
        feedback = None
    context_dict = {'current_user': user, 'feedbacks':feedbacks}
    return render(request, 'rfwa/feedback.html', context_dict)


# labs 

def alllabs(request):
    labs = Lab.objects.order_by('open_Date')
    

    #match labs upload zip to unzipped version uri

    
    # lablist = []
    # for lab in lablist:
        # if lab.openDate <= timezone.now():
            # lablist.append(lab)
    # context_dict = {'labs':lablist}
    return render(request, 'rfwa/alllabs.html', {'labs':labs})

def workspace(request):
    return render(request, 'rfwa/workspace.html')

@login_required
def summary(request):
    return render(request, 'rfwa/summary.html')



## ADMIN MANAGE

def manage(request):
    if request.user.is_superuser:
        labs = Lab.objects.order_by('open_Date')
        slides = Slide.objects.order_by('name')
        users = User.objects.all()
        context_dict = {'labs':labs, 'slides':slides, 'users': users}
        return render(request, "rfwa/manage.html", context_dict)
    else:
        return redirect("index")

# labs 

def manage_labs(request):
    if request.user.is_superuser:
        labs = Lab.objects.order_by('open_Date')
    return render(request, "rfwa/manage_labs.html", {'labs': labs})

def add_lab(request):
    if request.user.is_superuser:
        if request.method == 'POST':
            form = LabForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('manage')
        else:
            form = LabForm()
        return render(request, 'rfwa/add_lab.html', {
            'form': form
        })
    else:
        return redirect("index")
    
def unzip_lab(request, labName):
    try:
        lab = Lab.objects.get(slug=labName)
    except Lab.DoesNotExist:
        lab = None
    except ValueError:
        lab = None
    
    if lab:
        with zipfile.ZipFile(lab.lab_Files.url[1:], 'r') as zip_ref:
            print(lab.lab_Files.url[1:])
            zip_ref.extractall('../django_project/media/labs/')
    return redirect("manage")

def delete_lab(request, labName):
    try:
        lab = Lab.objects.get(slug=labName)
    except Lab.DoesNotExist:
        lab = None
    except ValueError:
        lab = None

    #if it exists, delete it
    if lab:
        unzipped_lab = lab.lab_Files.path
        shutil.rmtree(unzipped_lab[:-4])
        os.remove(lab.lab_Files.url[1:])
        lab.delete()
    return redirect("manage")

# feedbacks

def manage_feedback(request):
    if request.user.is_superuser:
        users = User.objects.all()
    return render(request, "rfwa/manage_feedback.html", {'users':users})

def add_feedback(request):
    if request.user.is_superuser:
        if request.method == 'POST':
            form = FeedbackForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('manage')
        else:
            form = FeedbackForm()
        return render(request, 'rfwa/add_feedback.html', {
            'form': form
        })
    else:
        return redirect("index")

# def delete_feedback(request, labName):
#     try:
#         lab = Lab.objects.get(slug=labName)
#     except Lab.DoesNotExist:
#         lab = None
#     except ValueError:
#         lab = None

#     #if it exists, delete it
#     if lab:
#         os.remove(lab.lab_Files.url[1:])
#         lab.delete()
#     return redirect("manage")

# slides

def manage_slides(request):
    if request.user.is_superuser:
        slides = Slide.objects.order_by('name')
    return render(request, "rfwa/manage_slides.html", {'slides':slides})

def add_slide(request):
    if request.user.is_superuser:
        if request.method == 'POST':
            form = SlideForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('manage')
        else:
            form = SlideForm()
        return render(request, 'rfwa/add_slide.html', {
            'form': form
        })
    else:
        return redirect("index")

def delete_slide(request, slideName):
    try:
        slide = Slide.objects.get(slug=slideName)
    except slide.DoesNotExist:
        slide = None
    except ValueError:
        slide = None

    #if it exists, delete it
    if slide:
        os.remove(slide.lecture_Files.url[1:])
        slide.delete()
    return redirect("manage")