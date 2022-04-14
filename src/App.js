import halleys from './halleys.jpg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [date, setDate] = useState({year:0, day:0, hour:0, min:0, sec:0});

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(date => countdown())
    }, 1e3);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p class="decorated">Countdown to Halley's Comet!</p>
        <a href="https://wikipedia.org/wiki/Halley%27s_Comet"><img src={halleys} className="App-logo" alt="logo" /></a>
        <p><span class="num">{date.year}</span> years <span class="num">{date.day}</span> days <span class="num">{date.hour}</span> hours <span class="num">{date.min}</span> minutes and <span class="num">{date.sec}</span> seconds.</p>
      </header>
    </div>
  );
}

function countdown() {
  // Date to countdown to (July 29, 2061)
  let then = new Date("July 28, 2061");

  // Current date.
  let now = new Date();

  // Compute distance between the two dates (in ms).
  let ms = then - now;

  // Get years, days, hours, minutes, and seconds.
  let year = Math.floor(ms / (1e3 * 60 * 60 * 24 * 365));
  let day = Math.floor((ms % (1e3 * 60 * 60 * 24 * 365)) / (1e3 * 60 * 60 * 24));
  let hour = Math.floor((ms % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60));
  let min = Math.floor((ms % (1e3 * 60 * 60)) / (1e3 * 60));
  let sec = Math.floor((ms % (1e3 * 60)) / 1e3);

  return {year:year, day:day, hour:hour, min:min, sec:sec};
}

export default App;
