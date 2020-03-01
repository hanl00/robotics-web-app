from django.test import TestCase
from django.test import Client
from rfwa.forms import SignUpForm, LabForm, SlideForm, FeedbackForm   # import all forms

class TestForms(TestCase):

    # def setUp(self):
    #     self.user1 = SignUpForm.objects.create(username = "unIqueUsernaMe", first_name = "big", last_name="chunguS", student_id="1234z")

    ## Valid Form Data

    def test_UserForm_valid(self):
        form = SignUpForm(data={"username" : "unIqueUsernaMe", "first_name" : "big", "last_name" : "chunguS", "student_id" : "1234z", "password1" : "Myhardpassword1", "password2" : "Myhardpassword1"})
        self.assertTrue(form.is_valid())

    ## Invalid Form Data

    # passwords dont match 
    def test_UserForm_wrong_password(self):
        form = SignUpForm(data={"username" : "unIqueUsernaMe", "first_name" : "big", "last_name" : "chunguS", "student_id" : "1234z", "password1" : "Myhardpassword1", "password2" : "1passwordhardMy"})
        self.assertFalse(form.is_valid())

    #empty field
    def test_UserForm_wrong_password(self):
        form = SignUpForm(data={"username" : "unIqueUsernaMe", "first_name" : "big", "student_id" : "1234z", "password1" : "Myhardpassword1", "password2" : "1passwordhardMy"})
        self.assertFalse(form.is_valid())