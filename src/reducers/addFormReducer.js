import {ACTIONS} from '../actions/ACTIONS'

export const addFormReducer = (showAddForm = false, action) => {
    switch (action.type) {
        case ACTIONS.SET_ADD_FORM_MODAL:
            return action.payload
            default:
                return showAddForm
    }
}