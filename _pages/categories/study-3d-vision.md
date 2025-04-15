---
title: "3D Vision" # 카테고리 이름
layout: category
permalink: /공부하기/3d-vision/ # url
author_profile: true
taxonomy: 3d-vision
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['3D Vision']%}
{% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
{% endfor %}