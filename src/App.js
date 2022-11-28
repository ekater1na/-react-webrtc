import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { MainPage } from './pages/MainPage';
import { RoomPage } from './pages/RoomPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/room/:id" element={<RoomPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
