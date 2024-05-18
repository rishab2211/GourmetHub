import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Headlinecard } from './components/headlinecard'
import { Food } from './components/Food'
import { Category } from './components/category'
function App() {
 
  return (

    <>
<Navbar ></Navbar>
<Hero></Hero>
<Headlinecard></Headlinecard>
<Food></Food>
<Category></Category>
    </>
  )
}

export default App
