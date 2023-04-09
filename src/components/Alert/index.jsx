import React from 'react';
import './Alert.css';

const Alert = ({ title, onclickEvent, closeEvent }) => {

  const handleOnClickEvent = () => {
    onclickEvent();
    closeEvent();
  }

  return(
    <section className='Alert'>
      <div className="Alert__container">
        <h3 className="Alert__title">{title}</h3>
        <div className="Alert__buttons">
          <button className="Alert__standard" onClick={onclickEvent}>Confirm</button>
          <button className="Alert__standard" onClick={closeEvent}>Cancel</button>
        </div>
      </div>
    </section>
  )
};

export default Alert;
