import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoList />
          <TodoInput />
        </div>
      </div>
    </div>
  );
}

export default App;
