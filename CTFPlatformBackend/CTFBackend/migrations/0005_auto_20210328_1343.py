# Generated by Django 3.0.7 on 2021-03-28 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CTFBackend', '0004_auto_20210328_1343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questions',
            name='id',
            field=models.CharField(default='p1ylbhojun', max_length=30, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='team',
            name='id',
            field=models.CharField(default='3us6kmoxl5', max_length=30, primary_key=True, serialize=False),
        ),
    ]
