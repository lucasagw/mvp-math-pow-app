// Screen
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

export type IAuthStackParamsList = {
  login: undefined;
  register: undefined;
  onboarding: undefined;
  recoveryPassword: undefined;
};

const AuthStack = createStackNavigator();

export type IAuthStack = StackNavigationProp<IAuthStackParamsList>;

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator initialRouteName="login">
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
