from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from emails import views


router = DefaultRouter()
router.register(r'templates', views.EmailTemplateViewSet)
router.register(r'schedules', views.EmailScheduleViewSet)
router.register(r'history', views.EmailHistoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('emails.urls')),
]