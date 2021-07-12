from django.db import models

from createproduct.models import Product
from device.models import Device
from register.models import User_Info


class Topic(models.Model):
    T_Name = models.CharField(max_length=20)
    T_Dir = models.CharField(max_length=128)
    T_Permission = models.CharField(max_length=5)
    T_Data = models.CharField(max_length=20)
    T_User = models.ForeignKey(User_Info,on_delete=models.CASCADE)
    T_Product = models.ForeignKey(Product,on_delete=models.CASCADE)
    T_Device = models.ForeignKey(Device,on_delete=models.CASCADE)
    def __str__(self):
        return self.T_Name
# Create your models here.
