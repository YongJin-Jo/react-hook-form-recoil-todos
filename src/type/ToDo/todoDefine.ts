export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
  'ALL' = 'ALL',
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
