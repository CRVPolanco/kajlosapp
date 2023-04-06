import { useState, createContext } from 'react';

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {

  const [chatOpened, setChatOpened] = useState(false);

  const handleChatOpen = () => {
    setChatOpened(!chatOpened);
    console.log("Cliked!")
  }

  return (
    <ChatContext.Provider value={{
      chatOpened,
      handleChatOpen,
    }}>
      {children}
    </ChatContext.Provider>
  )

}

export { ChatContext, ChatContextProvider };
