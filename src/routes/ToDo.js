import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";

// components
import List from "../components/List";
import NewToDo from "../components/NewToDo";

import "./ToDo.css";

// test data
import user from "../test_data_user.json";

/*****************************************************************
                            리액트 훅 명세표

(1) useState
 - 일정들을 "todos"로 정의(class 컴포넌트의 this.state에 대응됨)
 - todos는 [ {todo1}, {todo2}, {todo3}, ... ] 의 모습임
 - 즉, todos에는 이미 각 todo들의
   { listId, content, startDate, important, complete }
   이 담겨있음

(2) useCallback
 - 일정입력 이벤트에 쓰일 "onChange 메소드"를 정의하여 "재사용"할 수 있게 함
 - 이때 "재사용"이란 의미는 render 여부와 관계없이 컴포넌트에 유지함을 의미
 - 일반적으로 useCallback로 감싼 메소드는 컴포넌트의 render 대상에서 제외되므로
   이는 컴포넌트의 성능 향상에 도움됨

(3) useRef
 - "listId"와 같이 화면에 보여줄 필요도 없고 render로 관리할 필요도 없는 경우,
   즉, 다른 컴포넌트에서 참조(reference) 목적으로만 필요한 경우 사용
******************************************************************/

const ToDo = ({ email }) => {
  // 0. useState를 통한 일정들(todos) 관리
  let todo = {};
  for (let el of user) {
    if (el.email === email) {
      todo = el.list; // 초기상태로 보여줄 일정(테스트 JSON 파일의 첫번째 유저의 일정목록)
    }
  }
  const [todos, setTodos] = useState(todo); // todo state 관리
  const [isLoading, setLoading] = useState(false); // loading state 관리
  console.log(todos);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // loading 되었다고 알림
      try {
        const response = await axios.post("http://localhost:8000/main");
        setTodos(response.data.list);
        setLoading(false); // 새로운 state로 render 될 때까지 loading 대기상태로 회귀
        console.log("읽기 완료");
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  // 2. listId를 메소드와 자식 컴포넌트들에 고유변수로 사용할 것임을 선언
  const nextListId = useRef(7);

  // 3. 새 일정 입력 메소드
  const onInsert = useCallback(
    (newTodo) => {
      const todo = {
        listId: nextListId.current,
        content: newTodo.content,
        startDate: newTodo.startDate,
        complete: false,
        important: false,
      };

      // 서버에 POST
      axios.post("http://localhost:8000/mypage", {
        listId: todo.listId,
        content: todo.content,
        startDate: todo.startDate,
        complete: todo.complete,
        important: todo.important,
      });

      // 컴포넌트 내 일정 목록 최신화(re-rendering)
      setTodos((todos) => todos.concat(todo));
      nextListId.current += 1;
    },
    [todos]
  );

  // 4. 삭제 클릭 메소드
  const onRemove = useCallback(
    (listId) => {
      setTodos((todos) => todos.filter((todo) => todo.listId !== listId));
    },
    [todos]
  );

  // 5. 중요 클릭 메소드
  const onToggleOfImportant = useCallback(
    (listId) => {
      // 새로운 일정 객체를 만든 후 state에 구현(원본불변)
      setTodos((todos) =>
        todos.map((todo) =>
          todo.listId === listId
            ? { ...todo, important: !todo.important }
            : todo
        )
      );

      // 서버에 POST
      axios.post("http://localhost:8000/mypage", {
        important: todo.important,
      });
    },
    [todos]
  );

  // 6. 완료 클릭 메소드
  const onToggleOfComplete = useCallback(
    (listId) => {
      // 클릭된 일정의 listId의 important 값을 반대 boolean 값으로 변경하여 state에 구현
      setTodos(
        todos.map((todo) =>
          todo.listId === listId ? { ...todo, complete: !todo.complete } : todo
        )
      );

      // 서버에 POST
      axios.post("http://localhost:8000/mypage", {
        complete: todo.complete,
      });
    },
    [todos]
  );

  // 7. 컴포넌트 렌더링
  return (
    <>
      {/* 일정입력 컴포넌트 */}
      <div className="input-field">
        <NewToDo onInsert={onInsert} />
      </div>

      {/* 일정목록 컴포넌트 */}
      <section className="container-list">
        <div className="todo">
          <List
            todos={todos}
            onRemove={onRemove}
            onToggleOfImportant={onToggleOfImportant}
            onToggleOfComplete={onToggleOfComplete}
          />
        </div>
      </section>
    </>
  );
};

// 컴포넌트의 props가 바뀌지 않았다면 re-rendering 방지(= shouldComponentUpdate와 동일)
export default React.memo(ToDo);
