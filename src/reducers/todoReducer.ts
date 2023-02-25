import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "@/constants";

interface actionType {
  type: string;
  payload: {
    uuid: string;
    content: string;
  };
}
const list = localStorage.todoList;
const initialState = list ? JSON.parse(list) : [];

const todoReducer = (state = initialState, action: actionType) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case DELETE_TODO:
      return state.filter(
        (v: actionType["payload"]) => v.uuid !== payload.uuid
      );
    case UPDATE_TODO:
      return [
        ...state.filter((v: actionType["payload"]) => v.uuid !== payload.uuid),
        payload,
      ];
    default:
      return initialState;
  }
};

export default todoReducer;
