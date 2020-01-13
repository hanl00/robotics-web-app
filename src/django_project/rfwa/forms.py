from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


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