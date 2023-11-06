import { NavigationContainer } from '@react-navigation/native';
// Routes
import AppRoutes from './app.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
