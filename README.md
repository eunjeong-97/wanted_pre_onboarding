# wanted_pre_onboarding

## ⛏ Skills

- HTML5, CSS3
- React.js
- React Hooks
- Styled-components

## 🧑‍🎨 구현기능

✅ Toggle

![](image/toggle.gif)

✅ Modal

![](image/modal.gif)

- Tab
- Tag
- AutoComplete
- ClickToEdit

## 🙆 프로젝트 실행방법

#### 1. custom-component 폴더로 이동

```
$ cd custom-component
```

#### 2. package 설치

```
$ npm install
```

#### 3. 프로젝트 실행

```
$ npm start
```

## 💬 구현방법 및 이유

> 구현한 방법 및 해당 방법을 이용한 이유

### ✅ Toggle

Toggle이란 상태가 두 가지만 존재하여, 두 가지 상태 사이에서의 전환을 반복하는 것을 의미하기 때문에 React의 `useState Hooks` 를 통해 상태를 지정했습니다.

HTML에서 두 가지 선택지로 반복하는 대표적인 태그는 `<input type='checkbox'>` 체크박스를 사용했고,
체크박스의 상태를 변경시킬 때마다 `하얀색 공`의 위치와 배경색이 몇초에 걸려 바뀌기 때문에 애니메이션 기능을 사용했습니다.

### ✅ Modal

버튼을 눌렀을 때, `화면전환이 아닌!` 컨텐츠나 메세지를 담고있는 작은 박스를 추가적인 레이어로 띄우도록 구상했습니다.
그리고 `React.js` 에서는 이러한 UI의 상태를 나타낼 때에는 `useState Hooks` 를 활용하기 때문에 아래와 같이 구현했습니다.

> #### 1. 모달창이 보여지는지의 여부를 나타내는 상태

- 기본적으로는 false로 정하고,
- `Open Modal` 버튼을 눌렀을 때 true로 변경됩니다.
- Modal창에서 `X` 버튼을 눌렀을 때는 다시 false로 변경됩니다.

> #### 2. 해당페이지에 추가되는 새로운 레이아웃

- `Modal`의 배경이 되는 영역을 맨 위로 고정시키고
- `실제 컨텐트를 담고 있는 작은 박스`는 가운데로 정렬했습니다.


## 🔥 Error Handling Log

> 구현하면서 어려웠던 점과 해결 방법

### Toggle 

가이드라인을 보면, 변경된 배경색이 점점 넓어지면서 바뀌어지는데
ball의 배경이 되는 label 위에 새로운 요소를 만들어 스타일링을 하려 했으나, 기존의 label이 먹히지 않는 Error가 발생했습니다.

> #### 가상선택자 `::before` 사용

그렇기 때문에 실제 HTML상에서는 요소를 추가하지 않으면서 요소를 추가해주기 위해 가상선택자 `::before` 를 사용했습니다.

기존의 input의 배경색을 `grey`로 지정하고,
그 위에 덮어씌운 가상선택자의 배경색을 `tomato`로 지정했습니다.

Toggle이 선택되지 않았을 때 눌렀을 때 : `grey → tomato` 로 너비가 점점 넓어지면서 변경되고
Toggle이 선택된 상태에서 눌렀을 때 : `tomato → grey` 로 너비가 점점 좁아지면서 변경되기 때문에

각각의 애니메이션효과를 `styled-components의 keyframes`를 통해 지정해줬습니다.

이 때, tomato 배경색이 넘쳐나는 것을 방지하기 위해 브라우저의 개발자도구를 활용해 적절하게 수정했습니다.
