import React from 'react'
import ReactDOM from 'react-dom/client';
import { ChatContextProvider } from './context/ChatContext';
import App from './App'
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </React.StrictMode>,
)
