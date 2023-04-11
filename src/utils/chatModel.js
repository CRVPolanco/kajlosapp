import { getDate, getSimpleDate } from "./getDate";

export const chatModel = (id, data) => ({
  name: data.name,
  description: data.description,
  lastMessageSend: data.description,
  lastMessageHour: getSimpleDate(),
  isBlocked: false,
  chatId: id,
  notReadQuantity: 0,
  lastSend: getDate(),
  messagesQuantity: 0,
  messages: [],
});

export const updateChatModel = (chat, data) => ({
  ...chat,
  ...data,
});

export const eraseChatModel = (chat) => ({
  ...chat,
  lastMessageSend: 'Chat has been cleared',
  messages: [],
});

export const blockChatModel = (chat) => ({
  ...chat,
  isBlocked: !chat.isBlocked,
});

export const sendMessageModel = (chat, message) => ({
  ...chat,
  lastMessageSend: message.message,
  messages: [
    ...chat.messages,
    {
      id: chat.messages.length ? chat.messages.length + 1 : 1,
      text: message.message,
      datetime: getSimpleDate(),
      isMine: (chat.messages.length %2 === 0) ? true : false,
      canEdit: message.isMine,
      isReply: false,
      replyTo: {},
      replies: [],
    }
  ],
});

export const updateMessageModel = (chat, messageId, changes) => {

  const message = chat.messages[chat.messages.findIndex(m => m.id === messageId)];
  const newMessage = { ...message, text: changes };
  const newMessagesArray = [ ...chat.messages ];
  newMessagesArray.splice(chat.messages.findIndex(m => m.id === messageId), 1, newMessage);

  return {
    ...chat,
    messages: [
      ...newMessagesArray,
    ]
  }
}

export const replyMessageModel = (chat, messageId, data) => ({
  id: chat.messages.length ? chat.messages.length + 1 : 1,
  text: data.message,
  datetime: getSimpleDate(),
  isMine: data.isMine,
  canEdit: data.isMine,
  isReply: true,
  replyTo: {
    ...chat.messages.find(m => m.messageId === messageId),
  },
  replies: [],
})
