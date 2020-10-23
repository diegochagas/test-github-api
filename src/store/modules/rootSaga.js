import { all } from 'redux-saga/effects';

import organizations from './organizations/sagas';
import organization from './organization/sagas';

export default function* rootSaga() {
    return yield all([organizations, organization]);
}