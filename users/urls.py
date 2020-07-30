from django.urls import path
from .views import CreateUserAPIView

urlpatterns = [
    path('user/', CreateUserAPIView.as_view()),
]
