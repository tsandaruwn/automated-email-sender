from rest_framework import viewsets
from .models import EmailTemplate, EmailSchedule, EmailHistory
from .serializers import EmailTemplateSerializer, EmailScheduleSerializer, EmailHistorySerializer
from django.core.mail import send_mail
from rest_framework.decorators import action
from rest_framework.response import Response

class EmailTemplateViewSet(viewsets.ModelViewSet):
    queryset = EmailTemplate.objects.all()
    serializer_class = EmailTemplateSerializer

class EmailScheduleViewSet(viewsets.ModelViewSet):
    queryset = EmailSchedule.objects.all()
    serializer_class = EmailScheduleSerializer

class EmailHistoryViewSet(viewsets.ModelViewSet):
    queryset = EmailHistory.objects.all()
    serializer_class = EmailHistorySerializer

    @action(detail=False, methods=['post'])
    def send_email(self, request):
        subject = request.data.get('subject')
        message = request.data.get('body')
        to_email = request.data.get('to')
        send_mail(subject, message, 'btsandaruwan@gmail.com', [to_email])
        EmailHistory.objects.create(subject=subject, body=message)
        return Response({'status': 'Email sent'})