import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { UserTable } from '../pages/UserTable';
import { NotFound } from '../pages/NotFound';
import { CreateUserForm } from '../pages/CreateUserForm';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/showUser" element={<UserTable />} />
        <Route path="/createUser" element={< CreateUserForm/>} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}
