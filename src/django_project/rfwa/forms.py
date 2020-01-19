from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Lab, Slide

## custom form

class SignUpForm(UserCreationForm):
    username = forms.CharField(help_text=False)
    first_name = forms.CharField(max_length=30, required=True, help_text=False)
    last_name = forms.CharField(max_length=30, required=True, help_text=False)
    email = forms.EmailField(max_length=254)

    def clean_email(self):
        data = self.cleaned_data['email']
        if "@student.gla.ac.uk" not in data:   # any check you need
            raise forms.ValidationError("Must be student email address")
        return data

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )

class LabForm(forms.ModelForm):

    name = forms.CharField(max_length = 128, label="Lab name")
    description = forms.CharField(max_length = 2048, widget=forms.Textarea, label="Lab description")
    open_Date = forms.DateTimeField(label="Lab Opening Date/Time")
    close_Date = forms.DateTimeField(label="Lab Deadline Date/Time")
    lab_Files = forms.FileField(label="Lab Files (.tar.gz)")

    class Meta:
        model = Lab
        fields = ('name', 'description', 'open_Date', 'close_Date', 'lab_Files' )

class SlideForm(forms.ModelForm):

    name = forms.CharField(max_length = 128, label="Slide name")
    description = forms.CharField(max_length = 2048, widget=forms.Textarea, label="Slide description")
    lecture_Files = forms.FileField(label="Slide Files (.pdf)")

    class Meta:
        model = Slide
        fields = ('name', 'description', 'lecture_Files')