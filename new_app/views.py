from django.shortcuts import render
from .forms import registration
from .models import Profile
from django.core.mail import send_mail

# Create your views here.

def home(request):
    form = registration()
    if(request.method =='POST'):
        form = registration(request.POST)
        if(form.is_valid()):
            form.save(commit=True)
            my_name = form.cleaned_data.get('name')
            mail_subject = form.cleaned_data.get('subject')
            to_email1 = form.cleaned_data.get('email')
            my_message = form.cleaned_data.get('message')
            my_email = 'piyushmishra1999@rediffmail.com'
            mail_message = str(my_name)+" is trying to contact you on the subject of : "+str(mail_subject)+"\r"+" their message is : "+"\r"+str(my_message)+"\r"+" You can contact them on : "+"\r"+str(to_email1)
            send_mail(mail_subject,
            mail_message,
            'piyush9873046191@gmail.com',
            [my_email],
            fail_silently=False,)
            return render(request,'index.html')

        else:
            return render(request,'fail.html')

    return render(request,'index.html')
