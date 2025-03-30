import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import "./SeachBox.css";
import { useState } from "react";
function SearchBox({updateData}) {
    let [city,setCity] = useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e9f6a77f9cbc647176d7336b7b5f87a7";

    let weatherInfo = async()=>{
        try{
            let data=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonData= await data.json();
        console.log(jsonData);
        let result = {
            city: city,
            temp:jsonData.main.temp,
            minTemp:jsonData.main.temp_min,
            maxTemp:jsonData.main.temp_max,
            humidity: jsonData.main.humidity,
            feelsLike: jsonData.main.feels_like,
            weather: jsonData.weather[0].description,
        };
        console.log(result);
        return  result;
        } catch(err){
            throw err;
        }
    } 

    let handleChange=(e)=>{
        setCity(e.target.value);
    }

    let handleSubmit=async(e)=>{
        try{
            e.preventDefault();
            console.log(city);
            setCity("");
            let newData= await weatherInfo();
            updateData(newData);
        }catch(err){
            setError(true);
        }

    }
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br />
        <br />
        <Button variant="contained" endIcon={<TravelExploreIcon />} type="submit">
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such place exists in API!!</p>}
      </form>
    </div>
  );
}

export default SearchBox;
