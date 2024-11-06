import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../pages/Home';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}
