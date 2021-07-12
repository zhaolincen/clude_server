from django.http import HttpResponse
from django.shortcuts import render
from register.models import User_Info
from register.views import hash_hmac


def login(request):
    if request.method == 'GET':
        return render(request,'login.html')
    if request.method == 'POST':
        user = request.POST.get('user')
        pwd = request.POST.get('password')
        ret = User_Info.objects.filter(User=user).count()
        if ret == 0:
            return HttpResponse('用户名不存在')
        ret = User_Info.objects.get(User=user)
        pwd = hash_hmac(pwd,ret.ChecKey)
        if pwd != ret.Password:
            return HttpResponse('密码输入错误')
        context = {'show_user':user}
        return render(request,'index_in.html',context)

# Create your views here.
