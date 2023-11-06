import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import Home from '../screens/Home';
import theme from '../theme/theme';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color.primary['main'],
        tabBarStyle: {
          backgroundColor: theme.color.white,
          borderTopWidth: 0,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: 'person',
        }}
      />
      <Tab.Screen
        name="Store"
        component={Home}
        options={{
          tabBarIcon: 'storefront',
        }}
      />
      <Tab.Screen
        name="Info"
        component={Home}
        options={{
          tabBarIcon: 'info',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
