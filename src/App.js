import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>App component</h1>
      </div>
    </Provider>
  );
}

export default App;
