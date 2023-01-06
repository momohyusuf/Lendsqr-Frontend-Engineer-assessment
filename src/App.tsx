import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './conponents/SharedLayout';
import PrivateRoutes from './conponents/PrivateRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
