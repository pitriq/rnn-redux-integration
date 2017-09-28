import { Navigation } from 'react-native-navigation'

import LoginScreen from '../containers/LoginScreen'
import NewsScreen from '../containers/NewsScreen'
import FinancesScreen from '../containers/FinancesScreen'
import DiscoverScreen from '../containers/DiscoverScreen'

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider)
    Navigation.registerComponent('FinancesScreen', () => FinancesScreen, store, Provider)
    Navigation.registerComponent('NewsScreen', () => NewsScreen, store, Provider)
    Navigation.registerComponent('DiscoverScreen', () => DiscoverScreen, store, Provider)
}
