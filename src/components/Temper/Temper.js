import React from 'react'
import './Temper.css'

function Temper({dataas}) {
    console.log(dataas)
  return (
    <div className='temper'>
         <div className='leftsidediv'>
           <img src={`https://openweathermap.org/img/w/${dataas?.weather[0].icon}.png`}/>
           <h2 className='temp'>{dataas?.temp.eve}&#176;C</h2>
           <h2 className='condition'>{dataas?.weather[0].main}</h2>

           <div className='psy'>
             <div className='aa'>
               <h5 style={{color:'orange'}}>Pressure</h5><h4 className='psych'>{dataas?.pressure} hPa</h4>
             </div> 
             <div className='aa'>
               <h5 style={{color:'orange'}}>Humidity</h5><h4 className='psych'>{dataas?.humidity} %</h4>
             </div>
             <div className='aa'>
             <h5 style={{color:'orange'}}>Speed</h5><h4 className='psych'>{dataas?.speed}m/s N</h4>
             </div>             
           </div>
           
         </div>


         <div className='righttop'>
           
             <div className='ab'>
               <i  id='timeicon' style={{color:'yellow'}} className="fa fa-sun-o" aria-hidden="true"></i><h4 className='time'>6.00 pm</h4>
             </div>


         </div>        
    </div>
  )
}

export default Temper