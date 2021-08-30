import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ProductCardStyle = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 30%;
    justify-content: space-between;
    .article_card_main {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
        img {

            width: 60%;
            height: 60%auto;
        }
    }
    .article_card_main_premium {
    
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
        filter: blur(4px);
        img {
            width: 100%;
        }
    }
`;

var test = [];
export default function ProductCard(props) {

    let history = useHistory();

    const handleId = (id) => {
        history.push(`/details_product/${id}`)
    }

    const handleProductCart = (id, name, price) => {

        test.push(id, name, price)

        localStorage.setItem('Products', JSON.stringify(test))
        console.log(JSON.parse(localStorage.getItem('Products')))
    }

    return (
        <ProductCardStyle>
            <div className="article_card_main">
                <img src={props.img} alt="" />
                <h3 className="article_card_title">{props.name}</h3>
                <p className="article_card_text">{props.description}</p>
                <p className="product_details">{props.price}</p>
                <button onClick={() => handleId(props.id)}>Fiche produit</button>
                <button onClick={() => handleProductCart(props.id, props.name, props.price)}>Ajouter au panier</button>
            </div>
        </ProductCardStyle>
    )
}