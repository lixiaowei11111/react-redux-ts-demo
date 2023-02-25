import React from "react";

import { CloseOutlined } from "@ant-design/icons";

import type { todoItem } from "@/actions/index";
import styles from "./index.module.less";
interface TodoItemPropsType {
  info: todoItem;
  onDelete: (info: todoItem) => void;
}

const Item: React.FC<TodoItemPropsType> = (props) => {
  const { onDelete, info } = props;
  const handleDelete = () => {
    onDelete(info);
  };
  return (
    <div className={styles.container}>
      <span className={styles.content}>{info.content}</span>
      <CloseOutlined style={{ color: "#bfa" }} onClick={handleDelete} />
    </div>
  );
};

export default Item;
