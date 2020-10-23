import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { fetchOrganizationsFailure, fetchOrganizationsSuccess, FETCH_ORGANIZATIONS_REQUEST } from './actions';

export function* fetchOrganizations() {
    try {
        const response = yield call(api.get, 'organizations');

        yield put(fetchOrganizationsSuccess(response.data)); 
    } catch(err) {
        yield put(fetchOrganizationsFailure(err));
    }
}

export default all([takeLatest(FETCH_ORGANIZATIONS_REQUEST, fetchOrganizations)]);