import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPlayers from './assets/components/AllPlayers'
import SinglePlayer from './assets/components/SinglePlayer'
import NewPlayerForm from './assets/components/NewPlayerForm'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:id' element={<SinglePlayer />} />
          <Route path='/players/new' element={<NewPlayerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
