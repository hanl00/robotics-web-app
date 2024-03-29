from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Lab, Slide, Feedback
from django.forms import ValidationError

## custom form

class SignUpForm(UserCreationForm):

    username = forms.CharField(help_text="Your studend ID.")
    first_name = forms.CharField(max_length=30, required=True, help_text=False)
    last_name = forms.CharField(max_length=30, required=True, help_text=False)    

    def clean_username(self):
        data = self.cleaned_data['username']

        # 3 checks, check length = 8, last letter must be alphabet, first 7 must be numbers
        if len(data) == 8 and data[-1].isalpha() and data[:-1].isdecimal():
            return data
        else:
            raise forms.ValidationError("Must be student ID")

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'password1', 'password2', )

class LabForm(forms.ModelForm):

    name = forms.CharField(max_length = 128, label="Lab name")
    description = forms.CharField(max_length = 2048, widget=forms.Textarea, label="Lab description")
    open_Date = forms.DateTimeField(label="Lab Opening Date/Time")
    close_Date = forms.DateTimeField(label="Lab Deadline Date/Time")
    lab_Files = forms.FileField(label="Lab Files (.tar.gz)")

    class Meta:
        model = Lab
        fields = ('name', 'description', 'open_Date', 'close_Date', 'lab_Files')

class SlideForm(forms.ModelForm):

    name = forms.CharField(max_length = 128, label="Slide name")
    lecture_Files = forms.FileField(label="Slide Files (.pdf)")

    class Meta:
        model = Slide
        fields = ('name', 'lecture_Files')
    
GRADE_CHOICES = [
    ('A1', 'A1'), ('A2', 'A2'), ('A3', 'A3'), ('A4', 'A4'), ('A5', 'A5'),
    ('B1', 'B1'), ('B2', 'B2'), ('B3', 'B3'),
    ('C1', 'C1'), ('C2', 'C2'), ('C3', 'C3'),
    ('D1', 'D1'), ('D2', 'D2'), ('D3', 'D3'),
    ('E1', 'E1'), ('E2', 'E2'), ('E3', 'E3'),
    ('F1', 'F1'), ('F2', 'F2'), ('F3', 'F3'),
    ('G1', 'G1'), ('G2', 'G2'), ('G3', 'G3'),
    ('H0', 'H0'),
    ]

WEEK_CHOICES = [
    ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'),
    ('6', '6'), ('7', '7'), ('8', '8'),
    ('9', '9'), ('10', '10')
    ]

class FeedbackForm(forms.ModelForm):

    assignedStudent_username = forms.CharField(max_length = 50, label="Assign student username")
    week_number = forms.CharField(label="Week number", widget=forms.Select(choices=WEEK_CHOICES))
    grade = forms.CharField(label="Grade", widget=forms.Select(choices=GRADE_CHOICES))
    comments = forms.CharField(max_length = 500, label="Feedback")

    class Meta:
        model = Feedback
        fields = ('assignedStudent_username', 'week_number', 'grade', 'comments' )
    
