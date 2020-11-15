import React from "react";

// 리액트 기본 아이콘 로드
// https://react-icons.github.io/react-icons/icons?name=md
import {
  MdStar,
  MdStarBorder,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

// node-sass 모듈의 조건부 CSS 적용 및 렌더링 기능 추가
import cn from "classnames";

import "./ListItem.scss";

const ListItem = ({
  todo,
  onRemove,
  onToggleOfImportant,
  onToggleOfComplete,
}) => {
  const { listId, important, content, complete } = todo;
  return (
    <div className="list-item">
      {/* 중요버튼 */}
      <div
        className={cn("important-check", { important })}
        onClick={() => onToggleOfImportant(listId)}
      >
        {important ? <MdStar /> : <MdStarBorder />}
      </div>

      {/* 완료버튼 */}
      <div
        className={cn("complete-check", { complete })}
        onClick={() => onToggleOfComplete(listId)}
      >
        <div className="content">{content}</div>
        {complete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>

      {/* 삭제버튼 */}
      <div className="remove" onClick={() => onRemove(listId)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

// 컴포넌트의 props가 바뀌지 않았다면 re-rendering 방지(= shouldComponentUpdate와 동일)
export default React.memo(ListItem);
