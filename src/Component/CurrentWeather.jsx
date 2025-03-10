import React from 'react';
import { daysWeek, monthsYear } from './ForcastWeather';

const CurrentWeather = ({current}) => {

    const today = `${daysWeek[new Date().getDay()]} ${new Date().getDate()}, ${monthsYear[new Date().getMonth()]}`;

    return (
        <div className='w-full max-h-80 bg-black-100 shadow-xl col-span-3 sm:col-span-1 row-span-3 p-4 rounded-2xl lg:h-full'>
            <div className='flex gap-2 flex-col text-white-100 text-lg'>
                <h2 className='font-semibold'>NOW</h2>
                <div className='flex items-center gap-7 md:gap-5'>
                    <span className='text-7xl lg:text-5xl xl:text-7xl'>{Math.round(current.main.temp)}°</span>
                    <img alt="weather" className='text-white-100 max-w-28' src={`icons/${current.weather[0].icon}.png`} />
                </div>
                <span>{current.weather[0].description}</span>
                <hr />
                <div>
                    <div className='flex items-center gap-1'>
                        <span><i className="ri-calendar-line"></i></span>
                        <span className='text-sm text-white-200'>{today}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span><i className="ri-map-pin-line"></i></span>
                        <span className='text-sm text-white-200'><span>{current.name}</span>, <span>{current.sys.country}</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
