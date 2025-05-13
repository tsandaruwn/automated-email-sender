from django.db import models
from django.utils import timezone

class EmailTemplate(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class EmailSchedule(models.Model):
    id = models.BigAutoField(primary_key=True)
    template = models.ForeignKey(EmailTemplate, on_delete=models.CASCADE)
    scheduled_date = models.DateField()
    scheduled_time = models.TimeField()
    interval = models.CharField(max_length=50)
    quantity = models.IntegerField()
    receivers = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Schedule for {self.template.name}"

class EmailHistory(models.Model):
    id = models.BigAutoField(primary_key=True)
    template = models.ForeignKey(EmailTemplate, on_delete=models.SET_NULL, null=True)
    recipient = models.EmailField(default='no-reply@example.com')  # Added default value
    subject = models.CharField(max_length=200)
    body = models.TextField()
    status = models.CharField(max_length=20, default='PENDING')
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Email to {self.recipient}"