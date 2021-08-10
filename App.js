import React, { useEffect } from 'react';
import { Routes } from './src/routes/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
// import keys from './src/config/keys';

function App() {

  useEffect(() => {
    // alert(keys.API_URL)
  }, [])

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
