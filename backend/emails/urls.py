from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import EmailTemplateViewSet, EmailScheduleViewSet, EmailHistoryViewSet

router = DefaultRouter()
router.register(r'templates', EmailTemplateViewSet)
router.register(r'schedules', EmailScheduleViewSet)
router.register(r'history', EmailHistoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
    