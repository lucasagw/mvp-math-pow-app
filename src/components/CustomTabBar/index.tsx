import React from 'react';
// Types
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
// Icons
import { MaterialIcons } from '@expo/vector-icons';
// Theme
import theme from '../../theme/theme';

type Props = BottomTabBarProps;

const CustomTabBar = ({ state, descriptors, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const iconName = options.tabBarIcon;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={styles.buttonView}>
                <View
                  style={[
                    styles.innerButton,
                    {
                      backgroundColor: isFocused
                        ? theme.color.tertiary['main']
                        : 'transparent',
                    },
                  ]}
                >
                  <MaterialIcons
                    size={34}
                    name={iconName}
                    color={
                      isFocused
                        ? theme.color.primary['main']
                        : theme.color.black
                    }
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    gap: 8,
    elevation: 10,
    shadowColor: theme.color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    borderRadius: 99,
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: { alignItems: 'center', padding: 4 },
  innerButton: {
    padding: 8,
    borderRadius: 99,
  },
});

export default CustomTabBar;
