from django.test import TestCase
from rfwa.models import Lab, Feedback, Slide
from model_mommy import mommy
import datetime as datetime_orig
from datetime import datetime  
from datetime import timedelta 

class rfwaTestMommy(TestCase):

    def test_lab_creation_mommy(self):
        new_lab = mommy.make(Lab)
        self.assertTrue(isinstance(new_lab, Lab))
        self.assertEqual(new_lab.__unicode__(), new_lab.name)
        
    def test_slides_creation_mommy(self):
        new_slide = mommy.make(Slide)
        self.assertTrue(isinstance(new_slide, Slide))
        self.assertEqual(new_slide.__unicode__(), new_slide.name)

    def test_feedback_creation_mommy(self):
        new_feedback = mommy.make(Feedback)
        self.assertTrue(isinstance(new_feedback, Feedback))
    
class TestModels(TestCase):
    
    def setUp(self):
        self.lab1 = Lab.objects.create(
            name = 'Test lab 1',
            open_Date = datetime_orig.datetime.now(),
            close_Date = datetime.now() + timedelta(days=1)
        )

    def test_lab_is_assigned_slug_on_creation(self):
        self.assertEquals(self.lab1.slug, 'test-lab-1')
    
