import { FETCH_ORGANIZATION_FAILURE, FETCH_ORGANIZATION_REQUEST, FETCH_ORGANIZATION_SUCCESS } from "./actions"

const INITIAL_STATE = { isLoading: false }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ORGANIZATION_REQUEST:
            return { isLoading: true };
        case FETCH_ORGANIZATION_SUCCESS:
            return { items: action.payload.organization, isLoading: false };
        case FETCH_ORGANIZATION_FAILURE:
            return { ...action.payload.err, isLoading: false };
        default:
            return { ...state, isLoading: false };
        
    }
}