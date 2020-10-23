export const FETCH_ORGANIZATIONS_REQUEST = "FETCH_ORGANIZATIONS_REQUEST";
export const FETCH_ORGANIZATIONS_SUCCESS = "FETCH_ORGANIZATIONS_SUCCESS";
export const FETCH_ORGANIZATIONS_FAILURE = "FETCH_ORGANIZATIONS_FAILURE";

export function fetchOrganizationsRequest() {
    return {
        type: FETCH_ORGANIZATIONS_REQUEST,
    }
}

export function fetchOrganizationsSuccess(organizations) {
    return {
        type: FETCH_ORGANIZATIONS_SUCCESS,
        payload: { organizations },
    }
}

export function fetchOrganizationsFailure(err) {
    return {
        type: FETCH_ORGANIZATIONS_FAILURE,
        payload: { err }       
    }
}