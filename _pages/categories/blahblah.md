---
title: "이모저모" # 카테고리 이름
layout: category
permalink: /이모저모/ # url
author_profile: true
taxonomy: blahblah
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['이모저모']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}