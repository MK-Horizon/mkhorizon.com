import React, {useEffect, useState} from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10: 100;
  const cryptoData = useGetCryptosQuery(count)
  const cryptoCurrencyList = useGetCryptosQuery(count).data?.data?.coins;
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const cryptoList = []
  
  useEffect(() => {
        setCryptos(cryptoData.data?.data?.coins)
        const coinCryptoData = cryptoData.data?.data?.coins
        const filterdCryptoCurrencyData =  cryptoData
        const filteredData =filterdCryptoCurrencyData?.data?.data?.coins.filter((crypto) => crypto.name.toLowerCase().includes(searchTerm))
        setCryptos(filteredData)
      
  },[ searchTerm]) 
  

  return (
    <>
      
        <div className="search-crypto">
          <Input
            
            placeholder="Search Asset"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      
      <Row gutter={[30, 30]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >


            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
