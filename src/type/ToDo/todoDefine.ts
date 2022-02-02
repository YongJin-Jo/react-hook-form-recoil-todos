interface IToDo {
  text: string;
  category: 'DOING' | 'TO_DO' | 'DONE';
  id: number;
}
export type { IToDo };
