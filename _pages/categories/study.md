---
title: "공부하기" # 카테고리 이름
layout: category
permalink: /study/ # url
author_profile: true
taxonomy: study
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['study']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}