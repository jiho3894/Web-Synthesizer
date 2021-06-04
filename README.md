![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Web-Synthesizer&fontAlign=58&fontAlignY=30&color=gradient)

# 웹앱 신디사이저
**웹사이트를 통해** 피아노, 드럼의 여러 가지 소리를 만들어 간편하게 **키보드**로 연주할 수 있는 신디사이저

### 개발 목적
  - 실물 신디사이저 없이도 인터넷을 통해 접속해서 연주가 가능하게 하기 위함 (편의성)
  - 누구나 쉽게 접근함으로써 신디사이저를 경험할 수 있게 함 (접근성)

### 개발 동기
  - 신디사이저나 건반에 관심이 있는 사람들을 위해 실제로 입문하기 이전에 도움을 주기 위함

# 바로가기
- 웹 페이지 https://jiho3894.github.io/Web-Synthesizer/piano/
- [웹사이트 시작화면](#3)
- [이용시 주의사항](#9)
- [Flask로 접근하기](#8)
- [선택화면](#4)
- [드럼](#5)
- [드럼 (사용방법)](#6)
- [피아노](#7)

# 개발 방향
- 사용자를 위한 신디사이저 웹사이트 개설
- Flask를 통해 신디사이저 웹서버를 개설
- 피아노, 드럼 사운드를 수집 후 건반에 적용 (터치 , 클릭)
- Web app형태로 모바일에서도 편리하게 사용하도록 미디어쿼리 적용

# 기술 스택
- HTML5
- CSS3
- JavaScript (ES6)
- Python Flask

# 시작화면 <a id="3">
<img src="https://user-images.githubusercontent.com/79081800/120317626-d7f9c080-c319-11eb-8176-919b66a280c1.jpg">
  
```javascript
$(window).on("load",function() {
  $(".loading_container").each(function(){
    $(this)
    .delay(5000) // 정확한 이미지 처리를 위한 딜레이 값 주기
  })
  $(".loading_container").fadeOut("fast");
});
```
  
#### 첫 화면 입장시 여러가지 처리를 거치는 과정에서 빈 화면 뜰 수 있습니다
#### 초기 입장에 딜레이값을 주어 이미지 처리 완료 상태로 만들었습니다
  
# 이용시 주의 사항 <a id="9">
<img src="https://user-images.githubusercontent.com/79081800/120762325-1a591280-c551-11eb-82bb-bf7c5f978c44.jpg">

```css
@media all and (orientation : Portrait) {
  html {
    display: none;
  }
}
```
### 해당 화면이 나와도 당황하지 마세요 저희 사이트는 가로모드만 지원하도록 설계했습니다!
#### 우리가 흔히아는 피아노도 모두 가로이기때문이죠 
  
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
if __name__ == '__main__': 
    app.run(host='0.0.0.0', debug=False)
```
  
#### flask를 이용해 사이트 접근 206, 304번이 나오면 정상적으로 작동하고있다는 뜻

