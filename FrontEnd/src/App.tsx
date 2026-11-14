import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/HomePage/Home';
import { Gallery } from './pages/GalleryPage/Gallery';

function App() {

  return (
    <div className="app-shell">
      
      {/* <Header admin={isAdmin} setUser={setUser} /> */}
      {/* <ScrollToTop/> */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/gallery" element={<Gallery />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}

        </Routes>

        {/* <ToastContainer /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
