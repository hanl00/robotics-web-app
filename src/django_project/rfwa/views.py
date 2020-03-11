from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
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
from django.conf import settings
from datetime import timedelta
from datetime import datetime
from datetime import timezone
import json
from django.core.serializers.json import DjangoJSONEncoder
from calendar import monthrange
from datetime import date
from .utils import DatelineCalendar
from django.utils.safestring import mark_safe
from django.shortcuts import render_to_response

# Create your views here.

from django.http import HttpResponse

# GENERAL FEATURES


def register(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            print("success")
            return redirect('login')
        else:
            print("form is not valid")
    else:
        form = SignUpForm()
    return render(request, 'rfwa/register.html', {'form': form})


def index(request):
    now = datetime.now()
    tomorrow = datetime.now() + timedelta(days=1)
    timezone_now = now.replace(tzinfo=timezone.utc)
    timezone_tomorrow = tomorrow.replace(tzinfo=timezone.utc)
    upcoming_labs = Lab.objects.filter(close_Date__range=[
                                       timezone_now, timezone_tomorrow]).order_by('close_Date').values_list('name')
    name_json = json.dumps(list(upcoming_labs), cls=DjangoJSONEncoder)
    # print(type(name_json))
    # print(type(upcoming_labs))
    context_dict = {'name_json': name_json}
    return render(request, 'rfwa/home.html', context_dict)

# calender view


@login_required
def calendar(request, year, month):
    my_labs = Lab.objects.order_by('close_Date').filter(
        close_Date__year=year, close_Date__month=month
    )
    cal = DatelineCalendar(my_labs).formatmonth(year, month)
    return render(request, 'rfwa/calendar.html', {'calendar': mark_safe(cal), })


@login_required
def lectureslides(request):
    slides = Slide.objects.order_by('name')
    return render(request, 'rfwa/lectureslides.html', {'slides': slides})


@login_required
def feedback(request):
    user = User.objects.get(username=request.user.username)
    try:
        feedbacks = Feedback.objects.filter(assignedStudent_username=user)
    except Feedback.DoesNotExist:
        feedback = None
    except ValueError:
        feedback = None
    context_dict = {'current_user': user, 'feedbacks': feedbacks}
    return render(request, 'rfwa/feedback.html', context_dict)


# labs
@login_required
def alllabs(request):
    labs = Lab.objects.order_by('open_Date')
    return render(request, 'rfwa/alllabs.html', {'labs': labs})


@login_required
def download_lab(request, labName):
    try:
        lab = Lab.objects.get(slug=labName)
        user = User.objects.get(username=request.user.username)
    except Lab.DoesNotExist:
        lab = None
    except ValueError:
        lab = None

    if lab:
        output_file_name = '_'.join([str(user), lab.slug])
        zipped_lab_path = lab.lab_Files.path
        unzipped_lab_path = zipped_lab_path[:-4]
        if (os.getcwd()[-4:] != 'labs'):  # wrong directory need to change
            os.chdir('media/labs')

        shutil.make_archive(output_file_name, 'zip', unzipped_lab_path)

        if (os.getcwd() != settings.BASE_DIR):
            os.chdir(settings.BASE_DIR)

        filename_with_type = output_file_name + ".zip"

        lab_directory = os.path.join(settings.MEDIA_ROOT, "labs")

        zip_file = open(os.path.join(lab_directory, filename_with_type), 'rb')
        response = HttpResponse(
            zip_file, content_type='application/force-download')
        response['Content-Disposition'] = 'attachment; filename="%s"' % filename_with_type
        return response

    return redirect("alllabs")


@login_required
def workspace(request):
    return render(request, 'rfwa/workspace.html')


@login_required
def summary(request, username):
    user = User.objects.get(username=username)
    labs = Lab.objects.order_by('close_Date')
    context_dict = {'user': user, 'labs': labs}
    return render(request, 'rfwa/summary.html', context_dict)


# ADMIN MANAGE

@login_required
def manage(request):
    if request.user.is_superuser:
        labs = Lab.objects.order_by('open_Date')
        slides = Slide.objects.order_by('name')
        users = User.objects.all()
        context_dict = {'labs': labs, 'slides': slides, 'users': users}
        return render(request, "rfwa/manage.html", context_dict)
    else:
        return redirect("index")

# labs


@login_required
def manage_labs(request):
    if request.user.is_superuser:
        labs = Lab.objects.order_by('open_Date')
    return render(request, "rfwa/manage_labs.html", {'labs': labs})


@login_required
def add_lab(request):
    if request.user.is_superuser:
        if request.method == 'POST':
            form = LabForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('manage_labs')
        else:
            form = LabForm()
        return render(request, 'rfwa/add_lab.html', {
            'form': form
        })
    else:
        return redirect("index")


@login_required
def update_lab(request, labName):

    current_lab = Lab.objects.get(slug=labName)
    form = LabForm(instance=current_lab)

    if request.method == 'POST':
        form = LabForm(request.POST, instance=current_lab)
        if form.is_valid():
            form.save()
            return redirect('manage_labs')

    return render(request, 'rfwa/add_lab.html', {'form': form})


@login_required
def unzip_lab(request, labName):
    try:
        lab = Lab.objects.get(slug=labName)
    except Lab.DoesNotExist:
        lab = None
    except ValueError:
        lab = None

    # check if in correct directory
    if (os.getcwd() != settings.BASE_DIR):
        os.chdir(settings.BASE_DIR)

    if lab:
        with zipfile.ZipFile(lab.lab_Files.url[1:], 'r') as zip_ref:
            # print(lab.lab_Files.url[1:])
            zip_ref.extractall('../django_project/media/labs/')
    return redirect("manage_labs")


@login_required
def delete_lab(request, labName):
    try:
        lab = Lab.objects.get(slug=labName)
    except Lab.DoesNotExist:
        lab = None
    except ValueError:
        lab = None

    # check if in correct directory
    if (os.getcwd() != settings.BASE_DIR):
        os.chdir(settings.BASE_DIR)

    # if it exists, delete it
    if lab:
        unzipped_lab_path = lab.lab_Files.path
        try:
            shutil.rmtree(unzipped_lab_path[:-4])
        except:
            pass

        os.remove(lab.lab_Files.url[1:])
        lab.delete()
    return redirect("manage_labs")

# slides


@login_required
def manage_slides(request):
    if request.user.is_superuser:
        slides = Slide.objects.order_by('name')
    return render(request, "rfwa/manage_slides.html", {'slides': slides})


@login_required
def add_slide(request):
    if request.user.is_superuser:
        if request.method == 'POST':
            form = SlideForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('manage_slides')
        else:
            form = SlideForm()
        return render(request, 'rfwa/add_slide.html', {
            'form': form
        })
    else:
        return redirect("index")


@login_required
def delete_slide(request, slideName):
    try:
        slide = Slide.objects.get(slug=slideName)
    except slide.DoesNotExist:
        slide = None
    except ValueError:
        slide = None

    # check if in correct directory
    if (os.getcwd() != settings.BASE_DIR):
        os.chdir(settings.BASE_DIR)

    # if it exists, delete it
    if slide:
        os.remove(slide.lecture_Files.url[1:])
        slide.delete()
    return redirect("manage_slides")

# feedbacks


@login_required
def manage_feedbacks(request):
    if request.user.is_superuser:
        feedbacks = Feedback.objects.all()
    return render(request, "rfwa/manage_feedbacks.html", {'feedbacks': feedbacks})


@login_required
def add_feedback(request):
    if request.user.is_superuser:
        if request.method == 'POST':
            form = FeedbackForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('manage_feedbacks')
        else:
            form = FeedbackForm()
        return render(request, 'rfwa/add_feedback.html', {
            'form': form
        })
    else:
        return redirect("index")


@login_required
def update_feedback(request, slugName):

    current_feedback = Feedback.objects.get(slug=slugName)
    form = FeedbackForm(instance=current_feedback)

    if request.method == 'POST':
        form = FeedbackForm(request.POST, instance=current_feedback)
        if form.is_valid():
            form.save()
            return redirect('manage_feedbacks')

    return render(request, 'rfwa/add_feedback.html', {'form': form})


def delete_feedback(request, slugName):
    try:
        feedback = Feedback.objects.get(slug=slugName)
    except feedback.DoesNotExist:
        feedback = None
    except ValueError:
        feedback = None

    # if it exists, delete it
    if feedback:
        feedback.delete()
    return redirect("manage_feedbacks")

# view all users


@login_required
def view_users(request):
    if request.user.is_superuser:
        users = User.objects.all()
    return render(request, "rfwa/view_users.html", {'users': users})
