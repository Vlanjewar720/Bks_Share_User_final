import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}> {/* HERE */}
      <App />
       {/* Now, App is wrapped in Provider and hence can read from store */}
    </Provider>
  </BrowserRouter>
  </React.StrictMode>,
)
