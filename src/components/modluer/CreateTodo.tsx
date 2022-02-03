import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryAtom, todoAtom } from '../../store/atoms';
import { Categories } from '../../type/ToDo/todoDefine';

interface IForm {
  toDo: string;
}

export const CreateTodo = () => {
  const setToDos = useSetRecoilState(todoAtom);
  const category = useRecoilValue(categoryAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    if (category === 'ALL') {
      setToDos(oldToDos => [
        { text: toDo, id: Date.now(), category: Categories.TO_DO },
        ...oldToDos,
      ]);
      return setValue('toDo', '');
    }
    setToDos(oldToDos => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', {
          required: 'Please write a To Do',
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};
