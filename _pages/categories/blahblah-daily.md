---
title: "일상" # 카테고리 이름
layout: category
permalink: /이모저모/일상/ # url
author_profile: true
taxonomy: 일상
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['일상']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}