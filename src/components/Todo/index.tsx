import React, { ChangeEvent, useState } from "react";
import { bindActionCreators } from "redux";
import type { Action, Dispatch } from "redux";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import type { todoItem } from "@/actions/index";

import * as actions from "@/actions/index";
import Item from "../TodoItem";
const Todo: React.FC<any> = (props) => {
  const { addTodo, deleteTodo, updateTodo, todoReducer: list } = props;

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleAddTodo = () => {
    if (!inputValue) return false;
    console.log(props, "props");
    addTodo({ uuid: nanoid(8), content: inputValue });
    localStorage.todoList = JSON.stringify(list);
    setInputValue("");
  };

  const handleDeleteTodo = (v: todoItem) => {
    deleteTodo(v);
    localStorage.todoList = JSON.stringify(list);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event)
          }
        />
        <button style={{ margin: "0 20px" }} onClick={handleAddTodo}>
          添加
        </button>
        <button style={{ margin: "0 20px" }} onClick={handleAddTodo}>
          延时添加
        </button>
      </div>
      <div>
        {list.map((v: todoItem) => {
          return (
            <Item
              key={v.uuid}
              info={v}
              onDelete={(v: todoItem) => handleDeleteTodo(v)}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state: {}) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<unknown>>) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
