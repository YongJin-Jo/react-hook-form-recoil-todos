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
    setTodos(oldToDos => {
      const targetIndex = oldToDos.findIndex(item => item.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onRemove = () => {
    setTodos(oldToDos => {
      return oldToDos.filter(item => item.id != id);
    });
  };
  return (
    <li key={id}>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={OnClick} name="TO_DO">
          TO_DO
        </button>
      )}
      {category !== Categories.DOING && (
        <button onClick={OnClick} name="DOING">
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button onClick={OnClick} name="DONE">
          DONE
        </button>
      )}
      <button onClick={onRemove}>romve</button>
    </li>
  );
};
