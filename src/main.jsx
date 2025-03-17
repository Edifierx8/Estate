import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Home'
import Listings from './Pages/Listings'
import Slider from './Pages/Slider'
import Work from './Pages/Work'
import Testimonial from './Pages/Testimonial'
import Trust from './Pages/Trust'
import End from './Pages/End'
import Terms from './Pages/Terms'
import './main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Listings />
    <Slider />
    <Work />
    <Testimonial />
    <Trust />
    <End />
    <Terms />
  </StrictMode>,
)
