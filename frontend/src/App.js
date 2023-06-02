import './App.css';
import { useEffect, useState } from 'react';
import weatherService from './services/weatherService';

function App() {
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    getWeater();
  }, []);

  const getWeater = async () => {
    const res = await weatherService.getAll('WeatherForecast');
    setWeathers(res);
  };

  return (
    <>
      <h1>Weathers</h1>
      {weathers.map((weather, index) => (
        <div key={index}>
          <p>{weather.summary}, {weather.date}</p>
        </div>
      ))}
    </>
  );
}

export default App;
