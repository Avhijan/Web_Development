from django.shortcuts import render, redirect, get_object_or_404
from .models import BlogModel
from .forms import BlogForm

def home(request):
    if request.method == 'POST':
        form = BlogForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home') # Refreshes the page after saving
    #readi
    else:
        form = BlogForm()
    
    # getting posts from db
    blogs = BlogModel.objects.all()
    
    context = {
        'blogs': blogs,
        'form': form
    }
    return render(request, 'Blog/home.html', context)

# displays the posts 
def read_one(request, id):
    obj = get_object_or_404(BlogModel, id=id)
    context = {'blog': obj}
    return render(request, 'Blog/read_one.html', context)

# editing the post
def update_one(request, id):
    obj = get_object_or_404(BlogModel, id=id)
    form = BlogForm(request.POST or None, instance=obj)
    
    if form.is_valid():
        form.save()
        return redirect('home')
        
    context = {'form': form}
    return render(request, 'Blog/update_blog.html', context)

def delete_one(request, id):
    obj = get_object_or_404(BlogModel, id=id)
    
    #only delete if the user clicks the "Confirm" button
    if request.method == "POST":
        obj.delete()
        return redirect('home')
        
    context = {'blog': obj}
    return render(request, 'Blog/delete_blog.html', context)