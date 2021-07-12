from django.http import HttpResponse
from django.shortcuts import render

from createproduct.models import Product
from device.models import Device
from register.models import User_Info
from topic.models import Topic


def myinfo(request):
    if request.method == 'POST':
        user = request.POST.get('username')
        context = {'show_user':user}
        ret = User_Info.objects.get(User=user)
        rest = Product.objects.filter(P_User=ret.id).count()
        if rest == 0:
            return render(request,'myinfo.html',context)
        rest = Product.objects.filter(P_User=ret.id)
        context['list'] = rest
        return render(request, 'myinfo.html', context)
# Create your views here.
def show(request,id):
    if request.method == 'GET':
        ret = Product.objects.get(id=id)
        user = User_Info.objects.get(id=ret.P_User_id)
        context = {'show_user':user.User}
        context['productname'] = ret.P_Name
        context['notetype'] = ret.P_NodeType
        context['type'] = ret.P_Type
        context['link'] = ret.P_Link
        context['dataformat'] = ret.P_DataFormat
        context['authentication'] = ret.P_Authentication
        context['data'] = ret.P_CreateData
        context['status'] = ret.P_Status
        context['productkey'] = ret.P_ProductKey
        context['productsecret'] = ret.P_ProducSecret
        rest = Device.objects.filter(D_Poduct_id=ret.id)
        context['list_dev'] = rest

        return render(request,'mydevice.html',context)

def createdevice(request):
    user = request.POST.get('username')
    context = {'show_user':user}
    return render(request,'create_device.html',context)


def creatediviceinfo(request):
    devicename = request.POST.get('devicename')
    describe = request.POST.get('describe')
    productkey = request.POST.get('productkey')
    ret = Product.objects.filter(P_ProductKey=productkey).count()
    if ret == 0:
        return HttpResponse('设备密钥不正确')
    ret = Product.objects.get(P_ProductKey=productkey)
    new_dev = Device()
    new_dev.D_Name = devicename
    new_dev.D_Drscribe = describe
    new_dev.D_Stats = '未激活'
    new_dev.D_Poduct_id = ret.id
    new_dev.D_User_id = ret.P_User_id
    if new_dev.save():
        return HttpResponse('创建设备失败，请联系管理员')

    new_topic = Topic()
    new_topic.T_Name = '固件版本'
    new_topic.T_Dir = '/ota/device/interface/' + productkey + '/'+ devicename + '/'
    new_topic.T_Permission = '订阅'
    new_topic.T_Device_id = new_dev.id
    new_topic.T_Product_id = ret.id
    new_topic.T_User_id = ret.P_User_id
    if new_topic.save():
        return("创建默认Topic失败")

    return HttpResponse('创建设备成功，请返回刷新')

def show_dev(request,id):
    if request.method == 'GET':
        ret = Device.objects.get(id=id)
        context = {'d_name':ret.D_Name}
        context['d_stats'] = ret.D_Stats
        rest = Topic.objects.filter(T_Device_id=id)
        context['list_topic'] = rest
        user = User_Info.objects.get(id=ret.D_User_id)
        context['show_user'] = user.User
        p_name = Product.objects.get(id=ret.D_Poduct_id)
        context['productname'] = p_name.P_Name
        return render(request,'device_info.html',context)
    if request.method == 'POST':
        topic_name = request.POST.get('topic_name')
        t_dataname = request.POST.get('t_dataname')
        pe = request.POST.get('pe')
        username = request.POST.get('username')
        product = request.POST.get('product')
        new_topic = Topic()
        user = User_Info.objects.get(User=username)
        new_topic.T_User_id = user.id
        pr = Product.objects.get(P_Name=product)
        new_topic.T_Product_id = pr.id
        device = Device.objects.get(id=id)
        new_topic.T_Device_id = device.id
        new_topic.T_Name = topic_name
        new_topic.T_Data = '0'
        new_topic.T_Dir = '/' + pr.P_ProductKey + '/event/' + t_dataname + '/'
        new_topic.T_Permission = pe
        if new_topic.save():
            return HttpResponse('添加失败')
        return HttpResponse('添加成功，请返回刷新')