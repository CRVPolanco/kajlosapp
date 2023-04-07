import { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import './NewChat.css';

const NewChat = () => {

  const { handleNewChatOpen } = useContext(ChatContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeDescription = (e) => setDescription(e.target.value);

  return(
    <section className='NewChat'>
      <div className="NewChat__container">
        <h3 className='NewChat__title'>Add new</h3>
        <div className="NewChat__inputs">
          <input type="text" className="NewChat__input--standard"
            value={name}
            placeholder="Chat name"
            onChange={handleChangeName}
          />
          <input type="text" className="NewChat__input--standard"
            value={description}
            placeholder="Chat description"
            onChange={handleChangeDescription}
          />
        </div>
        <div className="NewChat__buttons">
          <button className="NewChat__buttons-standard"
            onClick={handleNewChatOpen}
          >
            Add
          </button>
          <button
            className="NewChat__buttons-standard"
            onClick={handleNewChatOpen}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  )
};

export default NewChat;
