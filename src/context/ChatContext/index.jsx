import React, { useState, createContext, useReducer } from 'react';
import { chatsReducer, chatsInitialState } from '../../reducer/chatReducer';
import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE, ERASE_CHAT, BLOCK_CHAT, DELETE_MESSAGE } from '../../reducer/actions';
import { genId } from '../../utils/genId';
import useChatToLS from '../../hooks/useChatToLS';

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {

  const { saveChats, saveMessages, deleteChat, eraseChat, blockChat, deleteMessage } = useChatToLS('chats');

  const [state, dispatch] = useReducer(chatsReducer, chatsInitialState);

  const [chatData, setChatData] = useState({ name: '', description: '' });

  const [searchValue, setSearchValue] = useState('');
  const [actualChat, setActualChat] = useState({});

  const [chatOpened, setChatOpened] = useState(false);
  const [newChatOpened, setNewChatOpened] = useState(false);
  const [searcherOpened, setSearcherOpened] = useState(false);
  const [openChatOptions, setOpenChatOptions] = useState(false);

  const [openModal, setOpenModal] = useState({ erase: false, block: false, delete: false });

  const handleChatOpen = () => {
    setOpenChatOptions(false);
    setChatOpened(!chatOpened);
    if(!!chatOpened) setSearcherOpened(false);
  };
  const handleNewChatOpen = () => setNewChatOpened(!newChatOpened);

  const handleChatOptions = () => setOpenChatOptions(!openChatOptions);

  const handleSearchOpen = () => {
    setSearcherOpened(!searcherOpened)
    setSearchValue('');
  };

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
  const handleNewMessage = (message) => {
    dispatch({ type: SEND_MESSAGE, payload: message});
    saveMessages(actualChat.chatId, message);
  };
  const handleDeleteChat = (chatId) => {
    dispatch({ type: DELETE_CHAT, payload: { chatId: chatId } });
    deleteChat(chatId);
    setActualChat({});
    handleChatOpen();
  }

  const handleEraseChat = (chatId) => {
    dispatch({ type: ERASE_CHAT, payload: { chatId: chatId } });
    eraseChat(chatId);
    setOpenChatOptions(false);
  }

  const handleBlockChat = (chatId) => {
    dispatch({ type: BLOCK_CHAT, payload: { chatId: chatId } });
    blockChat(chatId);
    setOpenChatOptions(false);
  }

  const handleDeleteMessage = (messageId) => {
    dispatch({ type: DELETE_MESSAGE, payload: { chatId: actualChat.chatId, messageId: messageId } });
    deleteMessage(actualChat.chatId, messageId);
  }

  return (
    <ChatContext.Provider value={{
      chats: state.chats,
      chatOpened,
      newChatOpened,
      chatData,
      actualChat,
      searchValue,
      searcherOpened,
      openChatOptions,
      openModal,
      setOpenModal,
      setChatData,
      handleChatOpen,
      handleNewChatOpen,
      handleNewChat,
      handleSearchOpen,
      handleSearchValue,
      handleChatOptions,
      handleSetActualChat,
      handleNewMessage,
      handleDeleteMessage,
      handleDeleteChat,
      handleEraseChat,
      handleBlockChat,
    }}>
      {children}
    </ChatContext.Provider>
  )

}

export { ChatContext, ChatContextProvider };
