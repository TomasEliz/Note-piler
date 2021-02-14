import {ACTIONS} from '../actions/ACTIONS'

export const currentNoteReducer = (currentNote = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_CURRENT_NOTE:
            return action.payload
            default:
                return currentNote
    }
}