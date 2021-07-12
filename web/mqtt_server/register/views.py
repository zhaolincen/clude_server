import hmac
import random
import string
from _sha1 import sha1

from django.http import HttpResponse
from django.shortcuts import render
from register.models import User_Info

def hash_hmac(pwd,key):
    hamc_code = hmac.new(key.encode(),pwd.encode(),sha1)
    return hamc_code.hexdigest()

def get_random(n=32):
    all_chs = string.digits + string.ascii_letters
    result = ''
    for i in range(n):
        ch = random.choice(all_chs)
        result += ch
    return result


checknu = get_random(4)

def register(request):
    if request.method == 'GET':
        global checknu
        checknu = get_random(4)
        context = {'check' : checknu}
        return render(request,'register.html',context)
    if request.method == 'POST':
        user = request.POST.get('user')
        password = request.POST.get('password')
        password2 = request.POST.get('checkpassword')
        tel = request.POST.get('tel')
        company = request.POST.get('company')
        other = request.POST.get('other')
        checktemp = request.POST.get('check')
        if checktemp != checknu:
            return HttpResponse('验证码验证失败')
        ret = User_Info.objects.filter(User=user).count()
        if ret != 0:
            return HttpResponse('该用户名已经存在')
        if password != password2:
            return HttpResponse('两次密码输入不正确')
        key = get_random()
        pwd = hash_hmac(password,key)
        new_user = User_Info()
        new_user.User = user
        new_user.ChecKey = key
        new_user.Password = pwd
        new_user.Tel = tel
        new_user.Compant = company
        new_user.Other = other
        new_user.LoginIP = request.META['REMOTE_ADDR']
        new_user.RegisterIP = request.META['REMOTE_ADDR']
        if new_user.save():
            return HttpResponse('注册失败，请联系管理员')
        return HttpResponse('注册成功')



# Create your views here.
