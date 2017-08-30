import { Navigation } from 'react-native-navigation'

import LoginScreen from '../containers/LoginScreen'
import NewsScreen from '../containers/NewsScreen'
import FinancesScreen from '../containers/FinancesScreen'
import DiscoverScreen from '../containers/DiscoverScreen'

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('LoginScreen', () => LoginScreen)
    Navigation.registerComponent('FinancesScreen', () => FinancesScreen)
    Navigation.registerComponent('NewsScreen', () => NewsScreen)
    Navigation.registerComponent('DiscoverScreen', () => DiscoverScreen)
}
