from rest_framework import viewsets, filters, status
from django_filters.rest_framework import DjangoFilterBackend
from .models import EmailTemplate, EmailSchedule, EmailHistory
from .serializers import EmailTemplateSerializer, EmailScheduleSerializer, EmailHistorySerializer
from django.core.mail import send_mail
from rest_framework.decorators import action, api_view
from rest_framework.response import Response

class EmailTemplateViewSet(viewsets.ModelViewSet):
    queryset = EmailTemplate.objects.all()
    serializer_class = EmailTemplateSerializer

    def create(self, request, *args, **kwargs):
        print("Received data:", request.data)  # Debug print
        try:
            serializer = self.get_serializer(data=request.data)
            if not serializer.is_valid():
                print("Validation errors:", serializer.errors)  # Debug print
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print("Error:", str(e))  # Debug print
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class EmailScheduleViewSet(viewsets.ModelViewSet):
    queryset = EmailSchedule.objects.all()
    serializer_class = EmailScheduleSerializer

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(
                {'detail': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )

class EmailHistoryViewSet(viewsets.ModelViewSet):
    queryset = EmailHistory.objects.all().order_by('-sent_at')
    serializer_class = EmailHistorySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['status', 'receiver']
    ordering_fields = ['sent_at', 'subject']

    @action(detail=False, methods=['post'])
    def send_email(self, request):
        subject = request.data.get('subject')
        message = request.data.get('body')
        to_email = request.data.get('to')
        send_mail(subject, message, 'btsandaruwan@gmail.com', [to_email])
        EmailHistory.objects.create(subject=subject, body=message)
        return Response({'status': 'Email sent'})
    
    @api_view(['POST'])
    def create_schedule(request):
        print('Received data:', request.data)  # DEBUG
        serializer = EmailScheduleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        print('Errors:', serializer.errors)  # DEBUG
        return Response(serializer.errors, status=400)
    
    @action(detail=False, methods=['GET'])
    def get_email_stats(self, request):
        total_emails = EmailHistory.objects.count()
        active_templates = EmailTemplate.objects.count()
        scheduled_tasks = EmailSchedule.objects.count()
        successful_emails = EmailHistory.objects.filter(status='SENT').count()
        success_rate = (successful_emails / total_emails * 100) if total_emails > 0 else 0
            
        data = {
            'totalEmails': total_emails,
            'activeTemplates': active_templates,
            'scheduledTasks': scheduled_tasks,
            'successRate': round(success_rate, 2)
        }
        return Response(data)
        