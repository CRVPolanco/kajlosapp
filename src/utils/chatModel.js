import { getDate, getSimpleDate } from "./getDate";

export const chatModel = (id, data) => ({
  name: data.name,
  description: data.description,
  lastMessageSend: data.description,
  lastMessageHour: getSimpleDate(),
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

export const sendMessageModel = (chat, data, id) => ({
  ...chat,
  messages: [
    ...chat.messages,
    {
      text: data.message,
      datetime: getSimpleDate(),
      isMine: data.isMine,
      id: id,
      isRead: false,
      isTaken: false,
      isDelivered: true,
    }
  ],
})

export const deleteMessageModel = (chat, id) => ({
  ...chat,
  messages: [
    ...chat.messages.filter((m) => m.id !== id),
  ]
})
