import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Photography from './pages/Photography'
import Projects from './pages/Projects'
import Research from './pages/Research'
import ResearchPost from './pages/ResearchPost'
import Self from './pages/Self'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="self" element={<Self />} />
        <Route path="projects" element={<Projects />} />
        <Route path="research" element={<Research />} />
        <Route path="research/:slug" element={<ResearchPost />} />
        <Route path="photography" element={<Photography />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
