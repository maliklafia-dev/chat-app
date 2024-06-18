import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  //On déclare 2 states, donc l'équivalent des variables qui me permettront de conserver<
  //le name ainsi que le message.
  const [name, setName] = useState('anonymous744');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value); //Ici on prend la valeur de l'input qui vient d'être modifiée et on utilise setName pour l'assigner à name
  }
  
  const handleMessageChange = (e) => {
    setMessage(e.target.value); //Ici on prend la valeur de l'input qui vient d'être modifiée et on utilise setName pour l'assigner à name
  }

  return (
    <>
      <h1 className='title'>iChat</h1>
      <div className="mainChat">
          <div className="name">
            <span className='nameForm'>
              <FontAwesomeIcon icon={faUser}/>
              <input 
              type="text"
              className='nameInput'
              onChange={handleNameChange}
              value={name}
              maxLength="20"/>
            </span>
          </div>
          <div>
            <ul className="conversation">
              <li className="messageLeft">
                <p>Bonjour Princesse</p>
                <span>author -1 juin 2024</span>
              </li>
              <li className="messageRight">
                <p>ça va ?</p>
                <span>author -1 juin 2024</span>
              </li>
              <li className='messageFeedback'>
                <p className='feedback'>Toto is typing...</p>
              </li>
            </ul>
          </div>
          <form className='messageForm'>
              <input 
                type="text"
                name='message'
                className='messageInput'
                onChange={handleMessageChange}
                value={message}
              />
              <div className="vDivider"></div>
              <button type='submit'>Send <FontAwesomeIcon icon={faPaperPlane}/></button>
          </form>

      </div>
    </>
  )
}

export default App;