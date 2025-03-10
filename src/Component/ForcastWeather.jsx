import React, { useState } from 'react';

export const daysWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

export const monthsYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const ForcastWeather = ({forecast}) => {

    const [forecastWeather, setForecastWeather] = useState([]);
    const [isready, setIsReady] = useState(false);
    const today = new Date().getDate();
    const month = monthsYear[new Date().getMonth()].slice(0, 3);

    const forecastDays = daysWeek.slice(new Date().getDay() + 1, daysWeek.length).concat(
        daysWeek.slice(0, new Date().getDay())
    );

    useState(() => {
        for (let index = 0; index < 5; index++) {
            let month = new Date().getMonth() + 1;
            let day = new Date().getDate() + index;
            const timeTaken = `2025-${month >9 ? month : `0${month}`}-${day >9 ? day : `0${day}`}`;
            let forecastFillter = forecast.list.filter(x => x.dt_txt.includes(timeTaken));
            forecastWeather.push(forecastFillter[0]);
        }

        setIsReady(true);
    }, [])
    

    return (
        <div className='w-full max-h-80 flex flex-col gap-2 2xl:gap-3 bg-black-100 text-white-100 col-span-3 row-span-3 p-4 rounded-2xl sm:row-start-1 sm:col-start-2 sm:col-span-2 lg:col-span-1 lg:row-start-auto lg:col-start-auto'>
            <h2 className='font-semibold'>5 Days Forcast</h2>
            <ul className=''>
                {isready ? forecastWeather.map((item, index) => (
                    <li key={index} className='flex items-center gap-10'>
                        <div className='flex items-center'>
                            <img alt="weather" className='text-white-100 max-w-12 w-auto' src={`icons/${item.weather[0].icon}.png`} />
                            <h4><span></span><span className='text-xl'>{Math.round(item.main.temp)}°</span></h4>
                        </div>
                        <span className='text-white-200 text-sm'>{`${today + index} ${month}`}</span>
                        <span className='text-white-200 text-sm ml-auto'>{forecastDays[index]}</span>
                    </li>
                )) : <></>}
                
                
            </ul>
        </div>
    );
}

export default ForcastWeather;
