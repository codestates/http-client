import React from "react";
// import axios from "axios";

// components
import List from "../components/List";

// test data
import todoList from "../test_data_list.json";

import "./Important.css";

class Important extends React.Component {
  constructor(props) {
    super(props);
    this.state = { importantList: [] };
  }

  // 1. 중요 일정만 필터링
  getImportantList = async () => {
    // const importantList = await axios.get("http://localhost:8000/important");
    const importantList = await todoList.filter(
      (todoOne) => todoOne.important === false
    );
    await this.setState({ importantList: importantList });
  };

  // 2. Life cycle에 반영
  componentDidMount() {
    this.getImportantList();
  }

  // 3. 컴포넌트 최종내용 렌더링
  render() {
    const { importantList } = this.state;
    return (
      <>
        <section className="container-list">
          <div className="todo">
            {importantList.map((onedayTodo, i) => (
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

export default Important;
