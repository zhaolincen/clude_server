from django.db import models

from register.models import User_Info


class Product(models.Model):
    P_Name = models.CharField(max_length=20)
    P_Type = models.CharField(max_length=20)
    P_NodeType = models.CharField(max_length=20)
    P_Link = models.CharField(max_length=20)
    P_DataFormat = models.CharField(max_length=20)
    P_Authentication = models.CharField(max_length=20)
    P_Describe = models.CharField(max_length=20)

    P_ProductKey = models.CharField(max_length=20)
    P_ProducSecret = models.CharField(max_length=20)
    P_CreateData = models.DateTimeField(auto_now=True)
    P_Status = models.CharField(max_length=5)
    P_User = models.ForeignKey(User_Info,on_delete=models.CASCADE)
    def __str__(self):
        return self.P_Name
# Create your models here.
