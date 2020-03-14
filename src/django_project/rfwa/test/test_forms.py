from django.test import TestCase
from django.test import Client
from rfwa.forms import SignUpForm, LabForm, SlideForm, FeedbackForm   # import all forms
from django.core.files.uploadedfile import SimpleUploadedFile
from django.utils import timezone
import os
from django.conf import settings
from datetime import timedelta
from datetime import datetime


class TestForms(TestCase):

    # User registration form

    # Valid User Registration Form

    def test_UserForm_valid(self):
        form = SignUpForm(data={"username": "2288527l", "first_name": "big", "last_name": "chunguS",
                                "password1": "Myhardpassword1", "password2": "Myhardpassword1"})
        self.assertTrue(form.is_valid())

    # Invalid User Registration Form

    # passwords dont match
    def test_UserForm_wrong_password(self):
        form = SignUpForm(data={"username": "2288527l", "first_name": "big", "last_name": "chunguS",
                                "password1": "Myhardpassword1", "password2": "1passwordhardMy"})
        self.assertFalse(form.is_valid())

    # empty field, no last name
    def test_UserForm_empty_field(self):
        form = SignUpForm(data={"username": "2288527l", "first_name": "big",
                                "password1": "Myhardpassword1", "password2": "1passwordhardMy"})
        self.assertFalse(form.is_valid())

    # username is not student id format,
    def test_UserForm_invalid_username(self):
        form = SignUpForm(data={"username": "uNiqueUserName1", "first_name": "big2",
                                "last_name": "chunguS", "password1": "Myhardpassword1", "password2": "Myhardpassword1"})
        self.assertFalse(form.is_valid())

    # Slide form

    # Valid Slide Form

    def test_SlideForm_valid(self):
        test_file_path = os.path.join(
            settings.BASE_DIR, 'rfwa/test/part_iii.pdf')
        upload_file = open(test_file_path, 'rb')
        form_data = {'name': 'test slide'}

        form = SlideForm(data=form_data, files={
                         'lecture_Files': SimpleUploadedFile(upload_file.name, upload_file.read())})
        self.assertTrue(form.is_valid())

    # Invalid Slide Form

    # empty field, no slide name

    def test_SlideForm_empty_field(self):
        test_file_path = os.path.join(
            settings.BASE_DIR, 'rfwa/test/part_iii.pdf')
        upload_file = open(test_file_path, 'rb')
        form_data = {'name': ''}

        form = SlideForm(data=form_data, files={
                         'lecture_Files': SimpleUploadedFile(upload_file.name, upload_file.read())})
        self.assertFalse(form.is_valid())

    # Lab form

    # Valid Lab Form

    def test_LabForm_valid(self):
        test_file_path = os.path.join(
            settings.BASE_DIR, 'rfwa/test/part_iii.pdf')
        upload_file = open(test_file_path, 'rb')
        next_day = datetime.now() + timedelta(days=1)
        form_data = {'name': 'test lab', 'description': 'this is the test lab', 'open_Date': timezone.now(),
                     'close_Date': next_day}

        form = LabForm(data=form_data, files={'lab_Files': SimpleUploadedFile(
            upload_file.name, upload_file.read())})
        self.assertTrue(form.is_valid())

    # Invalid Lab Form

    # empty field, no lab name

    def test_LabForm_empty_field(self):
        test_file_path = os.path.join(
            settings.BASE_DIR, 'rfwa/test/part_iii.pdf')
        upload_file = open(test_file_path, 'rb')
        form_data = {'name': ''}

        form = LabForm(data=form_data, files={'lab_Files': SimpleUploadedFile(
            upload_file.name, upload_file.read())})
        self.assertFalse(form.is_valid())

    # Feedback form

    # Valid Feedback Form

    def test_FeedbackForm_valid(self):
        form_data = {'assignedStudent_username': '2288527l', 'week_number': '4',
                     'grade': 'C1', 'comments': 'keep up the good work!'}

        form = FeedbackForm(data=form_data)
        self.assertTrue(form.is_valid())

    # Invalid Feedback Form

    # empty field, no assigned username

    def test_FeedbackForm_empty_field(self):
        form_data = {'assignedStudent_username': '', 'week_number': '4',
                     'grade': 'C1', 'comments': 'keep up the good work!'}

        form = FeedbackForm(data=form_data)
        self.assertFalse(form.is_valid())
