import {ACTIONS} from './ACTIONS'

export const setCurrentNote = (note) => {
    return {type:ACTIONS.SET_CURRENT_NOTE, payload: note}
}