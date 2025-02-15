from django.shortcuts import render
from django.contrib import messages
from .forms import DemoRequestForm

def home(request):
    return render(request, 'home/home.html')

def about(request):
    return render(request, 'home/about.html')

def solutions(request):
    return render(request, 'home/solutions.html')

def pricing(request):
    return render(request, 'home/pricing.html')

def contact(request):
    return render(request, 'home/contact.html')

def request_demo(request):
    if request.method == 'POST':
        form = DemoRequestForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your demo request has been submitted successfully!')
    else:
        form = DemoRequestForm()
    
    return render(request, 'home/request_demo.html', {'form': form})
