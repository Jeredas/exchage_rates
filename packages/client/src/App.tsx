import React from 'react';
import './App.css';
import { Converter } from './components/converter';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Converter/>
    </Provider>
  );
}

export default App;
