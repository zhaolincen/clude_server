from django.http import HttpResponse
from django.shortcuts import render

from createproduct.models import Product
from register.models import User_Info
from register.views import get_random


def createproduct(request):
    if request.method == 'POST':
        user = request.POST.get('username')
        context = {'show_user':user}
        return render(request,'create_product.html',context)



def createdata(request):
    if request.method == 'POST':
        user = request.POST.get('user')
        p_name = request.POST.get('pname')
        p_type = request.POST.get('type')
        p_node = request.POST.get('note')
        p_link = request.POST.get('linkvalue')
        p_dataf = request.POST.get('dataformat')
        p_authentication = request.POST.get('authentication')
        p_describe = request.POST.get('describe')
        new_p = Product()
        new_p.P_Name = p_name
        new_p.P_Type = p_type
        new_p.P_NodeType = p_node
        new_p.P_Link = p_link
        new_p.P_DataFormat = p_dataf
        new_p.P_Authentication = p_authentication
        new_p.P_Describe = p_describe

        new_p.P_Status = '未激活'
        new_p.P_ProductKey = get_random(11)
        new_p.P_ProducSecret = get_random(16)
        ret = User_Info.objects.get(User=user)
        new_p.P_User = ret
        if new_p.save():
            return HttpResponse('创建产品失败，请联系管理员')
        return  HttpResponse('创建成功，请返回刷新')
# Create your views here.
