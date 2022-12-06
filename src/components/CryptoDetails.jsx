import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Select } from 'antd';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import millify from 'millify'


const {Title, Text} = Typography
const { Option } = Select;

const CryptoDetails = () => {
  function getMilli(data){
    const [stat, setStat] = useState(false);
    React.useEffect(() => {
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
  const { coinId } = useParams(''); 
  const [timePeriod,setTimePeriod] = useState('7d')
  const cDetails = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = useGetCryptoDetailsQuery(coinId)?.data?.data?.coin
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD:', value: `$ ${millify(getMilli(cryptoDetails?.price))}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume:', value: `$ ${cryptoDetails?.volume && cryptoDetails?.volume}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap:', value: `$ ${millify(getMilli(cryptoDetails?.marketCap)) && millify(getMilli(cryptoDetails?.marketCap))}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.):', value: `$ ${millify(getMilli(cryptoDetails?.allTimeHigh?.price))}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets:', value: cryptoDetails?.numberOfMarkets , icon: <FundOutlined /> },
    { title: 'Number Of Exchanges:', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(getMilli(cryptoDetails?.supply?.total))}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${ millify(getMilli(cryptoDetails?.supply?.circulating))}`, icon: <ExclamationCircleOutlined /> },
  ];
  
  console.log('cryptodetails',cryptoDetails)

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level ={2} className="coin-name">
            {cDetails?.data?.data?.coin?.name}
        </Title>
        <p>
          {cDetails?.data?.data?.coin?.name} live price view statistic market cap and supply
          <p/>
          {cDetails?.data?.data?.coin?.symbol}
        </p>
      </Col>
      <Col className = "stats-container">
          <Col className = "coin-value-statistics">
              <Col className ="coin-value-statistics-heading">
                  <Title level={3} className ="coin-details">
                  {cDetails?.data?.data?.coin?.name} Value Statistics

                  </Title>
                  <p>
                      Statistics of {cDetails?.data?.data?.coin?.symbol}
                  </p>
              </Col>
              {stats.map(({icon,title,value}) => (
                  <Col className="coin-stats">
                      <Col className='coin-stats-name'>
                        <Text>{icon}</Text>
                        <Text>{title}</Text>
                        <Text>{value}</Text>
                      </Col>
                  </Col>
              ))}
          </Col>
      </Col>
       <Col className = "other-stats-container">
          <Col className = "other-coin-value-statistics">
              <Col className ="other-coin-value-statistics-heading">
                  <Title level={3} className ="other-coin-details">
                    
                   Other Statistics

                  </Title>
                  <p>
                      Statistics of {cDetails?.data?.data?.coin?.symbol}
                  </p>
              </Col>
              {genericStats.map(({icon,title,value}) => (
                  <Col className="coin-stats">
                      <Col className='coin-stats-name'>
                        <Text>{icon}</Text>
                        <Text>{title}</Text>
                        <Text>{value}</Text>
                      </Col>
                  </Col>
              ))}
          </Col>
      </Col>
    </Col>
  )
};

export default CryptoDetails;
