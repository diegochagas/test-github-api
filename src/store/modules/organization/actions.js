export const FETCH_ORGANIZATION_REQUEST = "FETCH_ORGANIZATION_REQUEST";
export const FETCH_ORGANIZATION_SUCCESS = "FETCH_ORGANIZATION_SUCCESS";
export const FETCH_ORGANIZATION_FAILURE = "FETCH_ORGANIZATION_FAILURE";

export function fetchOrganizationRequest(login) {
    return {
        type: FETCH_ORGANIZATION_REQUEST,
        payload: { login },
    }
}

export function fetchOrganizationSuccess(organization) {
    return {
        type: FETCH_ORGANIZATION_SUCCESS,
        payload: { organization },
    }
}

export function fetchOrganizationFailure(err) {
    return {
        type: FETCH_ORGANIZATION_FAILURE,
        payload: { err }       
    }
}