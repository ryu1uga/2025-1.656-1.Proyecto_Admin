import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MainPage from './pages/MainPage.tsx'
import GamePage from './pages/game/GamePage.tsx'
import GameAddPage from './pages/game/add/GameAddPage.tsx'
import GameEditPage from './pages/game/edit/GameEditPage.tsx'
import GameDetailsPage from './pages/game/details/GameDetailsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/game" element={ <GamePage /> } />
        <Route path="/game/add" element={ <GameAddPage /> } />
        <Route path="/game/edit/{id}" element={ <GameAddPage /> } />
        <Route path="/game/edit/:id" element={<GameEditPage />} />
        <Route path="/game/details" element={<GameDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)