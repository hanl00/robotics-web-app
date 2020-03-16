from django.test import TestCase, Client
from django.urls import reverse
from rfwa.models import Lab, Slide, Feedback
from django.contrib.auth.models import User
from datetime import timedelta
from datetime import datetime
from datetime import timezone
import datetime
from datetime import date


def createNormalUser():
    return User.objects.create_user(username="2288527l", password="testPaSSword3")


def createSuperUser():
    return User.objects.create_superuser(username="admin", email="bestAdmin@admin.gla.ac.uk", password="adm1npAssword0101")


class TestViews(TestCase):

    def setUp(self):
        today = datetime.date.today()
        year = today.year
        month = today.month
        self.username = '2288527l'
        self.client = Client()
        self.client.login(username='2288527l', password='testPaSSword3')

        # the name of the url which all normal users can access
        self.login_url = reverse('login')
        self.index_url = reverse('index')
        self.home_url = reverse('home', kwargs={'year': year, 'month': month})
        self.labs_url = reverse('alllabs')
        self.slides_url = reverse('lectureslides')
        self.workspace_url = reverse('workspace')
        self.feedback_url = reverse('feedback')

        # superuser only
        self.manage_url = reverse('manage')

        # lab
        labName = "testLab"
        self.manage_labs_url = reverse('manage_labs')
        self.add_lab_url = reverse('add_lab')
        self.update_lab_url = reverse(
            'update_lab', kwargs={'labName': labName})
        self.unzip_lab_url = reverse('unzip_lab', kwargs={'labName': labName})
        self.delete_lab_url = reverse(
            'delete_lab', kwargs={'labName': labName})

        # slide
        slideName = "testSlide"
        self.manage_slides_url = reverse('manage_slides')
        self.add_slide_url = reverse('add_slide')
        self.delete_slide_url = reverse(
            'delete_slide', kwargs={'slideName': slideName})

        # feedback
        slugName = "testFeedback"
        self.manage_feedbacks_url = reverse('manage_feedbacks')
        self.add_feedback_url = reverse('add_feedback')
        self.update_feedback_url = reverse(
            'update_feedback', kwargs={'slugName': slugName})
        self.delete_feedback_url = reverse(
            'delete_feedback', kwargs={'slugName': slugName})

        # view users
        self.view_users_url = reverse('view_users')

    # normal users

    # not logged in

    def test_index_GET(self):
        response = self.client.get(self.index_url)
        self.assertEquals(response.status_code, 302)
        self.assertRedirects(response, self.login_url, status_code=302,
                             target_status_code=200, msg_prefix='', fetch_redirect_response=True)

    def test_home_GET(self):
        response = self.client.post(self.home_url)
        self.assertEquals(response.status_code, 302)

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

    def test_manage_GET(self):
        response = self.client.get(self.manage_url)
        self.assertEquals(response.status_code, 302)

    # logged in

    # Use this method instead of login() when a test requires a user be
    # logged in and the details of how a user logged in aren’t important.

    # Unlike login(), this method skips the authentication and verification
    # steps: inactive users (is_active=False) are permitted to login and the
    # user’s credentials don’t need to be provided.
    # normal user

    def test_home_GET(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(self.home_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/home.html')

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
        response = self.client.post(
            reverse('summary', kwargs={'username': '2288527l'}))
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/summary.html')

    def test_logged_in_manage_GET(self):
        self.client.force_login(createNormalUser())
        response = self.client.get(self.manage_url)
        self.assertEquals(response.status_code, 302)

    # superuser

    ## not logged in


    # labs
    def test_manage_labs(self):
        response = self.client.get(self.manage_labs_url)
        self.assertEqual(response.status_code, 302)

    def test_add_lab(self):
        response = self.client.get(self.add_lab_url)
        self.assertEqual(response.status_code, 302)

    def test_update_lab(self):
        response = self.client.get(self.update_lab_url)
        self.assertEqual(response.status_code, 302)

    def test_add_lab(self):
        response = self.client.get(self.add_lab_url)
        self.assertEqual(response.status_code, 302)

    def test_unzip_lab(self):
        response = self.client.get(self.unzip_lab_url)
        self.assertEqual(response.status_code, 302)

    def test_delete_lab(self):
        response = self.client.get(self.delete_lab_url)
        self.assertEqual(response.status_code, 302)

    # slides
    def test_manage_slides(self):
        response = self.client.get(self.manage_slides_url)
        self.assertEqual(response.status_code, 302)

    def test_add_slide(self):
        response = self.client.get(self.add_slide_url)
        self.assertEqual(response.status_code, 302)
    
    def test_delete_slide(self):
        response = self.client.get(self.delete_slide_url)
        self.assertEqual(response.status_code, 302)

    # feedbacks
    def test_manage_feedback(self):
        response = self.client.get(self.manage_feedbacks_url)
        self.assertEqual(response.status_code, 302)

    def test_add_feedback(self):
        response = self.client.get(self.add_feedback_url)
        self.assertEqual(response.status_code, 302)

    def test_update_feedback(self):
        response = self.client.get(self.update_feedback_url)
        self.assertEqual(response.status_code, 302)

    # def test_delete_feedback(self):
    #     response = self.client.get(self.delete_feedback_url)
    #     self.assertEqual(response.status_code, 302)

    # view users
    def test_view_users(self):
        response = self.client.get(self.view_users_url)
        self.assertEqual(response.status_code, 302)    

    # logged in

    # manage page

    def test_logged_in_superuser_manage_GET(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.manage_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/manage.html')

    # labs

    def test_manage_labs_success_GET(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.manage_labs_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/manage_labs.html')

    def test_add_lab_success_POST(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.add_lab_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/add_lab.html')

    # slides

    def test_manage_slides_success_GET(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.manage_slides_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/manage_slides.html')

    def test_add_slide_success_POST(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.add_slide_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/add_slide.html')

    # feedbacks

    def test_manage_feedbacks_success_GET(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.manage_feedbacks_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/manage_feedbacks.html')

    def test_add_feedback_success_POST(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.add_feedback_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/add_feedback.html')

    # view users

    def test_view_users_success_GET(self):
        self.client.force_login(createSuperUser())
        response = self.client.get(self.view_users_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'rfwa/view_users.html')