import React, { useContext } from 'react';
import { ChatContext } from './context/ChatContext';
import Header from './components/Header';
import Searcher from './components/Searcher';
import InitialNav from './components/InitialNav';
import DataInChat from './components/DataInChat/index';
import MainContainer from './containers/MainContainer';
import ChatsContainer from './containers/ChatsContainer';
import AllChats from './containers/AllChats';
import Chat from './components/Chat';
import NewChat from './components/NewChat';
import UniqueChat from './containers/UniqueChat';
import './styles/App.css';

function App() {

  const {
    chatOpened,
    newChatOpened,
    searcherOpened,
  } = useContext(ChatContext)

  return (
    <MainContainer>
      {!chatOpened &&
        <>
          <Header>
            <InitialNav />
            {searcherOpened && <Searcher />}
          </Header>
          {newChatOpened && <NewChat />}
          <ChatsContainer>
            <AllChats />
          </ChatsContainer>
        </>
      }
      {
        chatOpened &&
        <>
          <Header>
            <DataInChat />
          </Header>
          <UniqueChat>
            <Chat />
          </UniqueChat>
        </>
      }
    </MainContainer>
  );
}

export default App;
