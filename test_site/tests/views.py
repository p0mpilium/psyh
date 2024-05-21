from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework import viewsets
from .models import Test, Question, Answer
from .serializers import TestSerializer, QuestionSerializer, AnswerSerializer

@csrf_exempt
@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if username and password:
        user = User.objects.create_user(username=username, password=password)
        return Response({'status': 'User created'}, status=201)
    return Response({'error': 'Invalid data'}, status=400)

@csrf_exempt
@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({'status': 'Login successful'}, status=200)
    return Response({'error': 'Invalid credentials'}, status=400)

class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer