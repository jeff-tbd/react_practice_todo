# react_practice_todo
react 연습을 위한 일정 관리 웹 어플리케이션 프로젝트

### 컴포넌트 설명

- TodoTemplate : 화면 가운데 정렬, 앱 타이틀을 보여줌. children으로 내부 JSX를 props로 받아 와서 렌더링
- TodoInsert
- TodoListItem : todo list 각 항목에 대한 정보 보여줌
- TodoList : todo 배열을 props로 받아 온 후, map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줌

# 프로젝트 중 공부 내용

## Prettier 설정

- printWidth : 한줄로 표현되는 글자 수 제약
- trailingComma : 객체, 배열, 함수 등의 후행에 쉼표 사용 여부
- useTabs : tab이 있는 줄을 들여쓰기 함(true일 경우)

## Flexbox

- 레이아웃을 다룰 때 한 번에 하나의 차원(행이나 열)만을 다룬다

- Flex 예시

  - https://developer.mozilla.org/ko/docs/Web/CSS/flex

- align-items

  - 교차축을 따라 **flex 항목** 열을 정렬하는 방식
  - 초기값은 stretch, **flex 항목**의 높이는 **flex 컨테이너** 내 **flex 항목** 행의 최대 높이로 지정
  - flex-start, flex-end, center 등이 있다

- justify-content

  - 주축을 따라 **flex 항목** 행을 정렬하는 방식

  - flex-start, flex-end, center, space-around, space-between, space-evenly 등이 있다

  - `space-between`을 지정하면 주죽 방향 여유 공간을 **flex 항목** 사이의 공간에 균등 배분합니다. 

    `space-around`는 시작선 및 끝선과 **flex 항목**간 공간도 균등 배분에 고려하므로 시작선 및 끝선과 **flex 항목** 간의 공간의 크기를 1로 배분한다면 **flex 항목** 사이의 공간은 2로 배분합니다. 

    `space-evenly`로 지정하면 여유 공간을 **flex 항목** 사이의 공간 및 시작선 및 끝선과 **flex 항목** 간의 공간에 모두 균등하게 배분합니다.

- 축약형 속성 flex

  -  `flex-grow`, `flex-shrink`, `flex-basis` 값을 각각 사용하지 않고 이 세 속성을 한번에 지정하는 [`flex`](https://developer.mozilla.org/ko/docs/Web/CSS/flex) 축약형을 많이 사용

  - Flex-grow : 

  - ```javascript
    /* Keyword values */
    flex: auto;
    flex: initial;
    flex: none;
    
    /* One value, unitless number: flex-grow */
    flex: 2;
    flex: 1; //사용가능한 공간은 각 항목에게 동일하게 분배
    
    /* One value, length or percentage: flex-basis */
    flex: 10rem;
    flex: 30%;
    
    /* Two values: flex-grow | flex-basis */
    flex: 1 30px;
    
    /* Two values: flex-grow | flex-shrink */
    flex: 2 2;
    
    /* Three values: flex-grow | flex-shrink | flex-basis */
    flex: 2 2 10%;
    
    /* Global values */
    flex: inherit;
    flex: initial;
    flex: unset;
    ```

## 의사 클래스 ( pseudo-class )

- 선택자에 추가하는 키워드로, 선택한 요소가 특별한 상태여야 만족할 수 있습니다
- https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```



## 의사 요소( pseudo-element )

- 선택자에 추가하는 키워드로, 선택한 요소의 일부분에만 스타일을 입힐 수 있습니다
- https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements

```scss
&::placeholder {
  color: #dee2e6;
}
```

## adjacent sibling selector(+)

- 앞에서 지정한 요소의 **바로 다음**에 위치하는 형제 요소만 선택

- ```css
  /* Paragraphs that come immediately after any image */
  img + p {
    font-style: bold;
  }
  ```

## :nth-child( an + b )

- 인자로 even, odd를 받을 수 있다

## scss의 & 문법

- `&` 키워드는 상위(부모) 선택자를 참조하여 치환합니다.

## classnames 모듈

- 조건부 스타일링 때 주로 사용한다
- https://www.npmjs.com/package/classnames
- false일 경우 입력되지 않는다.

# Hook API

## useCallback

- 렌더링 성능을 최적화해야 하는 상황에서 사용
- 파라미터(생성하고 싶은 함수, 배열(어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시))
- props로 전달해야 할 함수를 만들 때는 useCallback을 사용하여 함수를 감싸는 것을 습관화

```react
useCallback( () => callback, [target] );
```



## useRef

- Ref는 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공
- https://ko.reactjs.org/docs/refs-and-the-dom.html
- 포커스 관리할 때

```react
//등록 버튼 눌렀을 때 포커스가 인풋 쪽으로 넘어감
const Average = () => {
  const inputEl = useRef(null);
  //inputEl을 포커스
  const onInsert = useCallback( _ => inputEl.current.focus(), [number, list] );
  //react에게 input 엘리먼트를 inputEl ref와 연결하겠음
	return (
  <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
  </div>)
}

```

- 로컬 변수 사용

```javascript
const id = useRef(1);
const setId = n => {id.current = n}
// 이렇게 ref안의 값이 바뀌어도 컴포넌트가 렌더링되지 않음
// 랜더링과 관련되지 앟은 값을 관리할 때
```

## onSubmit

onSubmit 이벤트는 onClick과 다르게 인풋에서 enter를 눌렀을 때도 발생하기 때문

# 컴포넌트 최적화

### React.memo

- https://ui.toast.com/weekly-pick/ko_20190731/

### useState의 함수형 업데이트

- setTodos 인자로 새로운 상태를 넣는 대신, 업데이트를 어떻게 할 지 정의해 주는 함수를 넣는다

### 결과

- before
- ![image](https://user-images.githubusercontent.com/33744302/72526640-3dc2e500-38aa-11ea-946a-ad651f8d2e3e.png)
- after
- ![image](https://user-images.githubusercontent.com/33744302/72527116-60093280-38ab-11ea-9006-c7d3499224e6.png)

### useReducer 사용하기

```react
//상태를 업데이트 하는 로직 분리
//업데이트를 위해 필요한 정보를 담은 action값을 전달받음
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos); 
  //맨 처음 랜더링때만 createBulkTodos 호출
  //dispatch는 액션을 발생시키는 함수, 파라미터로 action을 넣어주면 reducer함수 호출
  const nextId = useRef(251);
  const addTodo = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);
}
```





