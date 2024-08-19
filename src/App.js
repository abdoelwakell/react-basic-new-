import React, { useEffect, useState } from 'react'
import WOW from 'wowjs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Projects'
import './App.css';
import Navv from './Navv'
import 'bootstrap/dist/css/bootstrap.min.css';
import Latest from './Latest';

import FadeLoader from 'react-spinners/FadeLoader'
import From from './From';
import Home from './Home';
const App = () => {
  const [Loading , Setloading ] = useState(false)
  useEffect(()=> {
    Setloading(true)
    setTimeout(() => {
      Setloading(false)
    }, 3000);
 
  } , [])
  return (
<>
<BrowserRouter>
{Loading ? 
<div className='spoin'>
<FadeLoader
  color="#3980b7"
  height={118}
/>
</div> :
<>
<Navv />
<Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/Projects'  element={<Projects/>}/>
   <Route path='*'  element={1}/>
</Routes>
</>
}
</BrowserRouter>

</>
  )
  
}

export default App
