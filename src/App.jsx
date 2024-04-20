import { useState } from 'react'
import Sinan from './pages/Sinan'
import EgomenComponenet from "./pages/Egomen"
import ElifComp from './pages/ElifComp'
import GultekinComponenet from './pages/Gultekin'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Sevgili Öğrencilerimiz Componentler Buraya
      <div >
        <ElifComp />
        <GultekinComponenet />
        <Sinan />
        <EgomenComponenet />
      </div>
      
    </>
  )
}

export default App
