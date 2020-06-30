from django.core.management.base import BaseCommand
import random
from comics.models import Comic
import os, sys
from . import data
import logging
from faker import Faker

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

MODE_REFRESH = 'refresh'

MODE_CLEAR = 'clear'

class Command(BaseCommand):
    help = "seed database for testing and development."

    def add_arguments(self, parser):
        parser.add_argument('--mode', type=str, help="Mode")

    def handle(self, *args, **options):
        self.stdout.write('seeding data...')
        run_seed(self, options['mode'])
        self.stdout.write('done.')

def clear_data():
    logger.info("Delete all comics")
    Comic.objects.all().delete()

def create_comic():
    fake = Faker()

    comic = Comic(
        # the random values are imported from data.py
        name=random.choice(data.names),
        publisher=random.choice(data.publishers),
        description=fake.paragraph(nb_sentences=10, variable_nb_sentences=True),
        cover=random.choice(data.covers),
        price=random.uniform(0, 99)
    )

    comic.save()

def run_seed(self, mode):
    clear_data()
    if mode == MODE_CLEAR:
        return
    for i in range(15):
        create_comic()