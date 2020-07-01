from django.shortcuts import render
from .process import Minecraft_Process
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser
import atexit
# Create your views here.
Minecraft_Server = Minecraft_Process()

atexit.register(Minecraft_Server.kill)


@api_view(['POST'])
@parser_classes([JSONParser])
def write(request, format=None):

    return Minecraft_Server.write(
        command=request.data,
        response=Response
    )
