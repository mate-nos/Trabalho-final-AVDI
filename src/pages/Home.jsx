import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import AboutSection from '../components/AboutSection.jsx'
import MenuStorytelling from '../components/MenuStorytelling.jsx'
import { scrollToTarget } from '../utils/scroll.js'
export default function Home() {
  const { state } = useLocation()
  useEffect(() => {
    if (state?.target) setTimeout(() => scrollToTarget(state.target), 60)
  }, [state])
  return (<><Navbar /><main><AboutSection /><MenuStorytelling /></main></>)
}
