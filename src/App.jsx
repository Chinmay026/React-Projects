import { useEffect, useState } from 'react'
import './App.css'
import News from './News'

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

  useEffect(()=>{

    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-01-02&apiKey=c1bb013493b247df8f60861109cdbefc`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[category]) 



 return (
  <div className='App'>
    <header className='header'>

      <h1>Chaos Breaker</h1>
      <input type="text" onChange={(event)=>{
        if(event.target.value!==""){
          setCategory(event.target.value);
        }
        else{
          setCategory("india")
        }
      }} placeholder='search news' />

    </header>

    <section className='news-articles'>
      {
        articles.length!==0?
        articles.map((article) => {
          return (
            <News article = {article}/>
          )
        })
        :
        <h3>No News Found For searched Text</h3>
      }

    </section>

  </div>
 )
  
}

export default App


