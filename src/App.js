import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Header,
  Body,
  Footer,
} from './components'
import Chatbot from 'react-chatbot-kit'
import {
  ActionProvider, 
  MessageParser, 
  config
} from './components/chatBot';

function App() {
  return (
    <>
    <Header/>
    <Body/>
    <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
    <Footer/>
    </>
  );
}

export default App;
