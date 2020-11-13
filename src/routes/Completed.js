import React from "react";
// import axios from "axios";

// components
import List from "../components/List";

// test data
import todoList from "../test_data_list.json";

import "./Completed.css";

class Completed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { completeList: [] };
  }

  // 1. 완료 일정만 필터링
  getCompleteList = async () => {
    // const completeList = await axios.get("http://localhost:8000/complete");
    const completeList = await todoList.filter(
      (todoOne) => todoOne.complete === false
    );
    await this.setState({ completeList: completeList });
  };

  // 2. Life cycle에 반영
  componentDidMount() {
    this.getCompleteList();
  }

  // 3. 컴포넌트 최종내용 렌더링
  render() {
    const { completeList } = this.state;
    return (
      <>
        <section className="container-list">
          <div className="todo">
            {completeList.map((onedayTodo, i) => (
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

export default Completed;
