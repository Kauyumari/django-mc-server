from django.shortcuts import render
from rest_framework.views import APIView, Response, status
from rest_framework.permissions import AllowAny
from requests import get
from .serializers import UserSerializer
from .models import User

# Create your views here.

PROFILES_URL = "https://api.mojang.com/users/profiles/minecraft/{username}"


class CreateUserAPIView(APIView):
    # Allow any user (authenticated or not) to access this url
    permission_classes = (AllowAny,)

    def get(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = request.data
        username = user['username']
        user_response = get(PROFILES_URL.format(username=username))
        try:
            user['mojang_uuid'] = user_response.json()['id']

            serializer = UserSerializer(data=user)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(user, status=status.HTTP_201_CREATED)
        except:
            return Response('Minecraft user does not exist')
