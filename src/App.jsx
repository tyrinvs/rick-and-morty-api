import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CardPage from './pages/CardPage/CardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        {<Route path="/:id" element={ <CardPage /> } />}
      </Routes>
    </Router>
  )
}

export default App