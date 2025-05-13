from django.core.mail import send_mail
from django.conf import settings
from datetime import datetime, timedelta
from .models import EmailSchedule, EmailHistory

def send_scheduled_emails():
    """
    Check for scheduled emails and send them if it's time
    """
    now = datetime.now()
    today = now.date()
    current_time = now.time()
    
    # Get all schedules for today
    schedules = EmailSchedule.objects.filter(date=today)
    
    for schedule in schedules:
        # Check if it's time to send
        if schedule.time <= current_time:
            template = schedule.template
            
            # Send to each receiver
            for receiver in schedule.receivers:
                try:
                    # Send email
                    send_mail(
                        subject=template.subject,
                        message=template.body,
                        from_email=settings.EMAIL_HOST_USER,
                        recipient_list=[receiver],
                        fail_silently=False,
                    )
                    
                    # Record in history
                    EmailHistory.objects.create(
                        subject=template.subject,
                        body=template.body,
                        receiver=receiver,
                        status='SENT'
                    )
                except Exception as e:
                    print(f"Failed to send email to {receiver}: {str(e)}")
                    EmailHistory.objects.create(
                        subject=template.subject,
                        body=template.body,
                        receiver=receiver,
                        status='FAILED',
                        error_message=str(e)
                    )