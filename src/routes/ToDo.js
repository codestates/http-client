import React from "react";
import axios from "axios";
import List from "../components/List";
import "./ToDo.css"
import SignInModal from "../components/SignIn"

// fake data... 서버 API 연동 완료 시 삭제해야 함
let list = [
    { id: 0, contents: "쇼미더머니9 보기", startDate: "2020-11-02", complete: true, important: false },
    { id: 1, contents: "그것이알고싶다 보기", startDate: "2020-11-02", complete: false, important: false },
    { id: 2, contents: "한강 산책하기", startDate: "2020-11-04", complete: true, important: true },
    { id: 3, contents: "합정 북카페 가기", startDate: "2020-11-04", complete: true, important: true },
    { id: 4, contents: "오목집 족발 먹기", startDate: "2020-11-07", complete: false, important: false },
    { id: 5, contents: "베스킨라빈스 먹기", startDate: "2020-11-07", complete: true, important: false },
    { id: 6, contents: "라떼 간식 사기", startDate: "2020-11-08", complete: false, important: true },
];




class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doWhat: "",
            doWhen: "",
            err: "",
            important: false,
            list: []
        }
    }

    // 1. 컴포넌트 진입하자마자 전체 목록 가져오기
    getList = async () => {
        // const list = await axiox.get("http://localhost:8000/main"); // 노드서버 구축완료시 활성화 & 테스트
        this.setState({ list: list });
    }

    // 2. Life cycle에 반영
    componentDidMount() {
        this.getList()
    }

    // 3. 일정입력
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };
    inputToDo = async () => {
        const isImportant = (e) => {
            this.setState({ important: e.target.important })
        }

        const { doWhat, doWhen, err, important, list } = this.state;
        if (!this.state.doWhat || !this.state.doWhen) {
            this.setState({ err: "모든 항목은 필수입니다" })
        }
        // const input = await axios.post("http://localhost:8000/todo", {
        //     contents: doWhat,
        //     startDate: doWhen,
        // })  // 노드서버 구축완료시 활성화 & 테스트

        const result = await list.push({ contents: this.state.doWhat, startDate: this.state.doWhen, important: this.state.important })
        this.props.history.push("/todo");
    }

    // 4. 컴포넌트 최종내용 렌더링
    render() {
        const { doWhat, doWhen, err, important, list } = this.state;
        return (
            <>
                <SignInModal />
                <form className="container-input" onSubmit={(e) => e.preventDefault()}>
                    <div className="checkbox">
                        <input type="checkbox" important={important} onChange={this.isImportant} alt="중요해..?" />
                    </div>
                    <div className="inputbox">
                        <div className="input-when">
                            <span className="input-what-description">언제할까?</span>
                            <input className="input-what-field" type='date' onChange={this.handleInputValue("doWhen")}></input>
                        </div>
                        <div className="input-what">
                            <span className="input-when-description">뭘할까?</span>
                            <input className="input-when-field" type="text" onChange={this.handleInputValue("doWhat")}></input>
                        </div>
                    </div>
                    <button className="input-button" type='submit' onClick={this.inputToDo}>입력!</button>
                    <div className="alert-box">{err !== "" ? err : null}</div>
                </form>
                <section className="container-list">
                    <div className="todo">
                        {list.map(onedayTodo => (
                            <List
                                key={onedayTodo.id}
                                id={onedayTodo.id}
                                contents={onedayTodo.contents}
                                startDate={onedayTodo.startDate}
                                complete={onedayTodo.complete}
                                important={onedayTodo.important}
                            />
                        ))}
                    </div>
                </section>
            </>
        )
    }
}

export default ToDo;