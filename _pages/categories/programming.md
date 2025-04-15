---
title: "프로그래밍" # 카테고리 이름
layout: category
permalink: /프로그래밍/ # url
author_profile: true
taxonomy: programming
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['프로그래밍']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}