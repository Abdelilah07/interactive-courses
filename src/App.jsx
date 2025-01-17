import { Routes, Route } from 'react-router'
import Navbar from './Navbar'
import Home from './Home'


function App() {

  return (
    <div className="container p-4">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
