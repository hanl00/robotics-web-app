# Generated by Django 2.2.6 on 2020-01-19 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rfwa', '0006_auto_20200114_1712'),
    ]

    operations = [
        migrations.AddField(
            model_name='slide',
            name='description',
            field=models.TextField(default='No description', max_length=2048),
        ),
    ]