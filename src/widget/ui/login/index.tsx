import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginWidget from './loginWidget';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LoginWidget />
  </React.StrictMode>
);
export { LoginWidget };

