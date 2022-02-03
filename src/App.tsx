import React from 'react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { GlobalStyle } from './asset/css/globalStyle';
import { TodoList } from './components/page/TodoList';
import { todoAtom } from './store/atoms';
import { IToDo } from './type/ToDo/todoDefine';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
