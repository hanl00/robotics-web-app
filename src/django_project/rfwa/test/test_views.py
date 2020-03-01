from django.test import TestCase, Client
from django.urls import reverse
from rfwa.models import Lab, Slide, Feedback
from django.contrib.auth.models import User

def createNormalUser():
    return User.objects.create_user(username="2288527l", password="testPaSSword3")

def createSuperUser():
    return User.objects.create_superuser(username="admin", email="bestAdmin@admin.gla.ac.uk", password="adm1npAssword0101")

class TestViews(TestCase):
    
    def setUp(self):
        self.client = Client()

        #the name of the url
        self.labs_url = reverse('alllabs')
        self.slides_url = reverse('lectureslides')
        self.workspace_url = reverse('workspace')
        self.feedback_url = reverse('feedback')
        self.summary_url = reverse('summary')
        self.manage_url = reverse('manage')

    ## not logged in

    def test_lab_list_GET(self):
        response = self.client.get(self.labs_url)
        self.assertEquals(response.status_code, 302)

    def test_slide_list_GET(self):
        response = self.client.get(self.slides_url)
        self.assertEquals(response.status_code, 302)

    def test_workspace_list_GET(self):
        response = self.client.get(self.workspace_url)
        self.assertEquals(response.status_code, 302)
    
    def test_feedback_GET(self):
        response = self.client.get(self.feedback_url)
        self.assertEquals(response.status_code, 302)
    
    def test_summary_GET(self):
        response = self.client.get(self.summary_url)
        self.assertEquals(response.status_code, 302)

    def test_manage_GET(self):
        response = self.client.get(self.manage_url)
        self.assertEquals(response.status_code, 302)
        

    ## logged in

    # Use this method instead of login() when a test requires a user be 
    # logged in and the details of how a user logged in aren’t important.

    # Unlike login(), this method skips the authentication and verification 
    # steps: inactive users (is_active=False) are permitted to login and the 
    # user’s credentials don’t need to be provided.

    # normal user

    def test_logged_in_lab_list_GET(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(self.labs_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/alllabs.html')

    def test_logged_in_slide_list_GET(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(self.slides_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/lectureslides.html')

    def test_logged_in_workspace_list_GET(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(self.workspace_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/workspace.html')
    
    def test_logged_in_feedback_GET(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(self.feedback_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/feedback.html')
    
    def test_logged_in_summary_GET(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(self.summary_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/summary.html')

    def test_logged_in_manage_GET(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(self.manage_url)
        self.assertEquals(response.status_code, 302)

    # superuser

    def test_logged_in_manage_GET(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.manage_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/manage.html')