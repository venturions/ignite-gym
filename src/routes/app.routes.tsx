import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { Exercise } from '@screens/Exercise'
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import { History } from '@screens/History'

type AppRoutes = {
  home: undefined
  exercise: undefined
  profile: undefined
  history: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="exercise" component={Exercise} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  )
}
