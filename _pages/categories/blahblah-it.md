---
title: "IT 이야기" # 카테고리 이름
layout: category
permalink: /이모저모/it-이야기/ # url
author_profile: true
taxonomy: it-talk
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['IT 이야기']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}