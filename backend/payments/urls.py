from django.urls import path
from .views import StripeCheckoutView

urlpatterns = [
    # Create a URL path 'create-checkout-session' that maps to the StripeCheckoutView class
    path('create-checkout-session', StripeCheckoutView.as_view()),
]
