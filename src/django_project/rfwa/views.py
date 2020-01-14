from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from rfwa import forms
from .forms import SignUpForm
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
    return render(request, 'rfwa/lectureslides.html')

def alllabs(request):
    return render(request, 'rfwa/alllabs.html')

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

