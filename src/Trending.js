import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Coin from "./Coin";
import CoinId from './CoinId';
import './App.css';

function Trending() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchTrending();
  }, [])

  const fetchTrending = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const data = await response.json();
    console.log(data.coins)
    setCoins(data.coins);
  }

  return (
    <div>
      <h1>Trending</h1>
      {coins.map((coin, key) =>
        <Link to={`/trending/${coin.item.id}`} state={coin.item.id}>
          <Coin
            name={coin.item.name}
            rank={coin.item.market_cap_rank}
            price={coin.item.price_btc}
            image={coin.item.large}
          />
        </Link>
      )}
    </div>
  );
}

export default Trending;
