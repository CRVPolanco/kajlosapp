import {
  ADD_CHAT,
  DELETE_CHAT,
  DELETE_MESSAGE,
  SEND_MESSAGE,
  UPDATE_CHAT
} from "./actions";
import {
  chatModel,
  updateChatModel,
  sendMessageModel,
  deleteMessageModel
} from '../utils/chatModel';
import { genId } from '../utils/genId';

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
      const chatId = findAllMessages.length + 1;

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

    default:
      return { ...state };
  };

}
