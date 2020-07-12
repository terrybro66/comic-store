from django.shortcuts import render
from rest_framework import viewsets
from .models import Comic
from django.contrib.auth.models import User
from .serializers import ComicSerializer, UserSerializer
from rest_framework import filters, generics
from rest_framework.permissions import IsAuthenticated, AllowAny


class ComicView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Comic.objects.all()
    serializer_class = ComicSerializer


class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )
