import React from "react";
import { apiKey } from "../JpAxios";
import { jpAxios } from "../JpAxios";
import axios from "axios";


const WithFeching = (MainComponent) => {

    const newComponent = (props) => {

        const getWeatherWithCity = async (query) => {
            let fechingObj = {
                current: [],
                forecast: [],
                hourly: []
            }

            fechingObj.current = await jpAxios.get(`weather?q=${query}&units=metric&appid=${apiKey}`);
            fechingObj.forecast = (await jpAxios.get(`forecast?q=${query}&units=metric&appid=${apiKey}`));
            fechingObj.hourly = (await jpAxios.get(`forecast?q=${query}&units=metric&appid=${apiKey}`)).data.list.splice(1, 9);

            return fechingObj;
        }

        const getWeatherWithLocation = async (lat, lon) => {
            let fechingObj = {
                current: [],
                forecast: [],
                hourly: []
            }

            fechingObj.current = await jpAxios.get(`weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
            fechingObj.forecast = await jpAxios.get(`forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
            fechingObj.hourly = (await jpAxios.get(`forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)).data.list.splice(1, 9);

            return fechingObj;
        }

        const getAirIndexQuality = async (lat, lon) => {
            const res = await jpAxios.get(`air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);

            return res;
        }

        return(
            <MainComponent {...props} getWeatherWithCity = {getWeatherWithCity} getWeatherWithLocation = {getWeatherWithLocation} getAirIndexQuality = {getAirIndexQuality}/>
        )

    }
    return newComponent;

}

export default WithFeching;