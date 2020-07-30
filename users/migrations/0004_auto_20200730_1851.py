# Generated by Django 3.0.8 on 2020-07-30 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20200730_1828'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='mojang_email',
            field=models.EmailField(max_length=40, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='mojang_uuid',
            field=models.CharField(default='', max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=30, unique=True),
        ),
    ]
