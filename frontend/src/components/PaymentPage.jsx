import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import { API_URL } from '../config/index';

import './PaymentPage.css';

const PaymentPage = () => {
    console.log("cjdbkcdkj");
	const location = useLocation();

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		// const query = new URLSearchParams(window.location.search);
		const values = QueryString.parse(location.search);

		if (values.success) {
			console.log(
				'Order placed! You will receive an email confirmation.'
			);
		}

		if (values.canceled) {
			console.log(
				"Order canceled -- continue to shop around and checkout when you're ready."
			);
		}
	}, []);

	return (
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
