# Generated by Django 2.2.6 on 2020-01-14 13:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rfwa', '0003_lab'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lab',
            old_name='closeDate',
            new_name='close_Date',
        ),
        migrations.RenameField(
            model_name='lab',
            old_name='openDate',
            new_name='open_Date',
        ),
        migrations.RenameField(
            model_name='lab',
            old_name='projectFiles',
            new_name='project_Files',
        ),
    ]
