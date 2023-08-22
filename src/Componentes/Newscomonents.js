import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import Spinnr from './Spinnr';
import InfiniteScroll from "react-infinite-scroll-component";


const Newscomonents = (props) => {

  const [articles, setArticles] = useState([])
  const [loding, setLoding] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotleResults] = useState(0)



  const capitalaiz = (elem) => {
    return elem.charAt(0).toUpperCase() + elem.slice(1)
  }

  const sitetitle = () => {
    document.title = `${capitalaiz(props.category)} - NewsWave`
  }
  sitetitle()

  const updateState = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9177f41767454c9688ab73b18c13b1b8&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    setLoding(true)
    const getdt = await fetch(url)
    const data = await getdt.json()
    setArticles(data.articles)
    setLoding(false)
    setTotleResults(data.totalResults)
  }

  useEffect(
    () => {
      updateState();
    }, [])



  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9177f41767454c9688ab73b18c13b1b8&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    setLoding(true)
    const getdt = await fetch(url)
    const data = await getdt.json()
    setArticles(articles.concat(data.articles))
    setTotleResults(data.totalResults)
  };

  return (
    <div className='container my-5' >
      <h1 className='d-flex justify-content-center' style={{marginTop:'90px'}}> NewsWave - Top {capitalaiz(props.category)} Hadelins  </h1>
      {/* {loding && <Spinnr />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loding && <Spinnr />}
      >
        <div className='container row my-3' style={{ overflow: 'hidden' }}>
          {articles.map((elem) => {
            return <div className='col col col' key={elem.url}>
              <Newsitems title={!elem.title ? " " : elem.title.slice(0, 45)} description={!elem.description ? " " : elem.description.slice(0, 100)} Imageurl={elem.urlToImage} url={elem.url} publishedAt={elem.publishedAt} author={elem.author} source={elem.source.name} />
            </div>
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Newscomonents