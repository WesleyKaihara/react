import { Navigate } from 'react-router-dom';
import fakeAuth from '../fake-auth';

const PrivateRoute = ({ children }) => (
    fakeAuth.isAuthenticated
        ? children
        : <Navigate to="/login" />
);


export default PrivateRoute;