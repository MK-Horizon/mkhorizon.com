import React, {useState} from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment'
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';


const {Text, Title} = Typography;
const {Option} = Select;

const News = ({simplified}) => {
  
  const [newsCatagory, setNewsCatagory ] = useState('Cryptocurrency')
  const cryptoCurrencyNews = useGetCryptosNewsQuery({newsCatagory, count: 100})
  console.log(cryptoCurrencyNews.currentData)
  const getCryptoNames = useGetCryptosQuery(50)
  

  return <div>
    <Row gutter={[24,24]}>
      
      {cryptoCurrencyNews?.currentData?.value?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>

          <Card hoverable className='news-card'>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}> {news.name}</Title>
                <img style={{maxWidth: '100px', maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl } alt="news"/>
              </div>
              <p>
                {news.description > 100
                ? '${news.description.substring(0,100)}...'
                : news.description
                }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl }/>
                  <Text>{moment(news?.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  </div>;
};

export default News;
