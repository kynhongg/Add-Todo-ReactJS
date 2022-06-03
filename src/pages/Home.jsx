import React, { useRef, useState } from "react";
import AddTodo from "../components/add-todo/AddTodo";
import "./home.scss";
import Todo from "../components/todo/Todo";

const arrTodo = [
  {
    title: "Get Married",
    completed: false,
  },

  {
    title: "Buy House",
    completed: true,
  },

  {
    title: "Birth",
    completed: false,
  },
];

const Home = () => {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });
  const [listTodo, setListTodo] = useState([]);
  const elementInput = useRef(null);

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      const arr = [...listTodo];
      arr.push(todo);
      setListTodo(arr);
      setTodo({
        title: "",
        completed: false,
      });
      elementInput.current.focus();
    }
  };

  const handleDeleteTodo = (idx) => {
    const arrUpdate = [...listTodo];
    arrUpdate.splice(idx, 1);
    setListTodo(arrUpdate);
  };
  const handleChangeStatusTodo = (id) => {
    const arrUpdate = [...listTodo];
    listTodo.length > 0 &&
      listTodo.map((item, idx) => {
        if (idx === id) {
          return (item.completed = !item.completed);
        }
        return item;
      });
    setListTodo(arrUpdate);
  };
  console.log(listTodo);

  return (
    <div className="flex items-center justify-center h-full py-10">
      <div className="modal-todo h-full">
        <header className="modal-todo_heading">TODO LIST</header>
        <AddTodo
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
          elementInput={elementInput}
        />
        <div className="modal-todo_list">
          {listTodo.length > 0 &&
            listTodo.map((item, index) => (
              <Todo
                key={index}
                id={index}
                todoItem={item}
                handleDeleteTodo={handleDeleteTodo}
                handleChangeStatusTodo={handleChangeStatusTodo}
              />
            ))}
        </div>
        <div className="modal-todo_btn">
          <button className="modal-todo_btn-filter"> Checked</button>
          <button className="modal-todo_btn-filter">UnChecked</button>
          <button className="modal-todo_btn-filter">Delete All Checked</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
