import React, { FormEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryAtom } from '../../store/atoms';
import { toDoSelector } from '../../store/selector';
import { Categories } from '../../type/ToDo/todoDefine';
import { Todo } from '../atom/Todo';
import { CreateTodo } from '../modluer/CreateTodo';
export const TodoList = () => {
  const [category, setCategory] = useRecoilState(categoryAtom);
  const ToDos = useRecoilValue(toDoSelector);
  const onInput = (event: FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <>
      <h1>ToDoList</h1>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TO_DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateTodo />

      <ul>
        {ToDos.map(todo => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};
