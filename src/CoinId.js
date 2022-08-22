import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import './App.css';

const CoinId = () => {

  const location = useParams()
  const id = location.id

    const [data, setData] = useState([])
  const [coinName, setCoinName] = useState("")
  const [coinDescription, setCoinDescription] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")
  


  const getCoinInfo = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await response.json()
    if (!data) return null
    console.log(data)
    setData(data)
    setCoinName(data.name)
    setCoinDescription(data.description.en)
    setLink(data.links.homepage)
    setImage(data.image.large)
  }

  useEffect(() => {
    getCoinInfo()
  }, [])



  return (

    
    <div>
      <h1>{coinName}</h1>
      <img src={image} />
      <p>{coinDescription}</p>
      <a href={link}>{link}</a>
    </div>
  );
}

export default CoinId;