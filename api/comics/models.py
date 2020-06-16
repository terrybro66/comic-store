from django.db import models

class Comic(models.Model):
    name = models.CharField(max_length=50)
    publisher = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    cover = models.ImageField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name
