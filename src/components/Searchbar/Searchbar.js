import React, { useState } from 'react'
import './searchbar.css'

function Searchbar({changeword,settingword}) {



  return (
    <div className='searchbar'>
        <div className='search_content'>
            <form action="submit" onSubmit={settingword} >
             <input className='inputbox'onChange={changeword} name='key' type="text" />
             <i id='searchicon' className="fa fa-search" aria-hidden="true" onClick={settingword}></i>
             </form>

        </div>
        

    </div>
  )
}

export default Searchbar