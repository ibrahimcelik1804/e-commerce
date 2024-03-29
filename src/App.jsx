import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Checkout from './pages/Checkout';
import Header from "./components/Header";


function App() {
  

  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<MainPage/>}/>
  <Route path="/sepet" element={<Checkout/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
