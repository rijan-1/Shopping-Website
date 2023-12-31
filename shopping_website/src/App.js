import { Shop } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";
import { NavBar } from "./Components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {HandleContextProvider} from './Context'

function App() {
  return (
    <div>
      <HandleContextProvider>
       <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Pages/Cart/Cart' element={<Cart/>}/>
       </Routes>
            </BrowserRouter>
      
</HandleContextProvider>
    </div>

  );
}

export default App;
