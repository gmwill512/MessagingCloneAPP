import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chat/chat.js';
import Join from './components/Join/join.js';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
    </Router>
  );
}

export default App;
