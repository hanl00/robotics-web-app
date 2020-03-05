from django.db import models
from slugify import slugify
from django.urls import reverse
from django.contrib.auth.models import User

# Create your models here.

# adding extra fields to our user model


# class Profile(models.Models):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     student_id = models.CharField(max_length=30, blank=True)

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)


# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()

# admin file upload

# imported from calum's code


class Lab(models.Model):

    name = models.CharField(max_length=128)
    description = models.TextField(max_length=2048)
    open_Date = models.DateTimeField()
    close_Date = models.DateTimeField()
    lab_Files = models.FileField(upload_to='labs/')
    slug = models.SlugField(primary_key=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Lab, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


# model for lecture slides
class Slide(models.Model):

    name = models.CharField(max_length=128)
    lecture_Files = models.FileField(upload_to='slides/')
    slug = models.SlugField(primary_key=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Slide, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


class Feedback(models.Model):

    assignedStudent_username = models.CharField(max_length=128)
    week_number = models.CharField(max_length=128)
    grade = models.TextField(max_length=2048)
    comments = models.TextField(max_length=2048)
    slug = models.SlugField(primary_key=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = '-'.join((slugify(self.assignedStudent_username),
                              slugify(self.week_number)))
        super(Feedback, self).save(*args, **kwargs)

    def __unicode__(self):
        temp = self.assignedStudent_username + "-" + self.week_number
        return temp
