import {
  ADD_CHAT,
  UPDATE_CHAT,
  DELETE_CHAT,
  ERASE_CHAT,
  BLOCK_CHAT,
  DELETE_MESSAGE,
  SEND_MESSAGE,
  UPDATE_MESSAGE,
} from "./actions";
import {
  chatModel,
  eraseChatModel,
  blockChatModel,
  updateChatModel,
  sendMessageModel,
} from '../utils/chatModel';

export const chatsInitialState = {
  chats: localStorage.getItem('chats') ? JSON.parse(localStorage.getItem('chats')) : [],
};

export const chatsReducer = (state = chatsInitialState, action) => {

  switch(action.type){

    case ADD_CHAT:

      const addNewChat = chatModel(action.payload.id, action.payload);

      return {
        ...state,
        chats: [
          ...state.chats,
          { ...addNewChat },
        ],
      };

    case UPDATE_CHAT:

      const getAllChats = [...state.chats];
      const findToUpdate = getAllChats.findIndex(c => c.chatId === action.payload.chatId);

      const chat = {
        ...getAllChats[findToUpdate],
        name: action.payload.name,
        description: action.payload.description,
      }

      getAllChats.splice(findToUpdate, 1, chat);

      console.log(getAllChats);

      return {
        ...state,
        chats: [
          ...getAllChats,
        ],
      };

    case DELETE_CHAT :

      const allChatsToDelete = [...state.chats];
      const newChats = allChatsToDelete.filter((c) => c.chatId !== action.payload.chatId);

      return {
        ...state,
        chats: [
          ...newChats,
        ],
      };

    case SEND_MESSAGE:

      const findChatToAppend = state.chats.findIndex(c => c.chatId === action.payload.chatId);
      const findChat = state.chats[findChatToAppend];
      const chatId = state.chats.length + 1;

      const newChatMessageAdded = sendMessageModel(findChat, action.payload, chatId);

      const changed = state.chats.filter((c) => c.chatId !== action.payload.chatId);
      const newToPaste = [newChatMessageAdded, ...changed];

      return {
        ...state,
        chats: [
          ...newToPaste
        ],
      };

    case UPDATE_MESSAGE:

    const allChats = [...state.chats];
    const chatIndex = allChats.findIndex(c => c.chatId === action.payload.chatId);

    const chatToUpdate = allChats[chatIndex];

    const messageIndex = chatToUpdate.messages.findIndex(m => m.id === action.payload.messageId);
    const messageToUpdate = chatToUpdate.messages[messageIndex];

    const newMessage = { ...messageToUpdate, text: action.payload.changes };
    const allMessages = [...chatToUpdate.messages];

    allMessages.splice(messageIndex, 1, newMessage);

    const newChatToUpdate = {
      ...chatToUpdate,
      lastMessageSend: allMessages[allMessages.length - 1].text,
      messages: [ ...allMessages ],
    };

    allChats.splice(chatIndex, 1, newChatToUpdate);

      return {
        ...state,
        chats: [
          ...allChats,
        ]
      }

    case DELETE_MESSAGE:

      const findCht = state.chats.findIndex(c => c.chatId === action.payload.chatId);

      const allChatsToChange = [...state.chats];
      const chatModified = state.chats[findCht];

      const findMessage = chatModified.messages.findIndex(m => m.id === action.payload.messageId);

      const changedMessages = chatModified.messages.filter(m => m.id !== action.payload.messageId);

      const deletedMessage = {
        ...chatModified,
        lastMessageSend: changedMessages[changedMessages.length - 1]?.text,
        messages: [ ...changedMessages ]
      };
      allChatsToChange.splice(findCht, 1, deletedMessage);

      return {
        ...state,
        chats: [
          ...allChatsToChange,
        ]
      };

    case ERASE_CHAT:

      const findToErase = state.chats.findIndex(c => c.chatId === action.payload.chatId);

      const erase = eraseChatModel(state.chats[findToErase]);

      const erasedChat = [...state.chats];
      erasedChat.splice(findToErase, 1, erase);

      return {
        ...state,
        chats: [
          ...erasedChat,
        ]
      };

    case BLOCK_CHAT:

      const findToBlock = state.chats.findIndex(c => c.chatId === action.payload.chatId);

      const block = blockChatModel(state.chats[findToBlock]);

      const blockedChat = [...state.chats];
      blockedChat.splice(findToBlock, 1, block);

      return {
        ...state,
        chats: [
          ...blockedChat,
        ],
      };

    default:
      return { ...state };
  };

}
