import React from 'react';
import { Typography, } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Link} from 'react-router-dom'
import millify from 'millify';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News'
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useAsync } from 'react-async'

const {Title} = Typography

const Homepage = () => {
    const startQuery = useGetCryptosQuery(10) 
    const globalStatsTotal = startQuery.data?.data?.stats?.total
    const global24hVolume = startQuery.data?.data?.stats?.total24hVolume
    const globalTotalMarkets = startQuery.data?.data?.stats?.totalMarkets
    const totalMarketsCap = startQuery.data?.data?.stats?.totalMarketCap
    const totalExchanges = startQuery.data?.data?.stats?.totalExchanges

   
    function getMilli(data){
        const [stat, setStat] = useState(false);
        useEffect(() => {
            const onPageLoad = () => {
            setStat(true);
            };

   
        if (data !== undefined) {
            onPageLoad();
            } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);
    return data != undefined ? data : 0 
    }
  return <div>

      <Title level={2} className="heading"></Title>
      <div class="container horizontal border-0">
      <div class="list-group list-group-horizontal list-group-flush" >
          <div class="list-group-item"><strong>Crypto Currencies</strong><p/>{millify(getMilli(globalStatsTotal))}</div>
          <div class="list-group-item"><strong>24Hr Vol (USD)</strong><p/> {millify(getMilli(global24hVolume))}</div>
          <div class="list-group-item"><strong>Total Market Cap (USD) </strong> <p/>{millify( getMilli(totalMarketsCap))} </div>
          <div class="list-group-item"><strong>Total Exchanges</strong> <p/>{millify(getMilli(totalExchanges))}</div>
          <div class="list-group-item"><strong>Total Markets</strong> <p/> {millify(getMilli(globalTotalMarkets))}</div>
      </div>
      </div>
    <div class="jumbotron"><h1 class="display-4">A Crpto Blog:</h1> <p class="lead">The crypto market or any market needs to serve a purpose to benefit us indiviually.</p><p class='lead'> </p> <p>Let's analyzie the noise to find a signal we can trust. </p><button type="button" class="btn btn-outline-primary"> latest blog </button></div>
      
      <News/>

      <div className= "home-heading-container">
          <Title level ={2} className = "home-title">Crypto Currencies</Title>
          <Title level ={3} className = "show-more"><Link to="/cryptocurrencies"> Show more</Link></Title>
      </div>
      <Cryptocurrencies/>
      
      
  </div>;
};

export default Homepage;
