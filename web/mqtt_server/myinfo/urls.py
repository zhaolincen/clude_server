from django.urls import path, re_path

from myinfo import views

urlpatterns = [
    path('',views.myinfo),
    path('/createdevice',views.createdevice),
    path('/creatediviceinfo',views.creatediviceinfo),
    re_path('/mydevice/(\d+)',views.show_dev),
    re_path('(\d+)',views.show),
]