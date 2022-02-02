import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { todoAtom } from '../../store/atoms';

interface IForm {
  toDo: string;
}

export const CreateTodo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(todoAtom);
  const onValue = ({ toDo }: IForm) => {
    setToDos(oldToDos => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };
  return (
    <form onSubmit={handleSubmit(onValue)}>
      <input type="text" {...register('toDo', { required: 'Write a to do' })} />
      <button>Add</button>
    </form>
  );
};
