---
title: "웹페이지에 마우스 커서 이펙트 추가하기"
categories:
  - 프로젝트
  - 블로그 꾸미기
header:
  teaser: "/assets/images/250624/06.gif"
tags:
  - github blog
  - Jekyll
  - Minimal Mistakes
  - css
  - html
  - y2k
  - 블로그
  - 마우스 효과
  - 커서 효과
  - 커스터마이징
---

옛날 홈페이지에서 자주 보던 y2k 감성의 마우스 커서 효과를 블로그에 적용해보고싶었는데, 마침 적절한 사이트를 발견해서 소개해드립니다.

<figure>
    <img src="/assets/images/250624/06.gif" alt="마우스 커서 이펙트" width="700" />
    <figcaption>마우스 커서 이펙트 적용 모습</figcaption>
</figure>

깃허브 링크: [90s cursor effects][cursoreffects]

Jekyll과 같은 GitHub Pages나 자체 웹사이트 등 Markdown이 HTML을 지원하는 환경이면 간단하게 적용 가능합니다.

## 1. 페이지 전체에 커서 효과 적용

먼저 해당 페이지 전체에 커서 효과를 적용하고 싶은 경우, 아래의 스크립트를 넣습니다.

```
<script type="module">
  import { bubbleCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  new bubbleCursor();
</script>
```

저는 Jekyll 블로그에 md 형식으로 포스트를 올리는데, 위 스크립트를 md 파일에 삽입할 경우 커서 효과가 잘 작동하는 것을 확인했습니다.

혹은, 아래 CDN 링크를 사용해서 스크립트를 삽입해도 됩니다.

```
<script src="https://cdn.jsdelivr.net/npm/cursor-effects@latest/dist/browser.js"></script>
<script>
  new bubbleCursor();
</script>
```

## 2. 특정 element에서만 커서 효과 적용

만약 특정 영역에서만 커서 효과를 넣고 싶다면, 아래와 같이 작성하면 됩니다.

```
<div id="effect-box" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { bubbleCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box = document.getElementById('effect-box');
  new bubbleCursor({ element: box });
</script>
```

&nbsp;

실행화면🔽:

<div id="effect-box" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  🐟bubbleCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { bubbleCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box = document.getElementById('effect-box');
  new bubbleCursor({ element: box });
</script>

## 3. 마우스 커서 효과 종류들

90s cursor effects에서 제공하는 커서 효과 목록은 아래와 같습니다.
위 코드에서 bubbleCursor를 다른 커서로 바꾸어주기만 하면 됩니다.

<div id="effect-box1" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  🌈rainbowCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { rainbowCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box1 = document.getElementById('effect-box1');
  new rainbowCursor({ element: box1 });
</script>

&nbsp;

<div id="effect-box2" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  🧚‍♀️fairyDustCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { fairyDustCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box2 = document.getElementById('effect-box2');
  new fairyDustCursor({ colors: ["#b560eb", "#f7c4f3", "#c4d0f7"], element: box2 });
</script>

&nbsp;

<div id="effect-box3" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  👻ghostCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { ghostCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box3 = document.getElementById('effect-box3');
  new ghostCursor({ element: box3 });
</script>

&nbsp;

<div id="effect-box4" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  😀emojiCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { emojiCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box4 = document.getElementById('effect-box4');
  new emojiCursor({ element: box4 });
</script>

&nbsp;

<div id="effect-box5" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  ❄snowflakeCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { snowflakeCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box5 = document.getElementById('effect-box5');
  new snowflakeCursor({ element: box5 });
</script>

&nbsp;

<div id="effect-box6" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  ⏲clockCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { clockCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box6 = document.getElementById('effect-box6');
  new clockCursor({ element: box6 });
</script>

&nbsp;

<div id="effect-box7" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  🖱trailingCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { trailingCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box7 = document.getElementById('effect-box7');
  new trailingCursor({ element: box7 });
</script>

&nbsp;

<div id="effect-box8" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  🚩textFlag - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { textFlag } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box8 = document.getElementById('effect-box8');
  new textFlag({ element: box8 });
</script>

&nbsp;

<div id="effect-box9" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  🤪springyEmojiCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { springyEmojiCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box9 = document.getElementById('effect-box9');
  new springyEmojiCursor({ element: box9 });
</script>

&nbsp;

<div id="effect-box10" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  ⚫followingDotCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { followingDotCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box10 = document.getElementById('effect-box10');
  new followingDotCursor({ element: box10 });
</script>

&nbsp;

<div id="effect-box11" style="width: 850px; height: 300px; border: 2px solid #000; position: relative;">
  🅰characterCursor - 마우스를 올려보세요!
</div>

<script type="module">
  // 특정 영역에만 효과 적용
  import { characterCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
  const box11 = document.getElementById('effect-box11');
  new characterCursor({ element: box11 });
</script>

&nbsp;

## 4. 색깔, 텍스트 등 세부옵션 조정

몇몇 커서 종류는 색이나 텍스트, 이모티콘을 바꿀 수 있습니다.
그 중 몇가지만 소개드리면 아래와 같습니다.
예를 들어 fairyDustCursor의 경우, 아래와 같이 입자효과 색상을 지정할 수 있습니다.

```
new fairyDustCursor({ colors: ["#b560eb", "#f7c4f3", "#c4d0f7"], element: box2 });
```

emojiCursor에서 이모티콘의 종류, 간격을 지정하려면 아래와 같이 입력합니다.

```
new emojiCursor({ emoji: ["🦄", "🔮", "🎀"], delay: 25 });
```

textFlag에서 텍스트의 종류, 색상은 아래와 같이 변경할 수 있습니다. 한글도 잘 나오더라구요!

```
new textFlag({text: "Hello world!", color: ["#ee9df5"]});
```

기타 자세한 세부옵션 조정은 [90s cursor effects][cursoreffects] 링크를 참조해주세요!


[cursoreffects]: https://github.com/tholman/cursor-effects