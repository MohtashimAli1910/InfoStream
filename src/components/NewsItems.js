import React, { Component } from 'react'
export class NewsItems extends Component {
  render() {
    let {title, description, img_url, newsUrl,author,date}=this.props
    return (
      <div> 
        <div className="card my-3 mx-3">
            {<img src={/*!img_url?"https://source.unsplash.com/1400x1500/?sports,entertainment,science":*/img_url} className="card-img-top" alt="..."/>}
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {date}</small></p>
  </div>
</div>
</div>
    )
  }
}

export default NewsItems
