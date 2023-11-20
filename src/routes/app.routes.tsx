import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import Home from '../screens/Home';
import Faq from '../features/info/Faq';
import theme from '../theme/theme';
// Components
import { CustomHeader, CustomTabBar } from '../common';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color.primary,
        tabBarStyle: {
          backgroundColor: theme.color.whiteAlt,
          borderTopWidth: 0,
        },
        header: (props) => <CustomHeader {...props} />,
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
        component={Faq}
        options={{
          tabBarIcon: 'info',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
