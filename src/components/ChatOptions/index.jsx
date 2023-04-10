import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepSharpIcon from '@mui/icons-material/DeleteSweepSharp';
import BlockSharpIcon from '@mui/icons-material/BlockSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import './ChatOptions.css';

const ChatOptions = ({ setOptions }) => {

  const { openModal, setOpenModal, handleChatOptions } = useContext(ChatContext);

  const handleOpenEditModal = () => {

    setOpenModal({ ...openModal, edit: !openModal.edit });
    setOptions(false);
  }
  const handleOpenEraseModal = () => {
    setOpenModal({ ...openModal, erase: !openModal.erase })
    setOptions(false);
  };
  const handleOpenBlockModal = () => {
    setOpenModal({ ...openModal, block: !openModal.block })
    setOptions(false);
  };
  const handleOpenDeleteModal = () => {
    setOpenModal({ ...openModal, delete: !openModal.delete })
    setOptions(false);
  };

  return(
    <aside className="ChatOptions">
      <div className="ChatOptions__container">
        <ul className="ChatOptions__list">
          <li onClick={handleOpenEditModal}>
            <EditIcon /> Edit Chat
          </li>
          <li onClick={handleOpenBlockModal}>
            <BlockSharpIcon /> Block chat
          </li>
          <li onClick={handleOpenEraseModal}>
            <DeleteSweepSharpIcon />Erase chat
          </li>
          <li onClick={handleOpenDeleteModal}>
            <DeleteSharpIcon /> Delete chat
          </li>
        </ul>
      </div>
    </aside>
  )
};

export default ChatOptions;
