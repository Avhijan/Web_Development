from django.db import migrations, models

class BlogModel(models.Model):
    # This creates a 'Title' column that can hold up to 100 characters
    title = models.CharField(max_length=100)
    
    # This creates a 'Content' column for the long text of the blog post
    content = models.TextField()
    
    # This tracks when the post was created automatically
    created_at = models.DateTimeField(auto_now_add=True)

    # This makes it so the Django Admin shows the Title instead of "BlogModel object (1)"
    def __str__(self):
        return self.title