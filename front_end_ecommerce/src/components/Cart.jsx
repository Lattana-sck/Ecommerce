import React from 'react';
import styled from 'styled-components';
import PaypalButton from './PaypalButton';

const CartStyle = styled.div`

`;

export default function Cart() {

    var all_items = JSON.parse(localStorage.getItem('Products'));

    console.log(all_items)

    if(!all_items) {
        return (
            <div className="no_items">Vous n'avez pas d'items dans votree panier</div>
        )
    }

    return (
        <CartStyle>
            {
                all_items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
            <PaypalButton
                total="100"
                clearcart="0"
            />
        </CartStyle>
    )
}
