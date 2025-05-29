var store = [{
        "title": "Edge Case: Nested and Mixed Lists",
        "excerpt":"Nested and mixed lists are an interesting beast. It’s a corner case to make sure that      Lists within lists do not break the ordered list numbering order   Your list styles go deep enough.   Ordered – Unordered – Ordered      ordered item   ordered item            unordered       unordered                    ordered item           ordered item                           ordered item   ordered item   Ordered – Unordered – Unordered      ordered item   ordered item            unordered       unordered                    unordered item           unordered item                           ordered item   ordered item   Unordered – Ordered – Unordered      unordered item   unordered item            ordered       ordered                    unordered item           unordered item                           unordered item   unordered item   Unordered – Unordered – Ordered      unordered item   unordered item            unordered       unordered                    ordered item           ordered item                           unordered item   unordered item   Task Lists      Finish my changes   Push my commits to GitHub   Open a pull request  ","categories": ["이모저모","일상"],
        "tags": ["content","css","edge case","lists","markup"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/edge-case-nested-and-mixed-lists/",
        "teaser": "/assets/images/500x300.png"
      },{
        "title": "Edge Case: No Body Content",
        "excerpt":" ","categories": ["이모저모","일상"],
        "tags": ["content","edge case","layout"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/edge-case-no-body-content/",
        "teaser": null
      },{
        "title": "Edge Case No Yaml Title",
        "excerpt":"This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename.  ","categories": ["이모저모","일상"],
        "tags": ["edge case","layout","title"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/edge-case-no-yaml-title/",
        "teaser": null
      },{
        "title": "Edge Case: Post with multiline excerpt",
        "excerpt":"Et ex ullamco duis don’t combine these words quis laborum sunt sint. Nisi et Lorem reprehenderit cupidatat. Aliqua fugiat aliquip officia culpa elit. Adipisicing do eu duis aute et aute amet anim ut cillum aliqua. Aliqua adipisicing occaecat et ullamco fugiat.  ","categories": ["이모저모","일상"],
        "tags": [],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/edge-case-multiline-excerpt/",
        "teaser": null
      },{
        "title": "Antidisestablishmentarianism",
        "excerpt":"Title should not overflow the content area   A few things to check for:      Non-breaking text in the title, content, and comments should have no adverse effects on layout or functionality.   Check the browser window / tab title.   If you are a theme developer, check that this text does not break anything.   The following CSS properties will help you support non-breaking text.   -ms-word-wrap: break-word; word-wrap: break-word;  ","categories": ["이모저모","일상"],
        "tags": ["content","css","edge case","html","layout","title"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/edge-case-title-should-not-overflow-the-content-area/",
        "teaser": null
      },{
        "title": "Edge Case: Invalid syntax highlight languages",
        "excerpt":"Good highlighting:   str = ARGV.first if str   str = str.b[/\\A_(.*)_\\z/, 1]   if str and Gem::Version.correct?(str)     version = str     ARGV.shift   end end   Good (but dumb) highlighting:   str = ARGV.first if str   str = str.b[/\\A_(.*)_\\z/, 1]   if str and Gem::Version.correct?(str)     version = str     ARGV.shift   end end   Bad highlighting:   str = ARGV.first if str   str = str.b[/\\A_(.*)_\\z/, 1]   if str and Gem::Version.correct?(str)     version = str     ARGV.shift   end end  ","categories": ["이모저모","일상"],
        "tags": ["content","css","edge case"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/edge-case-broken-highlighting/",
        "teaser": "/assets/images/new-york-city-picture-2560x1440_67859-mm-90.jpg"
      },{
        "title": "Post: Modified Date",
        "excerpt":"This post has been updated and should show a modified date if used in a layout.   All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she must have looked rather delightful, for Mrs. Darling put her hand to her heart and cried, “Oh, why can’t you remain like this for ever!” This was all that passed between them on the subject, but henceforth Wendy knew that she must grow up. You always know after you are two. Two is the beginning of the end.  ","categories": ["이모저모","일상"],
        "tags": ["Post Formats","readability","standard"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/post-modified/",
        "teaser": "/assets/images/wp9956939-pixel-art-pc-wallpapers.png"
      },{
        "title": "Post: Header Image with OpenGraph Override",
        "excerpt":"This post has a header image with an OpenGraph override.   header:   image: /assets/images/page-header-image.png   og_image: /assets/images/page-header-og-image.png  ","categories": ["이모저모","일상"],
        "tags": ["edge case","image","layout"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/post-header-image-og-override/",
        "teaser": "/assets/images/unsplash-gallery-image-1-th.jpg"
      },{
        "title": "Post: Overlay Image with OpenGraph Override",
        "excerpt":"This post has a header image with an OpenGraph override.   header:   overlay_image: /assets/images/unsplash-image-1.jpg   og_image: /assets/images/page-header-og-image.png   caption: \"Photo credit: [**Unsplash**](https://unsplash.com)\"   actions:     - label: \"Learn more\"       url: \"https://unsplash.com\"  ","categories": ["이모저모","일상"],
        "tags": ["edge case","image","layout"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/post-header-overlay-image-og-override/",
        "teaser": "/assets/images/8131285.jpg"
      },{
        "title": "Post: Image (with Link)",
        "excerpt":"  ","categories": ["이모저모","일상"],
        "tags": ["image","Post Formats"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/post-image-linked/",
        "teaser": "/assets/images/unsplash-image-6.jpg"
      },{
        "title": "Post: Image (Standard)",
        "excerpt":"The preferred way of using images is placing them in the /assets/images/ directory and referencing them with an absolute path. Prepending the filename with {{ site.url }}{{ site.baseurl }}/assets/images/ will make sure your images display properly in feeds and such.   Standard image with no width modifier classes applied.   HTML:   &lt;img src=\"{{ site.url }}{{ site.baseurl }}/assets/images/filename.jpg\" alt=\"\"&gt;   or Kramdown:   ![alt]({{ site.url }}{{ site.baseurl }}/assets/images/filename.jpg)      Image that fills page content container by adding the .full class with:   HTML:   &lt;img src=\"{{ site.url }}{{ site.baseurl }}/assets/images/filename.jpg\" alt=\"\" class=\"full\"&gt;   or Kramdown:   ![alt]({{ site.url }}{{ site.baseurl }}/assets/images/filename.jpg) {: .full}     ","categories": ["이모저모","일상"],
        "tags": ["image","Post Formats"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/post-image-standard/",
        "teaser": "/assets/images/wp6010471-resolutions-wallpapers.jpg"
      },{
        "title": "Post: Image (Caption)",
        "excerpt":"         Photo from Unsplash.  ","categories": ["이모저모","일상"],
        "tags": ["image","Post Formats"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/post-image-caption/",
        "teaser": "/assets/images/Old-fashioned-peanut-butter-cookies.jpg"
      },{
        "title": "Post: Gallery",
        "excerpt":"These are gallery tests for image wrapped in &lt;figure&gt; elements.   To place a gallery add the necessary YAML Front Matter:   gallery:   - url: /assets/images/unsplash-gallery-image-1.jpg     image_path: /assets/images/unsplash-gallery-image-1-th.jpg     alt: \"placeholder image 1\"     title: \"Image 1 title caption\"   - url: /assets/images/unsplash-gallery-image-2.jpg     image_path: /assets/images/unsplash-gallery-image-2-th.jpg     alt: \"placeholder image 2\"     title: \"Image 2 title caption\"   - url: /assets/images/unsplash-gallery-image-3.jpg     image_path: /assets/images/unsplash-gallery-image-3-th.jpg     alt: \"placeholder image 3\"     title: \"Image 3 title caption\"   - url: /assets/images/unsplash-gallery-image-4.jpg     image_path: /assets/images/unsplash-gallery-image-4-th.jpg     alt: \"placeholder image 4\"     title: \"Image 4 title caption\"   And then drop-in the gallery include — gallery caption is optional.   {% include gallery caption=\"This is a sample gallery with **Markdown support**.\" %}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      This is a sample gallery with Markdown support.       This is some text after the gallery just to make sure that everything aligns properly.   Here comes another gallery, this time set the id to match 2nd gallery hash in YAML Front Matter.   gallery2:   - url: https://flic.kr/p/8a6Ven     image_path: https://farm2.staticflickr.com/1272/4697500467_8294dac099_q.jpg     alt: \"Black and grays with a hint of green\"   - url: https://flic.kr/p/8a738X     image_path: https://farm5.staticflickr.com/4029/4697523701_249e93ba23_q.jpg     alt: \"Made for open text placement\"   - url: https://flic.kr/p/8a6VXP     image_path: https://farm5.staticflickr.com/4046/4697502929_72c612c636_q.jpg     alt: \"Fog in the trees\"   And place it like so:   {% include gallery id=\"gallery2\" caption=\"This is a second gallery example with images hosted externally.\" %}                                                                                                                                This is a second gallery example with images hosted externally.       And for giggles one more gallery just to make sure this works. To fill page content container add class=\"full\".                                                      This is a third gallery example with two images and fills the entire content container.       Gallery column layout can be overrided by setting a layout.   {% include gallery id=\"gallery\" layout=\"half\" caption=\"This is a half gallery layout example.\" %}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      This is a half gallery layout example.      ","categories": ["이모저모","일상"],
        "tags": ["gallery","Post Formats","tiled"],
        "url": "/%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/%EC%9D%BC%EC%83%81/post-gallery/",
        "teaser": "/assets/images/Dairy-Free-Peanut-Butter-Cookies-4.jpg"
      },{
        "title": "[Minimal Mistakes]카테고리에서 리스트뷰/그리드뷰 전환 버튼 만들기",
        "excerpt":"        Minimal Mistakes 테마로 블로그를 만들면 카테고리는 보통 아래 그림처럼 줄글 목록, 즉 리스트뷰로 보이게 된다.             기본 카테고리 리스트뷰 모습 (예시)   사실 리스트뷰도 크게 불편하진 않지만, 그리드뷰로 썸네일과 함께 글 목록을 보는 것이 더 편할 때가 있다.   몇 가지 코드만 수정해주면, 카테고리 글 목록에서 리스트뷰/그리드뷰를 전환해주는 버튼을 추가할 수 있다.           1. category.html 수정   먼저 모든 카테고리에 대해서 레이아웃을 바꾼다고 가정하여, /_layout/category.html 파일 전체를 다음과 같이 수정한다.             2. _archive.scss에 버튼 클래스 추가   위 코드에서 9-10번 줄에 나오는 view-switch와 view_btn 클래스를 /_sass/minimal-mistakes/_archive.scss에 정의하여준다. 다른 코드는 건드리지 않고 끝 부분에 아래 코드를 추가해주기만 하면 된다.             3. 각 카테고리 md 파일 적절하게 수정   minimal mistakes에서 카테고리 페이지가 md 형식으로 있을텐데, layout: category에서 모든 정보를 불러왔으므로 front matter를 제외하고 나머지 코드는 다 지운다. 카테고리 페이지는 /_pages/categories/~~~.md 형태로 저장되어 있을 것이다.   다음은 내 블로그 카테고리인 “일상”에 해당하는 daily.md 파일 예시이다. 아래 코드에서 title, permalink, taxonomy를 각자 사용목적에 맞게 변경하면 된다. 또한, paginator 등 추가적인 기능도 넣어도 무방하다.     이 때 주의할 점은, taxonomy 이름은 title과 같게 해야한다는 것이다. 왜냐하면, category.html에서 taxonomy와 일치하는 카테고리의 글들만 보여주도록 구현했기 때문이다.           4. 아이콘 이미지 넣기   이제 마지막으로 버튼에 사용될 아이콘을 asset 폴더에 넣으면 끝이다. 구글링해봤지만 다 loyalty가 있는 이미지밖에 없어서 직접 파워포인트로 만들었다(…)         위 파일들을 저장해서 적당한 폴더에 넣으면 된다.   category.html을 위 코드 그대로 작성했다고 치면   /assets/images/list_view_icon.png   /assets/images/grid_view_icon.png   가 맞는 경로가 된다.           5. 썸네일 이미지 추가하기 (옵션)   이로써 그리드/리스트뷰 전환 구현이 끝났다.   하지만 포스트를 올릴 때 썸네일을 추가해주지 않으면, 그리드뷰로 전환해도 심심하게 보일 것이다.   좀 더 풍부한 시각적 효과를 위해서, 귀찮지만 썸네일을 포스트의 front matter의 teaser: 부분에 추가해준다. 덧붙여, 썸네일 아래 미리보기로 텍스트의 일부가 나오는데, 이 부분을 따로 설정하고 싶다면 excerpt: 부분에 따로 입력해줄 수 있다. 만약 설정하지 않는다면 포스트의 첫 문장이 나온다.         결과는 다음과 같다.             최종 리스트뷰/그리드뷰 전환 모습   이렇게 minimal mistakes에서 리스트뷰/그리드뷰 전환 기능이 완성되었다. :3      ","categories": ["프로젝트","블로그 꾸미기"],
        "tags": ["github blog","Jekyll","Minimal Mistakes","css","html","커스터마이징"],
        "url": "/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EA%BE%B8%EB%AF%B8%EA%B8%B0/minimal-mistakes-%EB%A6%AC%EC%8A%A4%ED%8A%B8%EB%B7%B0-%EA%B7%B8%EB%A6%AC%EB%93%9C%EB%B7%B0-%EC%A0%84%ED%99%98/",
        "teaser": "/assets/images/post_250530_01.png"
      }]
