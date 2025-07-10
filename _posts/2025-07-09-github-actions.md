---
title: "Github Actions로 Jekyll 블로그 빌드하기 - 왜 필요할까? 간단 정리"
categories:
  - 프로젝트
  - 블로그 꾸미기
header:
  teaser: "/assets/images/250709/04_.png"
tags:
  - github blog
  - Jekyll
  - Minimal Mistakes
  - Github Actions
  - Github Pages
---

Github Pages로 Jekyll 블로그를 호스팅하면서, 여러가지 Jekyll 플러그인들을 적용하다보면 어떤 기능은 로컬에서는 잘 작동하다가 배포 후에는 작동하지 않는 경우가 있습니다. 저도 그랬었는데요.

이 문제를 해결하기 위해 구글링을 하다가 Github Pages의 빌드 과정에서 이슈가 발생했다는 것을 알게 되었습니다. 

## 1. 왜 플러그인 설치가 안될까? Github Pages의 빌드 과정에 대해 알아보자

Github Pages로 웹사이트 혹은 블로그를 호스팅하는 과정은 대강 다음과 같은데요.

먼저 사용자가 HTML, Markdown(.md), css 등 블로그를 이루는 정적파일들을 특정 브랜치(main이나 gh-pages 등)에 push하면 Github Pages는 이 파일들의 내용을 웹에 표시함으로써 블로그를 배포해줍니다. 

그런데 Jekyll 블로그는 일반적인 HTML 파일만이 아니라 .md, _config.yml, Liquid 템플릿 문법 등 편의를 위해 여러 개발자 친화적인 포맷으로 작성됩니다. 그래서 <ins>**빌드**</ins>라고 불리는 과정이 꼭 필요한데요.

블로거들이 md로 글을 작성해도 결국에는 HTML로 변환하는 빌드 과정이 필요하다는 것이죠. 이 외에도 아래와 같은 복잡한 작업들이 빌드 과정에 들어갑니다.

<img src="/assets/images/250709/01.png" alt="빌드 과정에서 일어나는 일" />

Github Pages는 이러한 과정을 알아서 자동 빌드해주는 기능이 있지만, 문제는 Github Pages에서 정해놓은 <ins>공식허용 플러그인</ins>만 사용할 수 있다는 점입니다. 그래서 이러한 화이트리스트에 없는 서드파티 플러그인이나 원하는 Jekyll 버전을 설치해서 쓰고 싶은 경우, 기본 빌드가 아닌 **커스텀 빌드**가 필수적입니다.

## 2. Github Actions란?

Github Pages의 기본 빌드는 **Jekyll**만 지원하고, Jekyll 플러그인 또한 제한합니다.

반면 Github Actions는 Jekyll뿐만 아니라 React, Vue, Hugo 등등 다양한 빌드 시스템을 모두 지원하여 더욱 범용적입니다.

그리고 Jekyll 플러그인 제한도 없으므로 커스터마이징이 훨씬 자유롭다는 장점이 있습니다.

이 외에도 빌드 환경, branch 설정, 빌드 시점 등 모든 것을 사용자 입맛에 맞게 설정할 수 있습니다.

## 3. Github Pages를 Github Actions로 빌드해보자

먼저 깃허브의 블로그 리포지토리의 위쪽에 있는 Settings 탭을 클릭한 다음 Code and automaton 메뉴 아래에 있는 Pages를 클릭합니다.

<img src="/assets/images/250709/02_.png" />

Build and deployment 아래의 Source 드롭다운 메뉴를 Github Actions로 설정해주세요.

<img src="/assets/images/250709/03_.png" />

이번에는 상단의 Actions 탭으로 가서 New workflow를 시작한 다음 Jekyll을 찾습니다.

<img src="/assets/images/250709/05_.png" />

Jekyll workflow 아래에 configure를 클릭합니다. (Github Pages Jekyll이 아닌 그냥 Jekyll입니다!)

<img src="/assets/images/250709/06_.png" />

이대로 다 하셨으면 commit changes를 클릭합니다.

<img src="/assets/images/250709/07_.png" />

이제 branch에 업데이트를 할 때마다 action이 자동적으로 실행하면서 빌드가 될 것입니다.
빌드 내역은 Actions 탭에서 언제든 확인할 수 있습니다.

<img src="/assets/images/250709/04_.png" />

출처: [Jekyll 공식 홈페이지][jekyll_github_actions]

[jekyll_github_actions]: https://jekyllrb.com/docs/continuous-integration/github-actions/