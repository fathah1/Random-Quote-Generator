import React, {useState, useEffect} from 'react';
import './App.css';


//RANDOM QUOTE MACHINE PROJECT

function App() {

  const [quote,setQuote] = useState("");
  const [author,setAuthor] = useState("");

   
  
      async function quoteApi  ()  {  
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        const newQuote = data['content'];
        const newAuthor = data['author'];
        setQuote(newQuote)
        setAuthor(newAuthor)
        };



    useEffect(() => {
      quoteApi();
    },[])

  
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="main-header">Random Quote Generator.</h1>
        <h2 class="tag-line">100's of quotes for you to learn from</h2>
      </header>

        <div id="quote-box">
            <h2 id="text">"{quote}"</h2>
            <h3 id="author">{author}</h3> 
            <div class="buttons"> 
              <a id="tweet-quote" class="fa fa-twitter" target="_blank" href="twitter.com/intent/tweet"> </a>
              <button id="new-quote" onClick={quoteApi}>New Quote</button>
            </div>
        </div>
      
    </div>
  );
}



export default App;
