import React from 'react'
import './Location.css'
import moment from 'moment'

function Location({data}) {

    let date = new Date().toLocaleDateString("de-DE");
    console.log(data)
  return (
    <div className='location'>
       <div className='content'>
        <h1 className='place'>{data?.city.name},{data?.city.country}</h1>
        <h2 className='date'>{date}</h2>
        <h3 className='population'>Population : {data?.city.population}</h3>

       </div>

        

    </div>
  )
}

export default Location