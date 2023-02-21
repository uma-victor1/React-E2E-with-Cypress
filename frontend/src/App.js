import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("http://localhost:3000/quotes/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  let fetchNewQuote = () => {
    fetch("http://localhost:3000/quotes/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div className="App">
      <h1>Quote Generator</h1>
         <div className="quote">
            <h2 data-testid="quote">{quote}</h2>
            <small>-{author}-</small>
         </div><br />
         <button  className="btn"  onClick={fetchNewQuote} data-testid="generate-quote-button">Generate New Quote</button>
         <br />
         <button className="btn" onClick={fetchNewQuote}>Generate All Quotes</button>
    </div>
  );
}

export default App;
