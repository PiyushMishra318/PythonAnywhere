from django.db import models

# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=30,default="")
    email = models.EmailField(max_length=40,default="")
    subject = models.CharField(max_length=100,default="")
    message = models.CharField(max_length=200,default="")

    def __str__(self):
        return self.name
