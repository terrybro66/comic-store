from rest_framework import serializers
from .models import Comic
from django.contrib.auth.models import User


class ComicSerializer(serializers.ModelSerializer):
    class Meta:

        model = Comic
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user
