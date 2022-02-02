import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoAtom } from '../../store/atoms';
import { Todo } from '../atom/Todo';
import { CreateTodo } from '../modluer/CreateTodo';
export const TodoList = () => {
  const toDos = useRecoilValue(todoAtom);

  return (
    <>
      <h1>ToDoList</h1>
      <CreateTodo />
      <ul>
        {toDos.map(todo => (
          <Todo {...todo} />
        ))}
      </ul>
    </>
  );
};
