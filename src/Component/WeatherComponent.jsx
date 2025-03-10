import React, { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather';
import TodayHighlights from './TodayHighlights';
import ForcastWeather from './ForcastWeather';
import HourlyWeather from './HourlyWeather';
import WithFeching from '../HOC/WithFeching';
import AnimationLoading from './AnimationLoading';


const WeatherComponent = ({getWeatherWithCity, getWeatherWithLocation, getAirIndexQuality}) => {

    const [current, setCurrent] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [highlights, setHighlights] = useState({
        airQuality: [],
        data: []
    });
    const [hourlyWeather, setHourlyWeather] = useState([])
    const [coord, setCoord] = useState({
        lat: '',
        lon: ''
    });
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    
    const handelQuery = (query) => {
        setLoading(true);
        
        getWeatherWithCity(query).then(res => {
            setCurrent(res.current.data);
            setCoord({lat: res.current.data.coord.lat, lon: res.current.data.coord.lon});

            setHourlyWeather(res.forecast.data.list.splice(1, 9));
            setForecast(res.forecast.data);
        }).catch(err => {
            alert('Pleas enter the name of your country/city correctly!');
            setLoading(false);
        })
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            setLoading(true);
          navigator.geolocation.getCurrentPosition(showCurrentPosition, showError);
        } else { 
          return
        }
    }
      
    const showCurrentPosition = (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        getWeatherWithLocation(lat, lon).then(res => {
            
            setCurrent(res.current.data);
            setCoord({lat: res.current.data.coord.lat, lon: res.current.data.coord.lon});

            setHourlyWeather(res.forecast.data.list.splice(1, 9));
            setForecast(res.forecast.data);
        })
    }

    const showError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              setLoading(false)
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              setLoading(false)
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              setLoading(false)
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              setLoading(false)
              break;
        }
    }


    useEffect(() => {
        getLocation();
    }, [])

    useEffect(() => {
        if(coord.lat) {
            getAirIndexQuality(coord.lat, coord.lon).then(res => {
                setHighlights({airQuality:res.data.list[0], data:current});
                setLoading(false)
            })
        }
        
    }, [coord])

    

    return (
        <div className='flex items-center justify-center flex-col gap-5 py-2 px-6'>
            <section className='w-full flex items-center justify-between gap-2'>
                {/* <img className='max-h-10 h-auto' src={`icons/Weather_App_Icon.png`} alt="" /> */}
                <span className='max-w-[150px] lg:min-w-[200px] w-auto md:w-full text-base lg:text-2xl font-bold text-[#695CFE]'>WEATHER APP</span>
                <form className='w-full col-span-3 lg:col-span-2 lg:col-start-2 flex items-center justify-center' onSubmit={(e) => {
                    e.preventDefault();
                    handelQuery(query);
                }}>
                    <div className='w-full md:w-[400px] flex items-center gap-1 bg-black-100 text-white-100 p-2 rounded-2xl'>
                        <span className='cursor-pointer'><i className="ri-search-line"></i></span>
                        <input className='w-full p-1 bg-transparent focus:bg-transparent focus:outline-none' type="search" placeholder='Search City...' onChange={(e) => setQuery(e.target.value)}/>
                    </div>
                </form>
                <div className='max-w-[170px] min-w-[30px] w-auto lg:w-full ml-auto bg-[#695CFE] rounded-full lg:rounded-2xl text-center p-1 lg:p-2 cursor-pointer' onClick={() => getLocation()}>
                    <i className="ri-focus-3-line font-semibold lg:mr-2"></i>   <span className='hidden lg:inline-block text-sm font-semibold'>Current Location</span>
                </div>
            </section>
            <section className='w-full max-h-[600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-6 gap-5'>
                {loading ? 
                (
                    <AnimationLoading/>
                ): current.main && forecast.list && highlights.airQuality.main ?
                (
                    <>
                        <CurrentWeather current = {current}/>
                        <TodayHighlights airQuality = {highlights.airQuality} data = {highlights.data}/>
                        <ForcastWeather forecast = {forecast}/>
                        <HourlyWeather hourly = {hourlyWeather}/>
                    </>
                ) : 
                (
                    <span className='text-white-100 col-span-4 row-span-4 text-center'>Pleas Enter Your City</span>
                )}
            </section>
        </div>
        
    );
}

export default WithFeching(WeatherComponent);
