---
title: "Post: Image (Caption)"
categories:
  - 이모저모
  - 일상
header:
  teaser: "/assets/images/Old-fashioned-peanut-butter-cookies.jpg"
excerpt: "직접 설정한 미리보기 텍스트입니다."
tags:
  - image
  - Post Formats
---

{% capture fig_img %}
![Foo]({{ "/assets/images/unsplash-gallery-image-3.jpg" | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Photo from Unsplash.</figcaption>
</figure>