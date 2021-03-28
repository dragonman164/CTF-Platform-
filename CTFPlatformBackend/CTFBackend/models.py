from django.db import models
import random
import string

# Create your models here.
class Questions(models.Model):

    generate = list(string.ascii_lowercase + string.digits)
    random.shuffle(generate)
    
    Difficulty_Choices = (
        ('Low','Low'),
        ('Medium','Medium'),
        ('High','High'),
    )
    id = models.CharField(primary_key=True,max_length=30,default=''.join(generate[:10]))
    name = models.CharField(null=False,max_length= 30)
    description = models.TextField(null = False)
    flag = models.CharField(null = False,max_length=50)
    category = models.CharField(null = False,max_length=30)
    points = models.IntegerField(null = False, default=0)
    difficulty_level = models.CharField(max_length=200,choices=Difficulty_Choices)

class Team(models.Model):
    generate = list(string.ascii_lowercase + string.digits)
    random.shuffle(generate)
    id = models.CharField(primary_key=True,null = False,max_length=30,default=''.join(generate[:10]))
    name = models.CharField(max_length=30)
    questions_solved = models.IntegerField(default=0,null=False)
    total_score = models.IntegerField(default = 0,null =  False)
    loginId = models.CharField(max_length=30,null = False)
    loginPass = models.CharField(max_length=30,null = False) 
