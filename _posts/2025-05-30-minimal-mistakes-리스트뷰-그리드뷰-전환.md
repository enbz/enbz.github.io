---
title: "[Minimal Mistakes]카테고리에서 리스트뷰/그리드뷰 전환 버튼 만들기"
categories:
  - 프로젝트
  - 블로그 꾸미기
header:
  teaser: "/assets/images/post_250530_01.png"
tags:
  - github blog
  - Jekyll
  - Minimal Mistakes
  - css
  - html
  - 커스터마이징
---

&nbsp;
&nbsp;
&nbsp;

Minimal Mistakes 테마로 블로그를 만들면 카테고리는 보통 아래 그림처럼 줄글 목록, 즉 리스트뷰로 보이게 된다.


<figure>
    <img src="/assets/images/post_250530_01.png" alt="기존 리스트뷰" width="700" />
    <figcaption>기본 카테고리 리스트뷰 모습 (예시)</figcaption>
</figure>


사실 리스트뷰도 크게 불편하진 않지만, 그리드뷰로 썸네일과 함께 글 목록을 보는 것이 더 편할 때가 있다.

몇 가지 코드만 수정해주면, 카테고리 글 목록에서 리스트뷰/그리드뷰를 전환해주는 버튼을 추가할 수 있다.   

&nbsp;
&nbsp;
&nbsp;

## 1. category.html 수정

먼저 모든 카테고리에 대해서 레이아웃을 바꾼다고 가정하여, /_layout/category.html 파일 전체를 다음과 같이 수정한다.

<script src="https://gist.github.com/enbz/5c43da7e87643df36141cf2f097ceca5.js"></script>

&nbsp;
&nbsp;
&nbsp;

## 2. _archive.scss에 버튼 클래스 추가


위 코드에서 9-10번 줄에 나오는 view-switch와 view_btn 클래스를 /_sass/minimal-mistakes/_archive.scss에 정의하여준다.
다른 코드는 건드리지 않고 끝 부분에 아래 코드를 추가해주기만 하면 된다.

<script src="https://gist.github.com/enbz/409cc61e85e93cbcc24fc144234e63f4.js"></script>

&nbsp;
&nbsp;
&nbsp;

## 3. 각 카테고리 md 파일 적절하게 수정

minimal mistakes에서 카테고리 페이지가 md 형식으로 있을텐데, layout: category에서 모든 정보를 불러왔으므로 front matter를 제외하고 나머지 코드는 다 지운다. 카테고리 페이지는 /_pages/categories/~~~.md 형태로 저장되어 있을 것이다.

다음은 내 블로그 카테고리인 "일상"에 해당하는 daily.md 파일 예시이다. 아래 코드에서 title, permalink, taxonomy를 각자 사용목적에 맞게 변경하면 된다. 또한, paginator 등 추가적인 기능도 넣어도 무방하다.

<script src="https://gist.github.com/enbz/b04bb7184b7b6556f0dab3445d2a43f1.js"></script>


이 때 주의할 점은, taxonomy 이름은 title과 같게 해야한다는 것이다. 왜냐하면, category.html에서 taxonomy와 일치하는 카테고리의 글들만 보여주도록 구현했기 때문이다.

&nbsp;
&nbsp;
&nbsp;

## 4. 아이콘 이미지 넣기

이제 마지막으로 버튼에 사용될 아이콘을 asset 폴더에 넣으면 끝이다. 구글링해봤지만 다 loyalty가 있는 이미지밖에 없어서 직접 파워포인트로 만들었다(...) 

<img src="/assets/images/list_view_icon.png" alt="list_view_icon.png" width="100" />

<img src="/assets/images/grid_view_icon.png" alt="grid_view_icon.png" width="100" />

위 파일들을 저장해서 적당한 폴더에 넣으면 된다.

category.html을 위 코드 그대로 작성했다고 치면  

/assets/images/list_view_icon.png   
/assets/images/grid_view_icon.png  

가 맞는 경로가 된다.

&nbsp;
&nbsp;
&nbsp;

## 5. 썸네일 이미지 추가하기 (옵션)

이로써 그리드/리스트뷰 전환 구현이 끝났다.

하지만 포스트를 올릴 때 썸네일을 추가해주지 않으면, 그리드뷰로 전환해도 심심하게 보일 것이다.   
좀 더 풍부한 시각적 효과를 위해서, 귀찮지만 썸네일을 포스트의 front matter의 teaser: 부분에 추가해준다. 덧붙여, 썸네일 아래 미리보기로 텍스트의 일부가 나오는데, 이 부분을 따로 설정하고 싶다면 excerpt: 부분에 따로 입력해줄 수 있다. 만약 설정하지 않는다면 포스트의 첫 문장이 나온다.

<script src="https://gist.github.com/enbz/6cc1010b48dba6023ec3a4b993dd66cd.js"></script>

&nbsp;

결과는 다음과 같다.

<figure>
    <img src="/assets/images/Animation.gif" alt="구현한 뷰 전환" width="700" />
    <figcaption>최종 리스트뷰/그리드뷰 전환 모습</figcaption>
</figure>

이렇게 minimal mistakes에서 리스트뷰/그리드뷰 전환 기능이 완성되었다. :3

&nbsp;
