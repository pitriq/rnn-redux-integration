import {
    ROOT_CHANGED
} from '../constants/actionTypes';

const initialState = {
  root: null
}

export default function nav(state = initialState, action = {}) {

    switch (action.type) {

        case ROOT_CHANGED:
            return {
                ...state,
                root: action.payload.root
            }

        return state
    }
    return state
  }
