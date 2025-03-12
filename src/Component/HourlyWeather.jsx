import React, { useEffect, useState } from 'react';


const HourlyWeather = ({hourly}) => {

    const [hourlyItems, setHourlyItems] = useState([]);
    const [timeArray, setTimaArray] = useState([]);
    const [isready, setIsReady] = useState(false);


    useEffect(() => {
        hourly.map(x => {
            const dtText = x.dt_txt.split(' ', 2);
            const timeText = dtText[1].split(':', 3);
            timeArray.push(parseInt(timeText[0]));
        })
        setIsReady(true); 
    }, [])
    
    

    return (
        <div className='w-full h-full flex flex-col gap-4 col-span-3 row-span-2 text-white-100'>
            <h2 className='font-semibold'>Today at</h2>
            <ul className='today w-full h-full flex items-center gap-3 overflow-scroll'>
                {isready ? timeArray.map((t, index) => (
                    <li key={index} className='min-w-[80px] w-full h-full flex items-center justify-between flex-col bg-black-100 text-white-200 rounded-2xl p-2'>
                    <span>{`${t} ${t >= 12 ? 'PM' : 'AM'}`}</span>
                    <img alt="weather" className='text-white-100 w-15' src={`icons/${hourly[index].weather[0].icon}.png`} />
                    <span>{Math.round(hourly[index].main.temp)}°</span>
                </li>
                )) : <span className='text-white-100'>Rtt</span>}
            </ul>
            
        </div>
    );
}

export default HourlyWeather;
