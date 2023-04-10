import React from 'react';
import { chatModel, sendMessageModel, eraseChatModel, blockChatModel, updateChatModel } from '../utils/chatModel';

const useChatToLS = ( itemName ) => {

  const isSomething = localStorage.getItem(itemName);

  if(!isSomething) localStorage.setItem(itemName, JSON.stringify([]));

  const getChats = () => [...JSON.parse(localStorage.getItem(itemName))];

  const saveChats = (id, chat) => {

    const chatParsed = chatModel(id, chat);
    const allChats = [...JSON.parse(localStorage.getItem(itemName))];

    const newChatsToParse = [...allChats, chatParsed];
    localStorage.setItem(itemName, JSON.stringify(newChatsToParse));
  }

  const updateChat = (chatId, changes) => {

    const { name, description } = changes;

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];

    const findChat = allChats.findIndex((c) => c.chatId === chatId);
    const chat = { ...allChats[findChat], name: name, description: description };

    allChats.splice(findChat, 1, chat);

    localStorage.setItem(itemName, JSON.stringify([...allChats]));
  };

  const eraseChat = (chatId) => {

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];
    if(!allChats.length) return;

    const findChat = allChats.findIndex((c) => c.chatId === chatId);

    const erasedChat = eraseChatModel(allChats[findChat]);

    allChats.splice(findChat, 1, erasedChat);

    localStorage.setItem(itemName, JSON.stringify([...allChats]));

  }

  const blockChat = (chatId) => {
    const allChats = [...JSON.parse(localStorage.getItem(itemName))];
    if(!allChats.length) return;

    const findChat = allChats.findIndex((c) => c.chatId === chatId);

    const blockedChat = blockChatModel(allChats[findChat]);

    allChats.splice(findChat, 1, blockedChat);

    localStorage.setItem(itemName, JSON.stringify([...allChats]));

  }

  const deleteChat = (chatId) => {

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];

    if(!allChats.length) return;

    const filteredChats = allChats.filter((c) => c.chatId !== chatId);
    localStorage.setItem(itemName, JSON.stringify(filteredChats));

  };

  const saveMessages = (chatId, message) => {

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];
    const findChat = allChats.findIndex(c => c.chatId === chatId);

    const parsedChat = sendMessageModel(allChats[findChat], message);

    const filteredArray = allChats.filter((c) => c.chatId !== chatId);
    const modifiedArray = [parsedChat, ...filteredArray];

    localStorage.setItem(itemName, JSON.stringify(modifiedArray));
  }

  const updateMessages = (chatId, messageId, changes) => {

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];
    const chatIndex = allChats.findIndex(c => c.chatId === chatId);

    const chatToUpdate = allChats[chatIndex];

    const messageIndex = chatToUpdate.messages.findIndex(m => m.id === messageId);
    const messageToUpdate = chatToUpdate.messages[messageIndex];

    const newMessage = { ...messageToUpdate, text: changes };
    const allMessages = [...chatToUpdate.messages];

    allMessages.splice(messageIndex, 1, newMessage);

    const newChatToUpdate = {
      ...chatToUpdate,
      lastMessageSend: allMessages[allMessages.length - 1].text,
      messages: [ ...allMessages ],
    };

    allChats.splice(chatIndex, 1, newChatToUpdate);

    localStorage.setItem(itemName, JSON.stringify([...allChats]));
  }

  const deleteMessage = (chatId, messageId) => {

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];
    const chatIndex = allChats.findIndex(c => c.chatId === chatId);

    const chatToDelete = allChats[chatIndex];

    const messages = chatToDelete.messages.filter(m => m.id !== messageId);
    const newObject = { ...chatToDelete, messages: [ ...messages ] };

    allChats.splice(chatIndex, 1, newObject);

    localStorage.setItem(itemName, JSON.stringify([...allChats]));
  }


  return { getChats, saveChats, updateChat, eraseChat, blockChat, deleteChat, saveMessages, updateMessages, deleteMessage };
}

export default useChatToLS;
