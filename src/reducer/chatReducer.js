import {
  ADD_CHAT,
  DELETE_CHAT,
  ERASE_CHAT,
  BLOCK_CHAT,
  DELETE_MESSAGE,
  SEND_MESSAGE,
  UPDATE_CHAT,
} from "./actions";
import {
  chatModel,
  eraseChatModel,
  blockChatModel,
  updateChatModel,
  sendMessageModel,
  deleteMessageModel,
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

      const findToUpdate = state.chats.findIndex(c => c.chatId === action.payload.chatId);
      const chatUpdated = updateChatModel(state.chats[findToUpdate], action.payload)

      const updatedChatArray = [...state.chats];
      updatedChatArray.splice(findToUpdate, 1, chatUpdated);

      return {
        ...state,
        chats: [
          ...updatedChatArray,
        ],
      };

    case DELETE_CHAT :

      const newChats = state.chats.filter((c) => c.chatId !== action.payload.chatId);

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

    case DELETE_MESSAGE:

      const findToDeleteMessage = state.chats.findIndex((c) => c.chatId === action.payload.chatId);
      const messageToDelete = findToDeleteMessage.findIndex((m) => m.id === action.payload.messageId);

      const newCopyToDelete = deleteMessageModel(
        state.chats[findToDeleteMessage],
        state.chats[findToDeleteMessage].messages[messageToDelete],
      );

      const copyArray = [...state.chats];
      copyArray.splice(findToDeleteMessage, 1, newCopyToDelete);

      return {
        ...state,
        chats: [
          ...copyArray,
        ],
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
