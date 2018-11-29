import {Action} from 'redux-actions';
import {pageSwitch} from './actions';
import {combineReducers} from 'redux';

export const pagesReducer = combineReducers({
    active
});

interface ModalActions {
    active: any;
}

function active(state: string = '', action: Action<ModalActions>) {
    if (action.type === pageSwitch.toString()) {
        return action.payload.active;
    }
    return state;
}

export default pagesReducer;
