from django.db import models
from slugify import slugify
from django.urls import reverse

# Create your models here.

# admin file upload

# unused
class Labs(models.Model):
    specifications = models.FileField(upload_to='lab_specifications')

# imported from calum's code
class Lab(models.Model):

    name = models.CharField(max_length = 128)
    description = models.TextField(max_length = 2048)
    open_Date = models.DateTimeField()
    close_Date = models.DateTimeField()
    project_Files = models.FileField(upload_to='labs/')
    slug = models.SlugField(primary_key = True, blank = True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Lab, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name

# model for lecture slides
class Slide(models.Model):

    name = models.CharField(max_length = 128)
    lecture_slides = models.FileField(upload_to='slides/')
    slug = models.SlugField(primary_key = True, blank = True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Lab, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name
