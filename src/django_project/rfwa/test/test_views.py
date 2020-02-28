from django.test import TestCase, Client
from django.urls import reverse
from rfwa.models import Lab, Slide, Feedback
from django.contrib.auth.models import User

def createNormalUser():
    return User.objects.create_user(username="9876543u", password="hard2guessPassword")

def createSuperUser():
    return User.objects.create_superuser(username="admin", email="admin@robotics.com", password="Password1234")

class TestViews(TestCase):
    
    def setUp(self):
        self.client = Client()
        #the name of the url
        self.labs_url = reverse('alllabs')
        self.slides_url = reverse('lectureslides')

    def test_lab_list_GET(self):
        
        response = self.client.get(self.labs_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/alllabs.html')

    def test_slide_list_GET(self):
        
        response = self.client.get(self.slides_url)
        self.assertEquals(response.status_code, 302)
        # self.assertTemplateUsed(response, 'rfwa/lectureslides.html')

    def test_profile_failed_not_logged_in(self):
        response = self.client.get(reverse('summary'))
        self.assertEqual(response.status_code, 302)

    def test_profile_success(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(reverse('summary'))
        self.assertEqual(response.status_code, 200)

    def test_profile_using_template(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(reverse('summary'))
        self.assertTemplateUsed(response, 'rfwa/summary.html')
