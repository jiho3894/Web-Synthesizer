![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Web-Synthesizer&fontAlign=58&fontAlignY=30&color=gradient)

> ## **2021년 6월 17일 업데이트 예정**
-  모바일에서 피아노 사용 시 버튼이 파란색으로 보이는 현상을 수정합니다.
-  모바일에서 드럼 사용 시 작은 버튼을 포함한 드럼 전체 부분에 클릭이 가능하도록 수정합니다.
-  시작 화면 UI가 변경됩니다

# 웹앱 신디사이저
**웹사이트를 통해** 피아노, 드럼의 여러 가지 소리를 만들어 간편하게 **키보드**로 연주할 수 있는 신디사이저

### 개발 목적
  - 사용자가 실물 신디사이저 없이도 인터넷으로 사이트를 접속해 연주가 가능하도록 합니다 **(편의성)**
  - 누구나 쉽게 접근함으로써 신디사이저를 경험할 수 있게 합니다 **(접근성)**
  - 초보자들도 이용할 수 있는 사용방법, 간단한 버튼식 이벤트를 제공합니다 **(UX/UI)**

### 개발 동기
  - **신디사이저나 피아노 드럼**에 관심이 있는 사람들을 위해 실제로 입문하기 전에 체험을 할 수 있습니다

# 바로가기
- 웹 페이지 https://jiho3894.github.io/Web-Synthesizer/piano/ 
- [이용시 주의사항](#9)
- [웹사이트 시작화면](#3)
- [Flask로 접근하기](#8)
- [선택화면](#4)
- [드럼](#5)
- [드럼 (사용방법)](#6)
- [피아노](#7)

# 개발 방향
- 사용자를 위한 신디사이저 **웹사이트를 개설**
- Flask를 통해 신디사이저 **웹서버를 개설**
- 피아노, 드럼 사운드를 수집 후 건반에 적용 **(터치 , 클릭)**
- Web app형태로 모바일에서도 편리하게 사용하도록 **미디어쿼리** 적용

# 기술 스택
- **HTML5**
- **CSS3**
- **JavaScript(ES6)**
- **Python Flask**
- **IDE : VS Code**
  
# 이용시 주의 사항 <a id="9">
<img src="https://user-images.githubusercontent.com/79081800/121024930-a2ece280-c7df-11eb-8af8-01699bf1ee10.jpg">


```css
@media all and (orientation : Portrait) {
  .error {
    display: block;
  }
}
```
### 저희 사이트는 가로모드만 지원하도록 설계했습니다!
#### 우리가 아는 모든 피아노는 가로입니다^^

# 시작화면 <a id="3">
<img src="https://user-images.githubusercontent.com/79081800/120317626-d7f9c080-c319-11eb-8176-919b66a280c1.jpg">
  
```javascript
$(window).on("load",function() {
  $(".loading_container").each(function(){
    $(this)
    .delay(5000) // 이미지 처리를 위한 딜레이 값 주기
  })
  $(".loading_container").fadeOut("fast");
});
```
  
# 선택화면 <a id="4">
<img src="https://user-images.githubusercontent.com/79081800/120317629-d8925700-c319-11eb-850b-0875f5038e53.jpg">
  
```html
 <a href="drum.html"></a>
 <a href="piano.html"></a>
```
#### 드럼과 피아노 기능을 구성한 사이트와 링크를 연결했습니다
#### 해당 화면을 그림을 클릭하여 각 악기를 경험해보세요

# 드럼 <a id="5">
<img src="https://user-images.githubusercontent.com/79081800/120317634-d92aed80-c319-11eb-894a-9ca8fe6b9ddd.jpg">
  
```javascript
 const A1 = new Audio("drums/A1.mp3"); // 드럼 오디오 소리 연결
 A1Key.classList.add("active");
 setTimeout(() => A1Key.classList.remove("active"), 200); // 드럼 터치 또는 클릭시 떨리는 모션 기능
 if (keyCode === 65) return playA1(); // keycode를 이용하여 특정 키마다 소리를 넣었음
```
- keycode : https://blog.outsider.ne.kr/322
#### 드럼을 이용할 수 있는 공간입니다 자유롭게 이용하세요
  
# 드럼 (사용방법) <a id="6">
<img src="https://user-images.githubusercontent.com/79081800/120317635-d9c38400-c319-11eb-9af8-b7d3a08d849e.jpg">

```css
.input1:hover  + .container {
  display: block;
} // 사용방법 버튼 hover시 사용방법 img가 나오도록 코드 작성
```
#### 사용방법으로 해당 위치가 어떤 베이스 역할을 하고있는지 확인할 수 있습니다
#### 드럼 입문자에게 더욱 필요한 정보들 입니다


# 피아노 <a id="7">
<img src="https://user-images.githubusercontent.com/79081800/120317640-da5c1a80-c319-11eb-817a-942d80471888.jpg">
  
```javascript
 const C4 = new Audio("/sounds/C4.mp3"); // 피아노 오디오 소리 연결
 setTimeout(() => (clone.volume = 0.8), 400);
 setTimeout(() => (clone.volume = 0.6), 600);
 setTimeout(() => (clone.volume = 0.4), 800); // 오디오 시간에 따라 볼륨을 조절하여
 setTimeout(() => (clone.volume = 0.2), 1000); // 점점 소리를 줄여가
 setTimeout(() => (clone.volume = 0), 1500); // 길게 울리는것 처럼 소리를 만들었음
 C4Key.classList.add("active");
 setTimeout(() => C4Key.classList.remove("active"), 200); //피아노 터치 또는 클릭시 눌리는 모션 적용
 if (keyCode === 81) return playC4(); // // keycode를 이용하여 특정 키마다 소리를 넣었음
```
#### 피아노를 이용할 수 있는 공간입니다 자유롭게 사용해주세요
  
# Flask로 접근하기 <a id="8">
  
<img src="https://user-images.githubusercontent.com/79081800/120763340-12e63900-c552-11eb-9859-d5dcb62efaff.jpg">
<img src="https://user-images.githubusercontent.com/79081800/120763341-137ecf80-c552-11eb-96cd-9859b7448d0f.jpg">

```python
from flask import Flask, render_template
if __name__ == '__main__': 
    app.run(host='0.0.0.0', debug=False)
```
  
#### Flask를 이용해 사이트 접근 206, 304번이 나오면 정상적으로 작동하고있으니
#### 걱정없이 사용하세요
  
### 기타 오류 발생시 아래 메일을 클릭하여
### 문의 남겨주세요
[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:snugyun01@gmail.com)](mailto:crsn1111@gmail.com)

