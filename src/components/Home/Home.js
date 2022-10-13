import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const carts = useLoaderData().data;
    // console.log(carts);
    return (

        <div>
            <Banner></Banner>
            <div className='cart-container container'>
                {
                    carts.map(cart => <Topics
                        kye={cart.id}
                        cart={cart}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;