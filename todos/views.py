from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET', 'POST'])
def todo_list_create(request):
    if request.method == 'GET':
        todos = Todo.objects.all().order_by('-timeCreated')
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH', 'DELETE'])
def todo_update_delete(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    if request.method == 'PATCH':
        # Toggle isComplete and set timeCompleted
        is_complete = request.data.get('isComplete', not todo.isComplete)
        todo.isComplete = is_complete
        if is_complete:
            from django.utils import timezone
            todo.timeCompleted = timezone.now()
        else:
            todo.timeCompleted = None
        todo.save()
        serializer = TodoSerializer(todo)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
