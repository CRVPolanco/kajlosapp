import { genId } from '../utils/genId';
import { getDate, getSimpleDate } from '../utils/getDate';
import { ADD_CHAT, DELETE_CHAT, DELETE_MESSAGE, SEND_MESSAGE, UPDATE_CHAT } from "./actions";

export const chatsInitialState = {
  chats: [],
};

export const chatsReducer = (state = chatsInitialState, action) => {

  switch(action.type){

    case ADD_CHAT:

      const id = state.chats.length ? state.chats.length + 1 : 1;

      const addNewChat = {
        name: action.payload.name,
        description: action.payload.description,
        lastMessageSend: action.payload.description,
        lastMessageHour: getSimpleDate(),
        chatId: id,
        notReadQuantity: 0,
        lastSend: getDate(),
        messagesQuantity: 0,
        messages: [],
      }

      return {
        ...state,
        chats: [
          ...state.chats,
          { ...addNewChat },
        ],
      };

    case UPDATE_CHAT:

      const findToUpdate = state.chats.findIndex(c => c.chatId === action.payload.chatId);

      const chatUpdated = {
        ...state.chats[findChat],
        name: action.payload.name,
        description: action.payload.description,
      }

      const newData = state.chats.splice(findChat, findChat, chatUpdated);

      return {
        ...state,
        chats: [
          ...newData,
        ],
      };

    case DELETE_CHAT :

      const findToDelete = state.chats.findIndex(c => c.chatId === action.payload.chatId);

      const newChats = state.chats.slice(findToDelete, 1);

      return {
        ...state,
        chats: [
          ...newChats,
        ],
      };

    case SEND_MESSAGE:

      const findChatToAppend = state.chats.findIndex(c => c.chatId === action.payload.chatId);
      const findAllMessages = state.chats[findChatToAppend].messages;
      const messageLength = findAllMessages.length + 1;

      const newCopy = [
        ...findAllMessages,
        {
          text: action.payload.message,
          datetime: getSimpleDate(),
          id: messageLength,
          isMine: action.payload.isMine ? true : false,
          isRead: false,
          isTaken: false,
          isDelivered: true,
        },
      ];
      const newChatToCopy = {
        ...state.chats[findChatToAppend],
        notReadQuantity: 0,
        messagesQuantity: 0 ? 1 : state.chats[findChatToAppend].messagesQuantity + 1,
        lastMessageSend: action.payload.message,
        lastMessageHour: getSimpleDate(),
        messages: [
          ...newCopy,
        ],
      };
      const changed = state.chats.filter((c) => c.chatId !== action.payload.chatId);
      const newToPaste = [newChatToCopy, ...changed];

      return {
        ...state,
        chats: [
          ...newToPaste
        ],
      };

    case DELETE_MESSAGE:

      const findChatToDeleteMessage = state.chats.findIndex((c) => c.chatId === action.payload.chatId);

      const messages = state.chats[findChatToDeleteMessage].messages;

      const message = messages.findIndex(m => m.id === action.payload.messageId);

      const newMessages = messages.slice(message, 1);

      const newCopyToDelete = {
        ...state.chats[findChatToDeleteMessage],
        lastMessageSend: 'Message deleted',
        messages: [
          ...newMessages,
        ],
      };

      const finalCopy = state.chats.splice(findChatToDeleteMessage, 1, newCopyToDelete);

      return {
        ...state,
        chats: [
          ...finalCopy,
        ],
      };

    default:
      return { ...state };
  };

}
