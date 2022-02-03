import { atom } from 'recoil';
import { Categories, IToDo } from '../type/ToDo/todoDefine';

//todo의  상태관리
export const todoAtom = atom<IToDo[]>({
  key: 'todo',
  default: [],
});

export const categoryAtom = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});
