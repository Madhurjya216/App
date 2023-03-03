import React, {useState, useEffect} from "react";
// import { Container, Row, Col } from "reactstrap";
import "../style/Home.css";



const Weather = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eeb2c4108fe9d3abb621bfc688d23dea`;
            const res = await fetch(url)
            const resJson = await res.json();
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])


    return(
        <>
            <section>
                        <div className="flex">

                            {/* ============== banner code ============== */}

                            <div className="discount">
                                <div id="text">
                                <h1 id="h1">Special Offer</h1>
                                <h3 id="h3">Upto <span>50% Off</span></h3>
                                <a href="#"><button id="btn">Shop Now</button></a>
                                </div>  
                            </div>

                            {/* ============== weather app ============== */}

                            <div className='weather'>
                                <div className='w-heading'>  
                                    <h2>Weather App</h2>
                                </div>
                                <div className="weather_contain">
                                <div className='w-search'>
                                    <input type="search" className='w-100' placeholder="What's your location" onChange={(event) => {setSearch(event.target.value)}}/>
                                </div>

                                {!city ? (  
                                    <div className='weather_nodata'>
                                    <p>No Data Found</p>  
                                    <img src="https://i.ibb.co/dMwvGQ8/cloud.png" alt="cloud" /> 
                                    </div>
                                ) : (
                                    <div className="w-info">
                                        <h2 className="location"> 
                                            {search}
                                        </h2>
                                        <h1 className="temp">
                                            <p><img src="https://i.ibb.co/7k0DHSJ/cloudy-day.png" alt="cloudy-day" /></p>
                                            {city.temp}°C
                                        </h1>
                                    </div>
                                )
                                }
                                </div>
                            </div>
                        </div>
            </section>
        </>
    )
}

export default Weather;