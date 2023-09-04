from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect

import stripe

# Set the Stripe API key
stripe.api_key = settings.STRIPE_SECRET_KEY

class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price': 'price_1NmOFILn9sSXUv34NYg704ze',
                        'quantity': 1,
                    },
                ],
                payment_method_types=['card',],
                mode='payment',
                success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/?canceled=true',
            )

            # Redirect to the Stripe checkout page
            return redirect(checkout_session.url)
        except:
            # Handle exceptions
            return Response(
                {'error': 'Something went wrong when creating a Stripe checkout session'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
