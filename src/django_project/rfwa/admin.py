from django.contrib import admin
from rfwa import models

# Register your models here.

# admin file upload

admin.site.register(models.Lab)
admin.site.register(models.Slide)
admin.site.register(models.Script)