import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '40adb67a-962a-4679-be0c-f886179688f6';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      // onNewMessage={() =>
      //   new Audio(
      //     'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
      //   ).play()
      // }
    />
  );
};

export default App;
