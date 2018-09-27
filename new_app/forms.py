from django import forms
from .models import Profile

class registration(forms.ModelForm):
    class Meta():
        model = Profile
        fields = ('name',
                  'email',
                  'subject',
                  'message',)
