import {
    LOGIN_SCREEN,
    MAIN_SCREEN
} from '../constants/screenNames'
import {
    ROOT_CHANGED
} from '../constants/actionTypes'

export function appInitialized() {
    return async function(dispatch, getState) {
        console.log('initializing')
        // check if the user is already authenticated
        if (!getState().auth.isAuthenticated) {
            dispatch(changeAppRoot(LOGIN_SCREEN));
        } else {
            dispatch(changeAppRoot(MAIN_SCREEN));
        }
    };
}

export function changeAppRoot(root) {
  return { type: ROOT_CHANGED, payload: { root : root } };
}
