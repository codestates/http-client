import React from "react";
import axios from "axios";

// components
import List from "../components/List";
import SignInModal from "../components/SignIn";
import SignUpModal from "../components/SignUp";

import "./ToDo.css";

// test data
import todoList from "../test_data_list.json";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      startDate: null,
      important: false,
      complete: false,
      err: "",
      todoList: [],
    };
  }

  // 1. 컴포넌트 진입하자마자 전체 목록 가져오기
  getList = async () => {
    // const list = await axios.get("http://localhost:8000/main"); // 노드서버 구축완료시 활성화 & 테스트
    await this.setState({ todoList: todoList });
  };

  // 2. Life cycle에 반영
  componentDidMount() {
    this.getList();
  }

  // 3. 일정입력
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  makeItImportant = () => {
    this.setState({ important: true });
  };
  inputToDo = async () => {
    const { content, startDate, err, important, todoList } = this.state;
    if (!this.state.content || !this.state.startDate) {
      this.setState({ err: "모든 항목은 필수입니다" });
    } else {
      // const todoList = await axios.post("http://localhost:8000/todo", {
      //     content: content,
      //     startDate: startDate,
      // })  // 노드서버 구축완료시 활성화 & 테스트
      todoList.push({
        content: this.state.content,
        startDate: this.state.startDate,
        important: this.state.important,
        complete: this.state.complete,
      });

    }
    this.props.history.push("/");
  };

  // 4. 컴포넌트 최종내용 렌더링
  render() {
    const {
      content,
      startDate,
      err,
      important,
      complete,
      todoList,
    } = this.state;
    return (
      <>
        <SignInModal />

        <form className="container-input" onSubmit={(e) => e.preventDefault()}>
          <div className="chkbox">
            <button
              className="check-important"
              important={{ important: true }}
              onClick={this.makeItImportant}
            >
              &#11088;
            </button>
          </div>
          <div className="inputbox">
            <div className="input-when">
              <span className="input-what-description">언제할까?</span>
              <input
                className="input-what-field"
                type="date"
                onChange={this.handleInputValue("startDate")}
              ></input>
            </div>
            <div className="input-what">
              <span className="input-when-description">뭘할까?</span>
              <input
                className="input-when-field"
                type="text"
                onChange={this.handleInputValue("content")}
              ></input>
            </div>
          </div>
          <button
            className="input-button"
            type="submit"
            onClick={this.inputToDo}
          >
            입력!
          </button>
          <div className="alert-box">{err !== "" ? err : null}</div>
        </form>
        <section className="container-list">
          <div className="todo">
            {todoList.map((onedayTodo, i) => (
              <List
                key={i}
                id={onedayTodo.id}
                content={onedayTodo.content}
                startDate={onedayTodo.startDate}
                complete={onedayTodo.complete}
                important={onedayTodo.important}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;
