from django.contrib import admin
from .models import EmailTemplate, EmailSchedule, EmailHistory

admin.site.register(EmailTemplate)
admin.site.register(EmailSchedule)
admin.site.register(EmailHistory)