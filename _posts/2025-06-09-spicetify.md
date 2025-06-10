---
title: "Spicetify로 스포티파이 테마 바꾸기"
categories:
  - 이모저모
  - 일상
header:
  teaser: "/assets/images/250609/header.png"
tags:
  - powershell
  - spotify
  - 플러그인
  - 커스터마이징
---

스포티파이를 사용한지 N년 되었는데, 

컴퓨터에서 사용하기 좋은 스포티파이용 플랫폼 툴 spicetify와 내가 쓰는 플러그인을 소개하고자 한다. (아마 유명해서 알 사람은 다 알 듯)

&nbsp;
&nbsp;
&nbsp;

## 0. spicetify 소개

[공식 홈페이지 주소][spicetify]

굉장히 친절하게 설치 방법이 나와있다. 참고로 스포티파이 웹페이지가 아닌 스포티파이 데스크톱 앱에만 적용된다. 

[스포티파이 앱 설치 주소][spotify]  


&nbsp;
&nbsp;
&nbsp;

## 1. 설치 방법 (marketplace 추가 버전)

### 1-1. Windows

윈도우 기준 powershell을 실행하고, 다음 명령어를 입력한다.

```
iwr -useb https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.ps1 | iex
```

기본 버전에는 없는 사이드바가 생겨서 플러그인 설치가 편리해진다.

### 1-2. Linux, MacOS

윈도우와 유사하게 shell에 아래 코드를 입력한다. 

```
curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh
```

&nbsp;
&nbsp;
&nbsp;

## 2. 업데이트하기

사용하면서 느낀 것은 스포티파이가 굉장히 업데이트를 자주 하는 앱이라는 것이다. 업데이트될 때마다 spicetify가 적용이 안되는 현상이 발생하는데, 귀찮지만 spicetify를 업데이트 해주면 된다.

powershell 또는 shell을 실행해서 아래 코드만 입력해주면 된다.

```
spicetify update
```

&nbsp;
&nbsp;
&nbsp;

## 3. 사용 후기

설치한 후 스포티파이를 실행하면 왼쪽 위에 marketplace 메뉴가 생긴다.
클릭하면 확장기능, 테마, 스니펫 등등을 골라 설치할 수 있다.  

<img src="/assets/images/250609/01.png" alt="spicetify 메뉴 모습" />

나는 현재 daksh2k의 Full Screen 기능과 JulienMaille의 Default Dynamic을 테마를 사용하고 있다.

Full Screen은 음악 재생 중에 우측 하단의 버튼을 클릭하면 전체 화면으로 가사를 감상할 수 있다.

<img src="/assets/images/250609/03.png" alt="full screen 실행 화면 1" />

<img src="/assets/images/250609/04.png" alt="full screen 실행 화면 2" />

Default Dynamic은 앨범 자켓 이미지에 맞춰서 색이 바뀌는 테마여서, 소소하게 마음에 든다.   
light/dark도 설정할 수 있다.

<figure>
    <img src="/assets/images/250609/02.gif" alt="default dynamic theme" width="700" />
    <figcaption>Default Dynamic 테마</figcaption>
</figure>

다른 느낌 좋은 테마가 나오면 업데이트해보겠다.

[spicetify]: https://spicetify.app/docs/getting-started
[spotify]: https://open.spotify.com/download