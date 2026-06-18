import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ChapterScreen from '../screens/ChapterScreen';
import QuizScreen from '../screens/QuizScreen';
import SentenceScreen from '../screens/SentenceScreen';
import ResultScreen from '../screens/ResultScreen';
import colors from '../theme/colors';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: { fontWeight: '700', fontSize: 16 },
          headerBackTitleVisible: false,
          cardStyle: { backgroundColor: colors.background },
          // Disable gesture handler overlay on web — it intercepts scroll events
          gestureEnabled: Platform.OS !== 'web',
          animationEnabled: Platform.OS !== 'web',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '🇰🇷 Korean Master', headerShown: false }}
        />
        <Stack.Screen
          name="Chapter"
          component={ChapterScreen}
          options={{ title: 'Lesson' }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ title: '🔤 Word Quiz' }}
        />
        <Stack.Screen
          name="Sentence"
          component={SentenceScreen}
          options={{ title: '✏️ Fill in the Blank' }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: '🏆 Results', headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
