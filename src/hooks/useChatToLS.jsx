import React from 'react';
import { chatModel, sendMessageModel, eraseChatModel, blockChatModel } from '../utils/chatModel';

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

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];

    if(!allChats.length) return;

    const findChat = allChats.findIndex((c) => c.chatId === chatId);
    const filteredChats = findChat.filter((c) => c.chatId !== chatId);

    const newChatArray = [...filteredChats, { ...allChats[findChat], ...changes }];
    const sortedArray = newChatArray.sort((a, b) => a.chatId - b.chatId);

    localStorage.setItem(itemName, JSON.stringify(sortedArray));
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

  const saveMessages = (chat, message) => {

    const parsedChat = sendMessageModel(chat, message);
    const allChats = [...JSON.parse(localStorage.getItem(itemName))];

    if(!allChats.length) return;

    const filteredArray = allChats.filter((c) => c.chatId !== chat.chatId);
    const modifiedArray = [parsedChat, ...filteredArray];

    localStorage.setItem(itemName, JSON.stringify(modifiedArray));
  }

  const updateMessages = () => {

  }


  return { getChats, saveChats, updateChat, eraseChat, blockChat, deleteChat, saveMessages };
}

export default useChatToLS;
