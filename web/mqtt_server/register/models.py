from django.db import models

class User_Info(models.Model):

    User = models.CharField(max_length=18)
    Password = models.CharField(max_length=64)
    Tel = models.CharField(max_length=18)
    Compant = models.CharField(max_length=30)
    Other = models.CharField(max_length=300)

    CreateData = models.DateTimeField(auto_now=True)
    LoginData = models.DateTimeField(auto_now=True)
    LoginIP = models.CharField(max_length=16)
    RegisterIP = models.CharField(max_length=16)
    ChecKey = models.CharField(max_length=32)

    def __str__(self):
        return self.ChecKey

# Create your models here.
