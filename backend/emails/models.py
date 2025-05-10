from django.db import models

class EmailTemplate(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=200)
    body = models.TextField()

class EmailSchedule(models.Model):
    template = models.ForeignKey(EmailTemplate, on_delete=models.CASCADE)
    scheduled_date = models.DateField()
    scheduled_time = models.TimeField()
    interval = models.CharField(max_length=50)
    quantity = models.IntegerField()

class EmailHistory(models.Model):
    subject = models.CharField(max_length=200)
    body = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
