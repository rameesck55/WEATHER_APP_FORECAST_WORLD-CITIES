import React from 'react'
import './Forecast.css'
import moment from 'moment'


function Forecast({datas}) {
    console.log(datas)
     


    



  return (
    <div className='Forecast'>



        {datas?.map((value)=>(
            <div className='datas'>
                
                {/* <h1 className='day'>Today</h1> */}
                
            
            <h1 style={{color:'#080606'}} className='day'>{new Date(value.dt*1000).toLocaleString('en-us',{weekday:'long',year:'numeric', month:'long',day:'numeric'}).slice(0,3)}</h1>
            
            
            <img src={`https://openweathermap.org/img/w/${value.weather[0].icon}.png`}/>
            <h2 className='tempinfore'>{Math.round(value.temp.min)}-{Math.round(value.temp.max)}&#176;C</h2>
            <h3 className='weatherinfore'></h3>
            <h4 className='semiweatherinfore'>{value.weather[0].main} ,<br/> {value.weather[0].description}</h4>
          </div>

        ))}


    
        

   
    </div>
  )
}

export default Forecast