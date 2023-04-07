import { useState, createContext } from 'react';

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {

  const [chatOpened, setChatOpened] = useState(false);
  const [newChatOpened, setNewChatOpened] = useState(false);

  const handleChatOpen = () => setChatOpened(!chatOpened);
  const handleNewChatOpen = () => setNewChatOpened(!newChatOpened);

  return (
    <ChatContext.Provider value={{
      chatOpened,
      newChatOpened,
      handleChatOpen,
      handleNewChatOpen,
    }}>
      {children}
    </ChatContext.Provider>
  )

}

export { ChatContext, ChatContextProvider };
