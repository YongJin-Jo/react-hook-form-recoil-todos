import { selector } from 'recoil';
import { categoryAtom, todoAtom } from './atoms';

//todoAtom의 아웃풋을 변형 시키는 셀렉터
export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(todoAtom);
    const category = get(categoryAtom);
    return toDos.filter(toDo => toDo.category === category);
  },
});
