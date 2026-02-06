from django import forms
from .models import BlogModel

class BlogForm(forms.ModelForm):
    class Meta:
        model = BlogModel
        fields = ['title', 'content'] # These are the fields from your model