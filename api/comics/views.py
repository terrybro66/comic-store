from django.shortcuts import render
from rest_framework import viewsets
from .models import Comic
from django.contrib.auth import get_user_model
from .serializers import ComicSerializer, UserSerializer, LogInSerializer
from rest_framework import filters, generics
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, AllowAny


class ComicView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Comic.objects.all()
    serializer_class = ComicSerializer


class SignUpView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class LogInView(TokenObtainPairView):
    serializer_class = LogInSerializer
