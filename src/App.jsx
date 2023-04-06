import { useContext } from 'react';
import { ChatContext } from './context/ChatContext';
import Header from './components/Header';
import InitialNav from './components/InitialNav';
import MainContainer from './containers/MainContainer';
import ChatsContainer from './containers/ChatsContainer';
import AllChats from './containers/AllChats';
import Chat from './components/Chat';
import './styles/App.css';
import DataInChat from './components/DataInChat/index';

function App() {

  const {
    chatOpened,
  } = useContext(ChatContext)

  return (
    <MainContainer>
      {!chatOpened &&
        <>
          <Header>
            <InitialNav />
          </Header>
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
          <ChatsContainer>
            <Chat />
          </ChatsContainer>
        </>
      }
    </MainContainer>
  );
}

export default App;
