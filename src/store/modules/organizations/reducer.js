import { FETCH_ORGANIZATIONS_FAILURE, FETCH_ORGANIZATIONS_REQUEST, FETCH_ORGANIZATIONS_SUCCESS } from "./actions"

const INITIAL_STATE = { isLoading: false }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ORGANIZATIONS_REQUEST:
            return { isLoading: true };
        case FETCH_ORGANIZATIONS_SUCCESS:
            return { items: action.payload.organizations, isLoading: false };
        case FETCH_ORGANIZATIONS_FAILURE:
            return { ...action.payload.err, isLoading: false };
        default:
            return { ...state, isLoading: false };
        
    }
}