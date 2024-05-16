import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Companies from './components/companies'
function App() {
    return (
        <div className='w-full flex flex-col'>
          <Header></Header>
          <Companies></Companies>
        </div>
      )
}

export default App
