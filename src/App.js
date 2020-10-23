import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import Routes from './routes';
import history from './services/history';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/" history={history}>
        <div className="App">
          <Routes />

          <GlobalStyles />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
