import { getSimpleDate } from "./getDate";

export const chatReducerModel = (id, data) => ({
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

export const updateChatReducerModel = (chat, data) => ({
  ...chat,
  ...data,
});

export const sendMessageReducerModel = (chat, data, id) => ({
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

export const deleteMessageReducerModel = (chat, id) => ({
  ...chat,
  messages: [
    ...chat.messages.filter((m) => m.id !== id),
  ]
})
