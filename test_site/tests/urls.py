from django.urls import path
from .views import register, user_login

urlpatterns = [
    path('api/register', register),
    path('api/login', user_login),
]
