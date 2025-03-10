import React, { useState } from 'react';
import moment from 'moment';

const TodayHighlights = ({airQuality, data}) => {

    const [aiq, setAiq] = useState({
        value: '',
        color: ''
    })

    const getSunrise = () => {
        let timezone = data.timezone;
        let sunrise = data.sys.sunrise;

        let x = moment.utc(sunrise,'X').add(timezone,'seconds').format('HH:mm a');
        return x;
    }

    const getSunset = () => {
        let timezone = data.timezone;
        let sunrise = data.sys.sunset;

        let x = moment.utc(sunrise,'X').add(timezone,'seconds').format('HH:mm a');
        return x;
    }

    const airQualityIndex = () => {
        switch (airQuality.main.aqi) {
            case 1:
                setAiq({value: 'Good', color: '#087f5b'})
                break;
            case 2:
                setAiq({value: 'Fair', color: '#e25822'})
                break;
            case 3:
                setAiq({value: 'Moderate', color: '#fcc419'})
                break;
            case 4:
                setAiq({value: 'Poor', color: '#ff922b'})
                break;
            case 5:
                setAiq({value: 'Very Poor', color: '#e25822'})
                break;
        }
    }

    useState(() => {
        airQualityIndex();
    }, [])


    return (
        <div className=' flex flex-col gap-5 bg-black-100 shadow-xl text-white row-span-4 col-span-3 p-4 rounded-2xl'>
            <h2 className='font-semibold'>Today Highlights</h2>
            <ul className='w-full grid lg:grid-cols-2 grid-rows-2 gap-4'>
                <li className='w-full flex flex-col gap-8 bg-black-200 rounded-lg p-3'>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-white-200 font-semibold'>Air Quality Index</span>
                        <span style={{backgroundColor: aiq.color}} className='bg-white-200 text-black-300 text-sm font-semibold px-2 py-1 rounded-2xl'>{aiq.value}</span>
                    </div>
                    <ul className='flex items-center justify-between'>
                        <span className='text-4xl xl:text-6xl text-white-100'><i className="ri-windy-line"></i></span>
                        <li className='flex items-center gap-1 flex-col'>
                            <span className='text-white-200 text-xs'>PM<span className='text-[10px]'>2.5</span></span>
                            <span className='text-white-100 font-semibold text-xl'>{airQuality.components.pm2_5}</span>
                        </li>
                        <li className='flex items-center gap-1 flex-col'>
                            <span className='text-white-200 text-xs'>SO<span className='text-[10px]'>2</span></span>
                            <span className='text-white-100 font-semibold text-xl'>{airQuality.components.so2}</span>
                        </li>
                        <li className='flex items-center gap-1 flex-col'>
                            <span className='text-white-200 text-xs'>NO<span className='text-[10px]'>2</span></span>
                            <span className='text-white-100 font-semibold text-xl'>{airQuality.components.no2}</span>
                        </li>
                        <li className='flex items-center gap-1 flex-col'>
                            <span className='text-white-200 text-xs'>O<span className='text-[10px]'>3</span></span>
                            <span className='text-white-100 font-semibold text-xl'>{airQuality.components.o3}</span>
                        </li>
                        
                    </ul>
                </li>
                <li className='w-full flex flex-col gap-8 bg-black-200 rounded-lg p-3'>
                    <span className='text-sm text-white-200 font-semibold'>Sunrise & Sunset</span>
                    <div className='flex items-center gap-8'>
                        <div className='flex items-center gap-4'>
                            <span><i className="ri-sun-line text-4xl lg:text-6xl to-white-100"></i></span>
                            <div className='flex items-center gap-1 flex-col text-center'>
                                <span className='text-white-200 text-xs'>Sunrise</span>
                                <span className='text-white-100 font-semibold text-xl xl:text-2xl'>{getSunrise()}</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span><i className="ri-moon-line text-4xl lg:text-6xl to-white-100"></i></span>
                            <div className='flex items-center gap-1 flex-col text-center'>
                                <span className='text-white-200 text-xs'>Sunrise</span>
                                <span className='text-white-100 font-semibold text-xl xl:text-2xl'>{getSunset()}</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='flex items-center gap-4'>
                    <div className='w-full flex flex-col gap-8 bg-black-200 rounded-lg p-3'>
                        <span className='text-sm text-white-200 font-semibold'>Humidity</span>
                        <div className='flex items-center justify-between'>
                            <span><i className="ri-water-percent-line text-4xl lg:text-6xl"></i></span>
                            <span className='text-white-100 font-semibold text-xl xl:text-2xl 2xl:text-3xl'>{data.main.humidity}%</span>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-8 bg-black-200 rounded-lg p-3'>
                        <span className='text-sm text-white-200 font-semibold'>Pressure</span>
                        <div className='flex items-center justify-between'>
                            <span><i className="ri-mist-line text-4xl lg:text-6xl"></i></span>
                            <span className='text-white-100 font-semibold text-xl xl:text-2xl 2xl:text-3xl'>{data.main.pressure}hPa</span>
                        </div>
                    </div>
                </li>
                <li className='flex items-center gap-4'>
                <div className='w-full flex flex-col gap-8 bg-black-200 rounded-lg p-3'>
                        <span className='text-sm text-white-200 font-semibold'>Visibility</span>
                        <div className='flex items-center justify-between'>
                            <span><i className="ri-eye-line text-4xl lg:text-6xl"></i></span>
                            <span className='text-white-100 font-semibold text-xl xl:text-2xl 2xl:text-3xl'>{data.visibility}km</span>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-8 bg-black-200 rounded-lg p-3'>
                        <span className='text-sm text-white-200 font-semibold'>Feels Like</span>
                        <div className='flex items-center justify-between'>
                            <span><i className="ri-temp-cold-line text-4xl lg:text-6xl"></i></span>
                            <span className='text-white-100 font-semibold text-xl xl:text-2xl 2xl:text-3xl'>{data.main.feels_like}°c</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default TodayHighlights;
