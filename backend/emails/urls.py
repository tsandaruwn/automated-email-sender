from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmailTemplateViewSet, EmailScheduleViewSet, EmailHistoryViewSet

router = DefaultRouter()
router.register('templates', EmailTemplateViewSet)
router.register('schedules', EmailScheduleViewSet)
router.register('history', EmailHistoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
