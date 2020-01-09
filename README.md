# react_practice_todo
react 연습을 위한 일정 관리 웹 어플리케이션 프로젝트

### 컴포넌트 설명

- TodoTemplate : 화면 가운데 정렬, 앱 타이틀을 보여줌. children으로 내부 JSX를 props로 받아 와서 렌더링
- TodoInsert
- TodoListItem : todo list 각 항목에 대한 정보 보여줌
- TodoList : todo 배열을 props로 받아 온 후, map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줌