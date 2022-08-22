import React from "react";
import CoinId from './CoinId';




const Coin = ({key, name, rank, price, image, }) => {
    return (
        <div className="coin">
            <h3>{name}</h3>
            <p>{`Rank position: ${rank}`}</p>
            <p>{`The price in BTC is: ${price}`}</p>
            <img src={image} alt="" />                
        </div>      
    )
}

export default Coin;