from django.core.management.base import BaseCommand
from emails.utils import send_scheduled_emails

class Command(BaseCommand):
    help = 'Send scheduled emails'

    def handle(self, *args, **options):
        send_scheduled_emails()
        self.stdout.write(self.style.SUCCESS('Successfully processed scheduled emails'))