from django.db import models

# Create your models here.

class Todo(models.Model):
    description = models.TextField()
    isComplete = models.BooleanField(default=False)
    timeCreated = models.DateTimeField(auto_now_add=True)
    timeCompleted = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.description
