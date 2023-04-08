import React, { useState, createContext, useReducer } from 'react';
import { chatsReducer, chatsInitialState } from '../../reducer/chatReducer';
import { ADD_CHAT, SEND_MESSAGE } from '../../reducer/actions';

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(chatsReducer, chatsInitialState);

  const [chatOpened, setChatOpened] = useState(false);
  const [newChatOpened, setNewChatOpened] = useState(false);
  const [actualChat, setActualChat] = useState({});

  const [chatData, setChatData] = useState({ name: '', description: '' });

  const handleChatOpen = () => setChatOpened(!chatOpened);
  const handleNewChatOpen = () => setNewChatOpened(!newChatOpened);

  const handleSetActualChat = (chatId) => {
    const getChat = state.chats.findIndex(c => c.chatId === chatId);
    setActualChat({ ...state.chats[getChat] });
  };

  const handleNewChat = (data) => dispatch({ type: ADD_CHAT, payload: data });

  const handleNewMessage = (data) => dispatch({ type: SEND_MESSAGE, payload: data});

  return (
    <ChatContext.Provider value={{
      chats: state.chats,
      chatOpened,
      newChatOpened,
      chatData,
      actualChat,
      setChatData,
      handleChatOpen,
      handleNewChatOpen,
      handleNewChat,
      handleSetActualChat,
      handleNewMessage,
    }}>
      {children}
    </ChatContext.Provider>
  )

}

export { ChatContext, ChatContextProvider };
