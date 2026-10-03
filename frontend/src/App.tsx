import { Route, Routes } from 'react-router'
import DocumentPage from './pages/DocumentPage'
import MaterialsPage from './pages/MaterialsPage'
import StudyPage from './pages/StudyPage'
import AppHeader from './components/AppHeader'

export default function App() {
  return (
    <>
      <AppHeader />     
          <Routes>
      <Route path="/" element={<MaterialsPage />} />
      <Route path="/documents/:id" element={<DocumentPage />} />
      <Route path="/documents/:id/study" element={<StudyPage />} />
    </Routes>
      </>
  )
}