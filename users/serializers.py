from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    date_joined = serializers.ReadOnlyField()

    class Meta(object):
        model = User
        fields = (
            'id',
            'email',
            'mojang_email',
            'username',
            'date_joined',
            'password',
            'mojang_uuid',
            'is_staff',
        )
        extra_kwargs = {'password': {'write_only': True}}
