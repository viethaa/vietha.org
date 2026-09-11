import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Self from './pages/Self'
import MovieShelf from './pages/notes/MovieShelf'
import MusicBillboard from './pages/notes/MusicBillboard'
import NotesLayout from './pages/notes/NotesLayout'
import NotesOverview from './pages/notes/NotesOverview'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Writing from './pages/Writing'
import WritingPost from './pages/WritingPost'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="self" element={<Self />} />
        <Route path="projects" element={<Projects />} />
        <Route path="writing" element={<Writing />} />
        <Route path="writing/:slug" element={<WritingPost />} />
        <Route path="notes" element={<NotesLayout />}>
          <Route index element={<NotesOverview />} />
          <Route path="music" element={<MusicBillboard />} />
          <Route path="movies" element={<MovieShelf />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
