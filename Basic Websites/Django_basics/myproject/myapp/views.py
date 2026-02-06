from django.shortcuts import render
from myapp.models import Item
# Create your views here.
def home(request): 
    return render(request, 'myapp/home.html')

def contacts(request): 
    data = Item.objects.all()
    context = {'data':data}
    return render(request, 'myapp/contacts.html')