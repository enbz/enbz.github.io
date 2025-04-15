---
title: "Graphics" # 카테고리 이름
layout: category
permalink: /공부하기/graphics/ # url
author_profile: true
taxonomy: graphics
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['Graphics']%}
{% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
{% endfor %}