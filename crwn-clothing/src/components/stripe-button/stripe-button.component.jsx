import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey ='pk_test_YZA56edVTnBZqaNVt4tvF8fa00DIQCG20w';

    const onToken=token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label='pay Now'
        name='ROHI Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />


    );

};

export default StripeCheckoutButton;
