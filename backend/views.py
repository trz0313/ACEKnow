from django.views.generic import View
from django.conf import settings
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter, OrderingFilter

from rest_framework import status
from rest_framework.decorators import api_view
from backend.models import PassagePost
from backend.serializers import PassagePostSerializer

import os


class GetDebugInfoAPIView(APIView):
    def get(self, request):
        return Response(
            data={
                "debug": settings.DEBUG
            },
            status=status.HTTP_200_OK
        )


# Create your views here.
class FrontendAppView(View):
    def get(self, request):
        print(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            print('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )


@api_view(['GET', ])
def passage_detail_view(request, slug):
    try:
        passage_post = PassagePost.objects.get(slug=slug)
    except PassagePost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = PassagePostSerializer(passage_post)
        return Response(serializer.data)


@api_view(['PATCH', ])
def passage_update_view(request, slug):
    try:
        passage_post = PassagePost.objects.get(slug=slug)
    except PassagePost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "PATCH":
        serializer = PassagePostSerializer(passage_post, data=request.data)
        data = {}
        if serializer.is_valid():
            serializer.save()
            data["success"] = "update is successful"
            return Response(data=data)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


@api_view(['DELETE', ])
def passage_delete_view(request, slug):
    try:
        passage_post = PassagePost.objects.get(slug=slug)
    except PassagePost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "DELETE":
        operation = passage_post.delete()
        data = {}
        if operation:
            data["success"] = "delete is successful"
        else:
            data["failure"] = "delete failed"
        return Response(data=data)


@api_view(['POST', ])
def passage_create_view(request):

    passage_post = PassagePost

    if request.method == "POST":
        serializer = PassagePostSerializer(passage_post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PassageListView(ListAPIView):
    queryset = PassagePost.objects.all()
    serializer_class = PassagePostSerializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('title', 'category', 'keyword', 'body')
