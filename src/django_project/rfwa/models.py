from django.db import models

# Create your models here.

# admin file upload
class Labs(models.Model):
    specifications = models.FileField(upload_to='lab_specifications')
