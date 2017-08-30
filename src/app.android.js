import { Navigation } from 'react-native-navigation'
import configureStore from './store'
import { registerScreens } from './screens'
import { Provider } from 'react-redux'
import watch from 'redux-watch'
import { appInitialized } from './actions/nav'
import {
    LOGIN_SCREEN,
    MAIN_SCREEN
} from './constants/screenNames'
import {
    PRIMARY_COLOR,
    DARKER_PRIMARY,
    COLOR_WHITE
} from './styles/colors'

const store = configureStore()

registerScreens(store, Provider)

const defaultNavigatorStyle = {
    statusBarColor: DARKER_PRIMARY,
    navBarTextColor: COLOR_WHITE,
    navBarBackgroundColor: PRIMARY_COLOR,
    navBarTextFontSize: 17,
    navBarTextFontBold: true,
    topBarElevationShadowEnabled: false,
    navBarTitleTextCentered: true,
}

export default class App {

    constructor(){
        let w = watch(store.getState, 'nav.root')
        store.subscribe(w((newVal, oldVal, path) => {
            this.renderApp(newVal)
        }))
        store.dispatch(appInitialized())
    }

    renderApp(root){
        switch(root) {
            case LOGIN_SCREEN:
                // render login screen
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'LoginScreen',
                        title: 'Login',
                        navigatorStyle: {
                            navBarHidden: true,
                        },
                    },
                })
                return

            case MAIN_SCREEN:
                Navigation.startTabBasedApp({
                    tabs: [
                        {
                            //label: 'News',
                            screen: 'NewsScreen',
                            icon: require('./images/news.png'),
                            title: 'News',
                            navigatorStyle: defaultNavigatorStyle,
                        },
                        {
                            //label: 'Finances',
                            screen: 'FinancesScreen',
                            icon: require('./images/finances.png'),
                            title: 'Finances',
                            navigatorStyle: defaultNavigatorStyle,
                        },
                        {
                            //label: 'Discover',
                            screen: 'DiscoverScreen', // this is a registered name for a screen
                            icon: require('./images/ads.png'),
                            title: 'Discover',
                            navigatorStyle: defaultNavigatorStyle,
                        },
                    ],
                    appStyle: {
                        tabBarSelectedButtonColor: DARKER_PRIMARY,
                    }
                })
                return

            default:
                // this should never happen, though.
                console.error('Unknown app root');
        }
    }

}
