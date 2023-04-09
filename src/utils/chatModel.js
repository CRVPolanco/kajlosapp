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
      text: message.message,
      datetime: getSimpleDate(),
      isMine: message.isMine,
      id: chat.messages.length ? chat.messages.length + 1 : 1,
      isRead: false,
      isTaken: false,
      isDelivered: true,
    }
  ],
})

export const deleteMessageModel = (chat, id) => ({
  ...chat,
  lastMessageSend: 'Message deleted',
  messages: [
    ...chat.messages.filter((m) => m.id !== id),
  ]
})
