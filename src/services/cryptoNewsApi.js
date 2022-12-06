import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '8adddc4348mshcfdd341dae2fa0bp1db351jsnfcf2b9608645',
};
const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://bing-news-search1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({newsCatagory, count}) => createRequest(`/news/search?q=${newsCatagory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })
})

export const { useGetCryptosNewsQuery } = cryptoNewsApi;