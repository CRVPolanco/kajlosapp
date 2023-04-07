import { useContext } from 'react';
import { ChatContext } from './context/ChatContext';
import Header from './components/Header';
import InitialNav from './components/InitialNav';
import MainContainer from './containers/MainContainer';
import ChatsContainer from './containers/ChatsContainer';
import UniqueChat from './containers/UniqueChat';
import AllChats from './containers/AllChats';
import DataInChat from './components/DataInChat/index';
import NewChat from './components/NewChat';
import Chat from './components/Chat';
import './styles/App.css';

function App() {

  const {
    chatOpened,
    newChatOpened,
  } = useContext(ChatContext)

  return (
    <MainContainer>
      {!chatOpened &&
        <>
          <Header>
            <InitialNav />
          </Header>
          { newChatOpened && <NewChat /> }
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
