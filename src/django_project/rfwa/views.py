from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from rfwa import forms
from .forms import SignUpForm, LabForm, SlideForm, ScriptForm
from .models import Lab, Slide, Script
import os

# Create your views here.

from django.http import HttpResponse

def index(request):
    # Construct a dictionary to pass to the template engine as its context.
    # Note the key boldmessage is the same as {{ boldmessage }} in the template!
    # context_dict = {'boldmessage': 'Crunchy, creamy, cookie, candy, cupcake!'}
    # Return a rendered response to send to the client.
    # We make use of the shortcut function to make our lives easier.
    # Note that the first parameter is the template we wish to use.
    return render(request, 'rfwa/index.html')
   

def lectureslides(request):
    slides = Slide.objects.order_by('name')
    return render(request, 'rfwa/lectureslides.html', {'slides':slides})

def alllabs(request):
    labs = Lab.objects.order_by('open_Date')
    # lablist = []
    # for lab in lablist:
        # if lab.openDate <= timezone.now():
            # lablist.append(lab)
    # context_dict = {'labs':lablist}
    return render(request, 'rfwa/alllabs.html', {'labs':labs})

def devpage(request):
    return render(request, 'rfwa/devpage.html')

def feedback(request):
    return render(request, 'rfwa/feedback.html')

def sandbox(request):
    return render(request, 'rfwa/sandbox.html')

def summary(request):
    return render(request, 'rfwa/summary.html')

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

def manage(request):
    if request.user.is_superuser:
        labs = Lab.objects.order_by('open_Date')
        scripts = Script.objects.order_by('name')
        slides = Slide.objects.order_by('name')
        context_dict = {'labs':labs, 'scripts':scripts, 'slides':slides}
        return render(request, "rfwa/managev2.html", context_dict)
    else:
        return redirect("index")

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

def delete_lab(request, labName):
    try:
        lab = Lab.objects.get(slug=labName)
    except Lab.DoesNotExist:
        lab = None
    except ValueError:
        lab = None

    #if it exists, delete it
    if lab:
        os.remove(lab.lab_Files.url[1:])
        lab.delete()
    return redirect("manage")

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

def add_script(request):
    if request.user.is_superuser:
        if request.method == 'POST':
            scriptForm = ScriptForm(request.POST, request.FILES)
            if scriptForm.is_valid():
                scriptForm.save()
                return redirect('manage')
        else:
            scriptForm = ScriptForm()
        return render(request, 'rfwa/add_script.html', {
            'form': scriptForm
        })
    else:
        return redirect("index")

def execute_script(request):
    command = ""
    with open(request.GET.getlist('filePath')[0][1:],'r') as f:
        scriptCommand = [l.rstrip() for l in f]

    subprocess.call((" && ").join(scriptCommand), shell=True)
    return JsonResponse({"status": "success"})

def delete_script(request, scriptName):
    try:
        scr = Script.objects.get(slug=scriptName)
    except Script.DoesNotExist:
        scr = None
    except ValueError:
        scr = None

    #if it exists, delete it
    if scr:
        os.remove(scr.script_Files.url[1:])
        scr.delete()
    return redirect("manage")

