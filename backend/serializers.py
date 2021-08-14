from rest_framework import serializers

from backend.models import PassagePost


class PassagePostSerializer(serializers.ModelSerializer):

    class Meta:
        model = PassagePost
        fields = ['title', 'category', 'keyword', 'body', 'image', 'date_updated']

