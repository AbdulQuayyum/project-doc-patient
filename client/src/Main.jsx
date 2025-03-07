import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { Background } from "./Theme/Index.jsx"
import { ThemeProvider } from './Contexts/Theme.Context.jsx';
import { DashboardProvider } from './Contexts/Dashboard.Context.jsx';
import App from './App.jsx'
import "./Styles/Index.css"
import "./Styles/Style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardProvider>
        <Background>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Background>
      </DashboardProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
