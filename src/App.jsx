import React from 'react';
import { ChatContextProvider } from './context/ChatContext';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import ChatsContainer from './containers/ChatsContainer';
import './styles/App.css';

function App() {

  return (
    <ChatContextProvider>
      <MainContainer>
        <Header />
        <ChatsContainer/>
      </MainContainer>
    </ChatContextProvider>
  );
}

export default App;
