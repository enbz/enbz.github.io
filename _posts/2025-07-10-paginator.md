---
title: "Minimal Mistakes - Jekyll paginate v2로 카테고리마다 페이지네이션 만들기"
categories:
  - 프로젝트
  - 블로그 꾸미기
header:
  teaser: "/assets/images/250710/02_.png"
tags:
  - github blog
  - Jekyll
  - Minimal Mistakes
  - css
  - html
  - 커스터마이징
  - pagination
  - Jekyll Paginate
  - Jekyll Paginate V2
  - Github Pages
  - Github Actions
---

Minimal Mistakes 테마를 이용하면 Jekyll paginate 플러그인을 간단하게 사용할 수 있습니다. 
하지만 기본적으로 제공하는 Jekyll paginate에는 paginator.posts 변수를 한번밖에 호출할 수 없어서, 홈 화면의 recent posts에만 pagination이 만들어진다는 불편함이 있습니다. (출처: [Minimal Mistakes doc][Minimal_Mistakes_doc])

글이 엄청나게 많은 카테고리를 클릭하면 pagination이 없이 스크롤이 무한하게 생기는 것이죠.

이러한 단점을 보완하기 위해 Minimal Mistakes에서 **Jekyll Paginate V2** 지원을 시작했는데요.
Jekyll Paginate V2를 적용해서 카테고리마다 pagination을 적용해봅시다!

## 1. Github Actions로 빌드 설정 바꾸기

Github Pages의 기본 빌드 화이트리스트에는 Jekyll Paginate V2 플러그인이 없습니다. 즉 Paginate V2를 설치해도 로컬에서만 적용되고 실제 웹에서는 적용이 되지 않는다는 것인데요.

기본 빌드 대신 더 자유도가 높은 Github Actions로 빌드하도록 설정을 바꿔주어야 합니다.

Github Actions로 Github Pages를 빌드하는 방법은 [이전 글][github_actions]에 자세히 나와있으니 참고해주세요!

## 2. Jekyll Paginate V2 플러그인 설치

플러그인을 설치해야하므로 Gemfile과 _config.yml을 수정해주세요.
저는 Gemfile에 아래와 같이 gem "jekyll-paginate-v2"를 한 줄 추가했습니다.

<script src="https://gist.github.com/enbz/8b400e878f19637e498c25376d2f764b.js"></script>

그리고 _config.yml의 plugin과 whitelist도 수정했습니다. 
혹시 충돌이 생길지 몰라 기존의 jekyll-paginate는 비활성화했어요.

<script src="https://gist.github.com/enbz/21792270cb23398c9807f3aea439bc2b.js"></script>

## 3. pagination 변수 설정

이제 _config.yml에서 기존의 jekyll-paginate 부분을 비활성화하고 jekyll-paginate-v2 부분을 활성화해주세요.

제 코드는 아래와 같았습니다.

<script src="https://gist.github.com/enbz/899049d311317565aebe07326e468491.js"></script>

per_page는 페이지당 글 수, permalink는 pagination된 페이지 링크, trail은 앞/뒤로 몇 개의 pagination을 만들건지 뜻하는 변수입니다.
이 부분은 전체 default 설정이고 카테고리 페이지에서 또 다르게 설정할 수 있습니다.

## 3. 카테고리 레이아웃에 pagination 넣기

이제 pagination을 카테고리마다 넣습니다.

저는 카테고리 레이아웃인 category.html의 마지막에 다음과 같이 추가했습니다.

<script src="https://gist.github.com/enbz/b1ad1d7879f1da1abefc5c4e03aae2f3.js"></script>


## 4. 카테고리 md파일에 pagination 설정하기

pagiantion 기능을 넣고 싶은 카테고리 md파일의 front matter에 아래와 같이 pagination 코드를 넣었습니다.

<script src="https://gist.github.com/enbz/c3c2a0668e8b13a11315de22c503b61e.js"></script>

여기까지 따라오셨다면 원하는 카테고리에 pagination 기능을 사용할 수 있을 것입니다.

## 5. (추가) 오류 디버깅

이 이후가 제가 가장 헤맸던 부분인데요.
pagination을 구현하고 생각지도 못했던 문제가 생겼습니다.
저는 페이지마다 breadcrumbs를 사용하고 있는데, 갑자기 breadcrumbs에서 주소를 못 읽어서 빈 칸이 뜨는 버그가 발생하더라구요.

디버깅 결과 Pagination V2를 사용하면 permalink가 블로그주소/카테고리/글로 끝나는 것이 아닌 블로그주소/카테고리/글/index.html로 나오는 것을 확인했습니다.
(gpt야 도와줘서 고마워)

이 부분은 _config.yml의 pagination permalink 설정과 관련있는 것 같습니다. 
Paginate V2가 자동으로 끝에 index.html을 붙이는데 이게 원래 Minimal Mistakes의 무언가와 충돌을 일으켰나봅니다. 저는 결국 breadcrumbs.html을 뜯어고쳐 해결했습니다.

혹시 유사한 문제를 겪으셨다면 참고해주세요.

## 6. 잘 적용된 모습

<img src="/assets/images/250710/00_.png" />

카테고리마다 pagination을 적용한 예시 화면입니다.

<img src="/assets/images/250710/01_.png" />

이전에 구현한 [grid 모드][grid_mode]도 사용하고 있는데, grid 모드에도 pagination이 잘 되는 모습입니다.

[Minimal_Mistakes_doc]: https://mmistakes.github.io/minimal-mistakes/docs/configuration/#paginate
[github_actions]: https://enbz.github.io/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EA%BE%B8%EB%AF%B8%EA%B8%B0/github-actions/
[grid_mode]: https://enbz.github.io/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EA%BE%B8%EB%AF%B8%EA%B8%B0/minimal-mistakes-list-grid-view/