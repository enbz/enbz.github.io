---
title: "이모저모" # 카테고리 이름
layout: category
permalink: /blahblah/ # url
author_profile: true
taxonomy: blahblah
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['blahblah']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}