import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoAtom } from '../../store/atoms';
import { IToDo } from '../../type/ToDo/todoDefine';

export const Todo = ({ text, id, category }: IToDo) => {
  const setTodos = useSetRecoilState(todoAtom);
  const OnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  };
  return (
    <li key={id}>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button onClick={OnClick} name="DOING">
          DOING
        </button>
      )}
      {category !== 'DONE' && (
        <button onClick={OnClick} name="DONE">
          DONE
        </button>
      )}
      {category !== 'TO_DO' && (
        <button onClick={OnClick} name="TO_DO">
          TO_DO
        </button>
      )}
    </li>
  );
};
