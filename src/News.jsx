import React from 'react'

function News(props) {
  return (
    
 <>

    <div className='news'>

     <div className='news-img'>
      {
        props.article.urlToImage!==null?
      <img src={props.article.urlToImage}></img>:
      <img src='https://www.legrand.com/ecatalogue/modules/custom/legrand_ecat/assets/img/no-image.png'/>
    }
      </div>
    

      <h1>{props.article.title}</h1>

      <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target='_blank'>Read more.</a></p>
    
    

    <div className='source'>

      <p>{props.article.source.name}</p>
    
    
</div>

    </div>

</>
    
  )
}

export default News