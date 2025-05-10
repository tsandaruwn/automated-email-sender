from rest_framework import serializers
from .models import EmailTemplate, EmailSchedule, EmailHistory

class EmailTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailTemplate
        fields = '__all__'

class EmailScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSchedule
        fields = '__all__'

class EmailHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailHistory
        fields = '__all__'
