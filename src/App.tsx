import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Reviews from './pages/reviews/Reviews'
import Category from './pages/category/Category'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
    </div>
  )
}

export default App
