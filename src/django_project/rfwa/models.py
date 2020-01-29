from django.db import models
from slugify import slugify
from django.urls import reverse

# Create your models here.

# admin file upload

# imported from calum's code
class Lab(models.Model):

    name = models.CharField(max_length = 128)
    description = models.TextField(max_length = 2048)
    open_Date = models.DateTimeField()
    close_Date = models.DateTimeField()
    lab_Files = models.FileField(upload_to='labs/')
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
    lecture_Files = models.FileField(upload_to='slides/')
    slug = models.SlugField(primary_key = True, blank = True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Slide, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name

class Script(models.Model):

    name = models.CharField(max_length=50)
    script_Files = models.FileField(upload_to='scripts/')
    slug = models.SlugField(primary_key = True, blank = True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Script, self).save(*args, **kwargs)

class Feedback(models.Model):

    assignedStudent_username = models.CharField(max_length = 128)
    week_number = models.CharField(max_length = 128)
    grade = models.TextField(max_length = 2048)
    description = models.TextField(max_length = 2048)
    slug = models.SlugField(primary_key = True, blank = True)

    def save(self, *args, **kwargs):
        self.slug = '-'.join((slugify(self.assignedStudent_username), slugify(self.week_number)))
        super(Feedback, self).save(*args, **kwargs)

