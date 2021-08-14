from django.db import models
from rest_framework import settings


# Create your models here.


class PassagePost(models.Model):
    title = models.CharField(default='', null=False)
    category = models.CharField(default='', null=False)
    keyword = models.CharField(default='', null=False)
    body = models.TextField(default='', null=False)
    image = models.ImageField
    date_published = models.DateTimeField(auto_now_add=True, verbose_name="date published")
    date_updated = models.DateTimeField(auto_now=True, verbose_name="date updated")
    slug = models.SlugField(blank=True, unique=True)

    class Meta:
        db_table = "Posts"
        ordering = ['date_updated']
