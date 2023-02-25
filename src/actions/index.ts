import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "@/constants";

export interface todoItem {
  uuid: string;
  content: string;
}

export const addTodo = (payload: todoItem) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload: todoItem) => {
  return { type: DELETE_TODO, payload };
};

export const updateTodo = (payload: todoItem) => {
  return { type: UPDATE_TODO, payload };
};
