
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import Location from './components/Location/Location';
import Temper from './components/Temper/Temper';
import Forecast from './components/Forecast/Forecast';
import { useState } from 'react';
import axios from 'axios'
import Loading from './components/Loading/Loading';
function App() {


  const [state, setState] = useState({
    value: '',
    current: {},
    weekinfo: [],
    loading: false,
    error: false
  })





  const handleinputchange = event => {
    const { value } = event.target;
    setState({ ...state, value: value })
  }

  const inputcity = async (e) => {
    e.preventDefault();
    setState({ ...state, loading: true })
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${state.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`).then((response) => {
      const datainurl = response.data
      setState({ ...state, current: { datainurl }, loading: false })
      
    })
    .catch((error)=>{
       console.log(error)
       setState({ error: true })

    })

  }





  return (

    <div className='App'>
      <div className='appsub'>
         <Searchbar changeword={handleinputchange} settingword={inputcity} />
     {state.loading === false ?
          <>
          {state.current?.datainurl===undefined?
          "":
          <>
            <div className='alignme'>
              <Location data={state.current?.datainurl} />
              <Temper dataas={state.current?.datainurl?.list[0]} />
            </div>
            <Forecast datas={state.current?.datainurl?.list} />
          </>}

          </>

          : 

          <>
          {state.error===true?
          <p className='errormessage'>!!!City not Found!!!</p>
           :
             <Loading />
          }
            
          </>


      }

    </div>
    </div>


  );
}

export default App;
