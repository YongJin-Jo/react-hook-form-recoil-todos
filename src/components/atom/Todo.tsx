import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoAtom } from '../../store/atoms';
import { IToDo } from '../../type/ToDo/todoDefine';
import { Categories } from '../../type/ToDo/todoDefine';
export const Todo = ({ text, id, category }: IToDo) => {
  const setTodos = useSetRecoilState(todoAtom);
  const OnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos(oldTotos => {
      const targetIndex = oldTotos.findIndex(item => item.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...oldTotos.slice(0, targetIndex),
        newTodo,
        ...oldTotos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li key={id}>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={OnClick} name="DOING">
          DOING
        </button>
      )}
      {category !== Categories.DOING && (
        <button onClick={OnClick} name="DONE">
          DONE
        </button>
      )}
      {category !== Categories.DONE && (
        <button onClick={OnClick} name="TO_DO">
          TO_DO
        </button>
      )}
    </li>
  );
};
