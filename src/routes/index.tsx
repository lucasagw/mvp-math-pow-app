import { NavigationContainer } from '@react-navigation/native';
// Routes
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
// Store
import { useAuthStore } from '../store/auth/auth.store';

const Routes = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
