import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://5e3b994d6d1c1cab73e1c6ec9e5c5ef1@o4507243973640192.ingest.us.sentry.io/4509320207990784",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  // {/* </React.StrictMode>, */}
)
