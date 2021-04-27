from django.shortcuts import render,HttpResponse
from .serializers import QuestionSerializer,TeamSerializer
from rest_framework.views import APIView
from rest_framework import serializers, status
from rest_framework.response import Response
from .models import Questions,Team

# Create your views here.
def index(request):
    return HttpResponse("This backend for CTF server has started")


class TeamDetails(APIView):
    def get(self,request):
        obj = Team.objects.all()
        obj = sorted(obj,key=lambda x:x.total_score,reverse=True)
        serializer = TeamSerializer(obj,many=True)
        return Response(serializer.data)

    def put(self,request):
        serializer = TeamSerializer(data = request.data)
        obj = Team.objects.filter(pk = request.data['id'])
        obj.delete()
        if serializer.is_valid():
            serializer.save()
            return Response(obj,status = status.HTTP_201_CREATED)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)


    def post(self,request):
        serializer = TeamSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"updated":"true"},status= status.HTTP_201_CREATED)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)

    # Delete Rquest has not been implemented due to some issues


class QuestionDetails(APIView):
    def get(self,request):
        obj = Questions.objects.all()
        serializer = QuestionSerializer(obj,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = QuestionSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializers.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
    # Delete Request has not been implemented due to some issues
    