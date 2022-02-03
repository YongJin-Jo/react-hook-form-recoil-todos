import { atom } from 'recoil';
import { Categories, IToDo } from '../type/ToDo/todoDefine';
import { localStorageEffect } from './localStorage';

//todo의  상태관리
export const todoAtom = atom<IToDo[]>({
  key: 'todo',
  default: [],
  effects_UNSTABLE: [localStorageEffect('todo')],
});

export const categoryAtom = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});
