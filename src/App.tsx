import { Routes, Route } from 'react-router-dom';

import { Main } from './pages/Main';
import { History } from './pages/History';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
