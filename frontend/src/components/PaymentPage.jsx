import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import { API_URL } from '../config/index';

import './PaymentPage.css';

const PaymentPage = () => {
    // Get the current location using react-router's useLocation hook
    const location = useLocation();

    useEffect(() => {
        // Parse query parameters from the URL
        const values = QueryString.parse(location.search);

        // Check if the payment was successful
        if (values.success) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        // Check if the payment was canceled
        if (values.canceled) {
            console.log("Order canceled -- continue to shop around and checkout when you're ready.");
        }
    }, []); // The empty dependency array ensures this effect runs once on component mount

    return (
        // Render the PaymentPage component's content
        <section>
            <div className='product'>
                <img
                    src='https://imgur.com/EJOjIMC.png'
                    alt='The cover of Stripe demo'
                />
                <div className='description'>
                    <h5>$20.00</h5>
                    <h3>Make Payment</h3>
                </div>
            </div>
            <form
                action={`${API_URL}/stripe/create-checkout-session`}
                method='POST'
            >
                <button className='button' type='submit'>
                    Checkout
                </button>
            </form>
        </section>
    );
};

export default PaymentPage;
