import './App.css';
import { useState, useEffect } from 'react';
import Clicard from './card';


function App() {
  const [apiData, setApiData] = useState({});
  const [isapi,setApi] = useState(false);
  const [iconUrl,setIconUrl] = useState("");
  const [temp,setTemp] = useState("");
  const [tempMax,setTempFeel] = useState("");
  const [climate,setClimate] = useState("");
  const [searchTerm,setSearchTerm] = useState("");
  const [Term,setTerm] = useState("");
  const handleChange = (event) => {
  setSearchTerm(event.target.value);
  
};
const submitChange = (event) => {
  setSearchTerm(event.target.value);
  setApi(true);
  const tempUrl= `http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`;
  const tempTemp= apiData.main.temp;
  setTempFeel(apiData.main.feels_like);
  setClimate(apiData.weather[0].main)
  setTemp(tempTemp);
  setTerm(apiData.name);
  setIconUrl(tempUrl);  
};
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&aPPID=${apiKey}`;

useEffect(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data));
  } , [apiUrl]);

  return (
    <div className='hero-container'>
      <div className='hero-image'>
        <h1>Welcome to Weather App!</h1>
          <div className="container">
            <input placeholder='Search...' className='js-search' type="text" value={searchTerm} onChange={handleChange}/>
            
            <button onClick={submitChange}> Let's Go! </button>
          </div>
          <div>
            {isapi && <Clicard isapi = {isapi} propData = {iconUrl} data ={temp} tempmax={tempMax} climate={climate} term={Term}/>}
          </div>
      </div>
      
    </div>
  );
}

export default App;
