import { combineReducers } from 'redux';

import organizationsReducer from './organizations/reducer';
import organizationReducer from './organization/reducer';

export default combineReducers({
    organizations: organizationsReducer,
    organization: organizationReducer,
});