import React from 'react';
import { GlobalStyle } from './asset/css/globalStyle';
import { TodoList } from './components/page/TodoList';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
