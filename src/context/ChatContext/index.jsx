import React, { useState, createContext, useReducer } from 'react';
import { chatsReducer, chatsInitialState } from '../../reducer/chatReducer';
import { ADD_CHAT, SEND_MESSAGE } from '../../reducer/actions';
import { genId } from '../../utils/genId';
import useChatToLS from '../../hooks/useChatToLS';

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {

  const { saveChats } = useChatToLS('chats');

  const [state, dispatch] = useReducer(chatsReducer, chatsInitialState);

  const [chatData, setChatData] = useState({ name: '', description: '' });
  const [searchValue, setSearchValue] = useState('');
  const [actualChat, setActualChat] = useState({});

  const [chatOpened, setChatOpened] = useState(false);
  const [newChatOpened, setNewChatOpened] = useState(false);
  const [searcherOpened, setSearcherOpened] = useState(false);

  const handleChatOpen = () => setChatOpened(!chatOpened);
  const handleNewChatOpen = () => setNewChatOpened(!newChatOpened);
  const handleSearchOpen = () => setSearcherOpened(!searcherOpened);

  const handleSearchValue = (e) => setSearchValue(e.target.value);

  const handleSetActualChat = (chatId) => {
    const getChat = state.chats.findIndex(c => c.chatId === chatId);
    setActualChat({ ...state.chats[getChat] });
  };

  const handleNewChat = (data) => {
    const id = genId();
    dispatch({ type: ADD_CHAT, payload: { ...data, id } });
    saveChats(id, data);
  };
  const handleNewMessage = (data) => dispatch({ type: SEND_MESSAGE, payload: data});

  return (
    <ChatContext.Provider value={{
      chats: state.chats,
      chatOpened,
      newChatOpened,
      chatData,
      actualChat,
      searchValue,
      searcherOpened,
      setChatData,
      handleChatOpen,
      handleNewChatOpen,
      handleNewChat,
      handleSearchOpen,
      handleSearchValue,
      handleSetActualChat,
      handleNewMessage,
    }}>
      {children}
    </ChatContext.Provider>
  )

}

export { ChatContext, ChatContextProvider };
