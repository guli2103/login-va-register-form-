from django.urls import path
from django.contrib.auth import views
from .views import *

urlpatterns = [
    path('', views.LoginView.as_view(template_name='login.html'), name='login'),
    path('register/', register, name='register'),
]
