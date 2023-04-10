import React, { useState, createContext, useReducer } from 'react';
import { chatsReducer, chatsInitialState } from '../../reducer/chatReducer';
import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE, ERASE_CHAT, BLOCK_CHAT, DELETE_MESSAGE, UPDATE_CHAT, UPDATE_MESSAGE } from '../../reducer/actions';
import { genId } from '../../utils/genId';
import useChatToLS from '../../hooks/useChatToLS';

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {

  const { saveChats, updateChat, deleteChat, eraseChat, blockChat, saveMessages, updateMessages, deleteMessage } = useChatToLS('chats');

  const [state, dispatch] = useReducer(chatsReducer, chatsInitialState);

  const [chatOpened, setChatOpened] = useState(false);
  const [newChatOpened, setNewChatOpened] = useState(false);
  const [searcherOpened, setSearcherOpened] = useState(false);
  const [openChatOptions, setOpenChatOptions] = useState(false);

  const [openModal, setOpenModal] = useState({ edit: false, erase: false, block: false, delete: false });

  const [actualChat, setActualChat] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [chatData, setChatData] = useState({ name: '', description: '' });

  const handleChatOpen = () => {
    setOpenChatOptions(false);
    setChatOpened(!chatOpened);
    if(!!chatOpened) setSearcherOpened(false);
  };

  const handleNewChatOpen = () => setNewChatOpened(!newChatOpened);
  const handleChatOptions = () => setOpenChatOptions(!openChatOptions);
  const handleSearchValue = (e) => setSearchValue(e.target.value);

  const handleSearchOpen = () => {
    setSearcherOpened(!searcherOpened)
    setSearchValue('');
  };

  const handleSetActualChat = (chatId) => {
    const getChat = state.chats.findIndex(c => c.chatId === chatId);
    setActualChat({ ...state.chats[getChat] });
  };

  const handleNewChat = (data) => {
    const id = genId();
    dispatch({ type: ADD_CHAT, payload: { ...data, id } });
    saveChats(id, data);
  };

  const handleEditChat = (chatId, changes) => {
    dispatch({ type: UPDATE_CHAT,
      payload: {
        chatId: chatId,
        name: changes.name,
        description: changes.description
      }
    });
    updateChat(chatId, changes);
  }

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
    dispatch({ type: BLOCK_CHAT, payload: { chatId } });
    blockChat(chatId);
    setOpenChatOptions(false);
  }

  const handleNewMessage = (message) => {
    dispatch({ type: SEND_MESSAGE, payload: message });
    saveMessages(actualChat.chatId, message);
  };

  const handleEditMessageEvent = (chatId, messageId, changes) => {
    dispatch({ type: UPDATE_MESSAGE, payload: { chatId, messageId, changes } });
    updateMessages(chatId, messageId, changes);
  };

  const handleDeleteMessage = (messageId) => {
    dispatch({ type: DELETE_MESSAGE, payload: { chatId: actualChat.chatId, messageId }});
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
      handleSearchValue,
      handleSetActualChat,
      handleChatOpen,
      handleNewChatOpen,
      handleSearchOpen,
      handleChatOptions,
      handleNewChat,
      handleEditChat,
      handleBlockChat,
      handleEraseChat,
      handleDeleteChat,
      handleNewMessage,
      handleEditMessageEvent,
      handleDeleteMessage,
    }}>
      {children}
    </ChatContext.Provider>
  )

}

export { ChatContext, ChatContextProvider };
