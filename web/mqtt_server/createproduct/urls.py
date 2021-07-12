from django.urls import path

from createproduct import views

urlpatterns = [
    path('',views.createproduct),
    path('/createdata',views.createdata),
]