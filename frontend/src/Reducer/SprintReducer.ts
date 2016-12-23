import * as actions from './../Action/AppAction';
import State from './../../app/State';

export default (state = State, action) => {
    switch (action.type) {
        case actions.CREATE_SPRINT: {
            return state.set('count', state.get('count') + 1);
        }
        default: {
            return state;
        }
    }
}
