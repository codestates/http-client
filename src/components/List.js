import React from "react";
// import axios from "axios";

import todoList from "../test_data_list.json";

import "./List.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      content: props.content,
      startDate: props.startDate,
      complete: props.complete,
      important: props.important,
    };
    console.log(this.state);
  }

  // 1. Life Cycle에 반영
  componentDidMount = async () => {
    this.importantClick();
    this.completeClick();
  };

  // 2. 별표 클릭 이벤트
  importantClick = async () => {
    this.setState((current) => ({ important: !current.important }));
    const { id, important } = this.state;
    // const importantChange = await axios.post("http://localhost:8000/important", {
    //   important: important,
    // });
    todoList[id].important = important;
    console.log(todoList);
  };

  // 3. 완료 클릭 이벤트
  completeClick = async () => {
    this.setState((current) => ({ complete: !current.complete }));
    const { id, complete } = this.state;
    // const completeChange = await axios.post("http://localhost:8000/complete", {
    //   complete: complete,
    // });
    todoList[id].complete = complete;
    console.log(todoList);
  };

  // 4. 컴포넌트 최종내용 렌더링
  render() {
    const { id, content, startDate, complete, important } = this.state;
    return (
      <>
        <div className="list">
          <div className="list-id">{id}</div>
          <div className="list-important">
            <button className="checkemoji" onClick={this.importantClick}>
              {important === true ? <>&#11088;</> : <>&#11036;</>}
            </button>
          </div>
          <div className="list-content">{content}</div>
          <div className="list-startDate">{startDate}</div>
          <div className="list-complete">
            <button className="checkemoji" onClick={this.completeClick}>
              {complete === true ? <>&#9989;</> : <>&#11036;</>}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default List;
