import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TrackPageView from './TrackPageView.jsx'
import TagManager from "react-gtm-module";

TagManager.initialize({
  gtmId: "GTM-NN9PSF85", // your GTM container ID
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <TrackPageView />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
