import { atom } from 'recoil';
import { IToDo } from '../type/ToDo/todoDefine';
export const todoAtom = atom<IToDo[]>({
  key: 'todo',
  default: [],
});
