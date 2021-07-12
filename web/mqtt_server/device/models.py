from django.db import models

from createproduct.models import Product
from register.models import User_Info


class Device(models.Model):
    D_Name = models.CharField(max_length=20)
    D_Drscribe = models.CharField(max_length=100)
    D_Stats = models.CharField(max_length=5)
    D_LastTime = models.DateTimeField(auto_now=True)
    D_Poduct = models.ForeignKey(Product,on_delete=models.CASCADE)
    D_User = models.ForeignKey(User_Info,on_delete=models.CASCADE)
    def __str__(self):
        return self.D_Name
# Create your models here.
