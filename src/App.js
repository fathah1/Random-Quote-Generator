import React from 'react';
import logo from './logo.svg';
import './App.css';


//RANDOM QUOTE MACHINE PROJECT

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="main-header">Random Quote Generator.</h1>
        <h2 class="tag-line">100's of quotes for you to learn from</h2>
      </header>

        <div id="quote-box">
            <h2 id="text">"Add quotes from API"</h2>
            <h3 id="author">:- author's name</h3> 
            <div class="buttons"> 
              <a id="tweet-quote" class="fa fa-twitter" target="_blank" href="twitter.com/intent/tweet"></a>
              <button id="new-quote">New Quote</button>
            </div>
        </div>
      
    </div>
  );
}

export default App;
