import React from 'react';
import { chatModel } from '../utils/chatModel';

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
  }

  const deleteChat = (chatId) => {

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];

    if(!allChats.length) return;

    const findChat = allChats.findIndex((c) => c.chatId === chatId);

    const filteredChats = findChat.filter((c) => c.chatId !== chatId);
    localStorage.setItem(itemName, JSON.stringify(filteredChats));

  };

  const saveMessages = (chatId, message) => {

    const allChats = [...JSON.parse(localStorage.getItem(itemName))];

    if(!allChats.length) return;

    const findChat = allChats.findIndex((c) => c.chatId === chatId);
    const getAllMessages = allChats[findChat].messages;

    const modifiedChat = { ...allChats[findChat], messages: [...getAllMessages, message]};
    allChats[findChat] = { ...modifiedChat };

    const modifiedArray = [...allChats];
    localStorage.setItem(itemName, JSON.stringify(modifiedArray));
  }

  const updateMessages = () => {

  }


  return { getChats, saveChats, updateChat, deleteChat, saveMessages };
}

export default useChatToLS;
