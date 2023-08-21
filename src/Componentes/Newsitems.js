import React from 'react'

const Newsitems = (props) => {
    let { title, description, Imageurl, url, publishedAt, author, source } = props;

    return (
        <div className='container my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{
                    zIndex: "2"
                }}>
                    {source}
                </span>
                <img src={!Imageurl ? "https://techcrunch.com/wp-content/uploads/2023/08/telegram-stories.jpg?resize=1200,737" : Imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-mited'>By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={url} className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div >
    )
}
export default Newsitems 