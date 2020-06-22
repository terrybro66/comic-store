from django.shortcuts import render
from rest_framework import viewsets
from .models import Comic
from .serializers import ComicSerializer
from rest_framework import filters

class ComicView(viewsets.ModelViewSet):
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Comic.objects.all()
    serializer_class = ComicSerializer

