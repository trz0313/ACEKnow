from django.urls import path
from django.conf import settings
from .views import GetDebugInfoAPIView
from backend.views import (
    passage_detail_view,
    passage_update_view,
    passage_delete_view,
    passage_create_view,
    PassageListView,
)

# url patterns
urlpatterns = [
    path('getDebugInfo/', GetDebugInfoAPIView.as_view(), name='get_debug_info'),
    path('<slug>/', passage_detail_view, name='detail'),
    path('<slug>/update', passage_update_view, name='update'),
    path('<slug>/delete', passage_delete_view, name='delete'),
    path('create', passage_create_view, name="create"),
    path('list', PassageListView.as_view(), name="list"),
