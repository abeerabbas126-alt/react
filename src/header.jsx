import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Aboute from './aboute'
import Help from './help'
import Servise from './servise'
const header = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/help' element={<Help/>}/>
    <Route path='/aboute' element={<Aboute/>}/>
     <Route path='/servise' element={<Servise/>}/>  
  </Routes>
  </BrowserRouter>
    
  )
}

export default header
