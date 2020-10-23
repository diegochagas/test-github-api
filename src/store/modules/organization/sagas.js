import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { fetchOrganizationFailure, fetchOrganizationSuccess, FETCH_ORGANIZATION_REQUEST } from './actions';

export function* fetchOrganization({ payload }) {
    const { login } = payload;

    try {
        const response = yield call(api.get, `/orgs/${login}`);
        const responseRepositories = yield call(api.get, `/orgs/${login}/repos`);

        yield put(fetchOrganizationSuccess({ ...response.data, repos: responseRepositories.data })); 
    } catch(err) {
        yield put(fetchOrganizationFailure(err));
    }
}

export default all([takeLatest(FETCH_ORGANIZATION_REQUEST, fetchOrganization)]);