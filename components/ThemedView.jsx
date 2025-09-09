import { useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/colors';

const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <LinearGradient
      colors={['#353F54', '#34C8E8']}
      locations={[0.4, 0.7]}
      start={{ x: 0, y: 0 }}
      end={{ x: 2, y: 0.5 }}
      style={style}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};

export default ThemedView;
