---
title: "Post: Image (Caption)"
categories:
  - 프로젝트
  - 블로그 꾸미기
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